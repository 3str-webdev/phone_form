import { validPhone } from "@/entities/phone_number";
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
import { ROUTES } from "@/shared/constants/routes";
import { PhoneLayout } from "@/shared/ui/layouts/phone-layout";
import { CloseButton } from "@/widgets/close-button";
import { CompletePhoneButton } from "@/widgets/complete-phone-button";
import { InvalidPhoneMessage } from "@/widgets/invalid-phone-message";
import { ProvePersonalData } from "@/widgets/prove-personal-data";
import { useRouter } from "next/router";
import { useState } from "react";

const country: Country = "RU";

export function PhonePage() {
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

  const getSubInfoComponent = () => {
    if (isInvalid) {
      return <InvalidPhoneMessage>Неверно введён номер</InvalidPhoneMessage>;
    }

    return (
      <ProvePersonalData
        focusId={11}
        props={{
          checked: isProvedPersonalData,
          onChange: (isChecked) =>
            setIsProvedPersonalData(isChecked as boolean),
        }}
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
            props={{ href: ROUTES.HOME }}
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
                      focusId={key.focusId}
                      moves={key.moves}
                      props={{
                        keyObject: key,
                        onClick,
                      }}
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
            focusId={12}
            moves={{ left: -1, right: 1, up: -1, down: 1 }}
            props={{
              disabled: isDisabledSubmitButton,
              onClick: handleCompletePhoneClick,
              isLoading,
            }}
          >
            Подтвердить номер
          </CompletePhoneButton>
        }
      />
    </>
  );
}
