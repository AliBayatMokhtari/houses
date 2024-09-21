import { ComponentProps } from "react";
import { Icon, StyledIconButton } from "./icon-button-style";

interface IIconButtonProps extends ComponentProps<"button"> {
  icon: string;
  iconProps?: ComponentProps<"img">;
}

export default function IconButton({
  icon,
  iconProps,
  ...restProps
}: IIconButtonProps) {
  return (
    <StyledIconButton {...restProps}>
      <Icon {...iconProps} src={icon} />
    </StyledIconButton>
  );
}
