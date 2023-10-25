import {
  RegisterFocusableComponent,
  RegisterFocusableComponentProps,
} from "@/features/focus-navigate";
import { UIButton, UIButtonProps } from "@/shared/ui";
import { CrossIcon } from "@/shared/ui/icons";
import clsx from "clsx";
import { useRouter } from "next/router";
import { MouseEvent, forwardRef } from "react";

export type CloseButtonProps = UIButtonProps & {
  href: string;
};

const CloseButtonComponent = forwardRef<HTMLButtonElement, CloseButtonProps>(
  function Close({ onClick, href, ...props }, ref) {
    const router = useRouter();

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        onClick(e);
      }

      router.push(href);
    };

    return (
      <UIButton
        {...props}
        ref={ref}
        variant="outlined"
        className={clsx(
          "absolute top-5 right-5 w-[88px] flex items-center justify-center bg-white",
          "focus:bg-main-2"
        )}
        onClick={handleClick}
      >
        <CrossIcon />
      </UIButton>
    );
  }
);

export function CloseButton({
  focusId,
  component = CloseButtonComponent,
  moves,
  props,
}: RegisterFocusableComponentProps<CloseButtonProps>) {
  return (
    <RegisterFocusableComponent
      component={component}
      focusId={focusId}
      moves={moves}
      props={props}
    />
  );
}
