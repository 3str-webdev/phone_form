import { useDetectUserActivity } from "@/features/detect-user-activity";
import {
  COUNTRY_CODE,
  Country,
  Keyboard,
  KeyboardKey,
  keys,
  useEnterPhone,
  useValidPhone,
} from "@/features/enter-phone-number";
import { PhoneNumberPreview } from "@/features/enter-phone-number/ui/phone-number-preview";
import { useResetNavigate } from "@/features/focus-navigate";
import {
  InactionTimer,
  useInactionTimerStartTime,
} from "@/features/inaction-timer";
import { PhoneLayout } from "@/pages/phone/ui/phone-layout";
import { ROUTES } from "@/shared/constants/routes";
import { CloseButton } from "@/widgets/close-button";
import { CompletePhoneButton } from "@/widgets/complete-phone-button";
import { InvalidPhoneMessage } from "@/widgets/invalid-phone-message";
import { ProvePersonalData } from "@/widgets/prove-personal-data";
import { QrCodeInfo } from "@/widgets/qr-code-info";
import { useRouter } from "next/router";
import { useState } from "react";

const country: Country = "RU";

export function PhonePage() {
  const router = useRouter();
  const { phone, handleChangePhoneFromDisplayKeyboard, handleErasePhone } =
    useEnterPhone();

  useResetNavigate();

  const [isProvedPersonalData, setIsProvedPersonalData] = useState(false);
  const isDisabledSubmitButton = !(isProvedPersonalData && phone.length === 10);

  const { isLoading, isInvalid, handleCompletePhoneClick } = useValidPhone(
    phone,
    country,
    isProvedPersonalData
  );

  const { startedAt, refreshStartTime } = useInactionTimerStartTime(Date.now());
  useDetectUserActivity(refreshStartTime);

  const handleInactionTimerFinish = () => {
    router.push(ROUTES.HOME);
  };

  const getSubInfoComponent = () => {
    if (isInvalid) {
      return <InvalidPhoneMessage>Неверно введён номер</InvalidPhoneMessage>;
    }

    return (
      <ProvePersonalData
        checked={isProvedPersonalData}
        onChange={(isChecked) => setIsProvedPersonalData(Boolean(isChecked))}
        focusId={11}
        moves={{ up: -1, down: 1, left: -1, right: 2 }}
        entered
      >
        Согласие на обработку
        <br />
        персональных данных
      </ProvePersonalData>
    );
  };

  return (
    <>
      <PhoneLayout
        closeButton={
          <CloseButton
            href={ROUTES.HOME}
            focusId={13}
            moves={{
              left: -1,
              up: -1,
            }}
          />
        }
        phonePreview={
          <PhoneNumberPreview
            value={phone}
            countryCode={COUNTRY_CODE[country]}
          />
        }
        keyboard={
          <Keyboard
            keys={
              <>
                {keys.map((key, i) => {
                  const onClick =
                    key.type === "erase"
                      ? handleErasePhone
                      : () => handleChangePhoneFromDisplayKeyboard(key.value);

                  return (
                    <KeyboardKey
                      key={`keyboard_key_${i}`}
                      keyObject={key}
                      onClick={onClick}
                      focusId={key.focusId}
                      moves={key.moves}
                    >
                      <p>{key.label}</p>
                    </KeyboardKey>
                  );
                })}
              </>
            }
          />
        }
        processingPersonalData={getSubInfoComponent()}
        submitButton={
          <CompletePhoneButton
            onClick={handleCompletePhoneClick}
            disabled={isDisabledSubmitButton}
            isLoading={isLoading}
            focusId={12}
            moves={{ left: -1, right: 1, up: -1, down: 1 }}
          >
            Подтвердить номер
          </CompletePhoneButton>
        }
        inactionTimer={
          <InactionTimer
            startedAt={startedAt}
            seconds={10}
            onFinish={handleInactionTimerFinish}
          />
        }
        qrCodeInfo={<QrCodeInfo className="absolute right-10 bottom-10" />}
      />
    </>
  );
}
