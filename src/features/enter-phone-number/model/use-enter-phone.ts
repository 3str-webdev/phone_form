import { useCallback, useEffect, useState } from "react";

export function useEnterPhone() {
  const [phone, setPhone] = useState<string>("");

  const handleChangePhoneFromDisplayKeyboard = useCallback(
    (value: number) => {
      if (phone.length < 10) {
        setPhone((prev) => prev + value);
      }
    },
    [phone.length]
  );

  const handleErasePhone = useCallback(() => {
    if (phone.length > 0) {
      setPhone((prev) => prev.substring(0, phone.length - 1));
    }
  }, [phone.length]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const value = e.key;
      const isDigit = /^[0-9]$/.test(value);
      if (isDigit) {
        handleChangePhoneFromDisplayKeyboard(Number(value));
      } else if (value === "Backspace") {
        handleErasePhone();
      }
    },
    [handleChangePhoneFromDisplayKeyboard, handleErasePhone]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);

  return {
    phone,
    handleChangePhoneFromDisplayKeyboard,
    handleErasePhone,
  };
}
