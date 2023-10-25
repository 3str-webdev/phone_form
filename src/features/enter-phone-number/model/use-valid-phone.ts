import { validPhone } from "@/entities/phone_number";
import { ROUTES } from "@/shared/constants/routes";
import { useRouter } from "next/router";
import { useState } from "react";
import { Country } from "..";

export function useValidPhone(
  phone: string,
  country: Country,
  isProvedPersonalData: boolean
) {
  const [isLoading, setIsLoading] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const router = useRouter();

  const handleCompletePhoneClick = async () => {
    setIsLoading(true);
    const isValid = await validPhone(phone, country);

    if (isProvedPersonalData && isValid) {
      router.push(ROUTES.FINAL);
      setIsInvalid(false);
    } else {
      setIsInvalid(true);
    }
    setIsLoading(false);
  };

  return {
    isLoading,
    isInvalid,
    handleCompletePhoneClick,
  };
}
