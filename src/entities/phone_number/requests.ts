import { Country } from "@/features/enter-phone-number";
import axios from "axios";

export const validPhone = async (
  phone: string,
  country: Country
): Promise<boolean> => {
  try {
    const url = "/phone/validate";
    const response = await axios<{ valid: boolean }>(url, {
      params: {
        access_key: process.env.PHONE_VALIDATE_API_KEY,
        number: phone,
        country_code: country,
      },
    });

    return response.data.valid;
  } catch (err) {
    if (err instanceof Error) {
      console.error(`Ошибка при проверке номера: ${err.message}`);
    }
    return false;
  }
};
