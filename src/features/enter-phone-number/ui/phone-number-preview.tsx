import { usePreviewValue } from "../model/use-preview-value";

type PhoneNumberPreviewProps = {
  value: string;
  countryCode: string;
};

export function PhoneNumberPreview({
  value,
  countryCode,
}: PhoneNumberPreviewProps) {
  const previewValue = usePreviewValue({ value, countryCode });
  return (
    <div className="text-telnumber font-bold tracking-wider">
      {previewValue}
    </div>
  );
}
