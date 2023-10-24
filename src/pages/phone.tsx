import {
  Keyboard,
  KeyboardKey,
  keys,
  useEnterPhone,
} from "@/features/enter-phone-number";
import { PhoneNumberPreview } from "@/features/enter-phone-number/ui/phone-number-preview";
import { useResetNavigate } from "@/features/focus-navigate";
import { ROUTES } from "@/shared/constants/routes";
import { PhoneLayout } from "@/shared/ui/layouts/phone-layout";
import { CloseButton } from "@/widgets/close-button";
import { CompletePhoneButton } from "@/widgets/complete-phone-button";
import { ProvePersonalData } from "@/widgets/prove-personal-data";
import { useState } from "react";

export function PhonePage() {
  const {
    phone,
    handleChangePhoneFromDisplayKeyboard,
    handleErasePhone,
    isValidPhone,
  } = useEnterPhone();

  useResetNavigate();

  const [isProvedPersonalData, setIsProvedPersonalData] = useState(false);
  const isDisabledSubmitButton = !(isProvedPersonalData && phone.length === 10);

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
        phonePreview={<PhoneNumberPreview value={phone} countryCode="7" />}
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
        processingPersonalData={
          <ProvePersonalData
            focusId={11}
            props={{
              checked: isProvedPersonalData,
              onChange: (isChecked) =>
                setIsProvedPersonalData(isChecked as boolean),
            }}
            moves={{
              up: -1,
              down: 1,
              left: -1,
              right: 2,
            }}
            entered
          >
            Согласие на обработку
            <br />
            персональных данных
          </ProvePersonalData>
        }
        submitButton={
          <CompletePhoneButton
            focusId={12}
            moves={{ left: -1, right: 1, up: -1, down: 1 }}
            props={{ disabled: isDisabledSubmitButton }}
          >
            Подтвердить номер
          </CompletePhoneButton>
        }
      />
    </>
  );
}
