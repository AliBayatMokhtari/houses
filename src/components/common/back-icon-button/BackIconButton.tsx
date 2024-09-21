import IconButton, { IIconButtonProps } from "../icon-button/IconButton";

export default function BackIconButton(props: Omit<IIconButtonProps, "icon">) {
  return <IconButton {...props} icon="images/icons/back.png" />;
}
