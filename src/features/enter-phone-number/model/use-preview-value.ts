import { insert } from "@/shared/lib/insert";

export function usePreviewValue({
  value,
  countryCode,
}: {
  value: string;
  countryCode: string;
}) {
  const getPreviewValue = () => {
    let result = `+${countryCode}(${value}`;
    const emptyPlacesCount = 10 - value.length;

    for (let i = 0; i < emptyPlacesCount; ++i) {
      result += "_";
    }

    result = insert(result, 6, ")");
    result = insert(result, 10, "-");
    result = insert(result, 13, "-");

    return result;
  };

  return getPreviewValue();
}
