import { ComponentProps } from "react";
import { Content, Spinner, Button as StyledButton } from "./button.style";

interface IButtonProps extends ComponentProps<"button"> {
  loading?: boolean;
  spinnerSize?: number;
}

export default function Button({
  children,
  loading,
  spinnerSize,
  ...restProps
}: IButtonProps) {
  return (
    <StyledButton {...restProps}>
      <Content $loading={!!loading}>{children}</Content>
      {loading && <Spinner color="white" size={spinnerSize} />}
    </StyledButton>
  );
}
