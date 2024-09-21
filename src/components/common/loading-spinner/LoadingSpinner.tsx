import { ComponentProps } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Spinner } from "./loading-spinner.style";
import { useTheme } from "styled-components";

interface ILoadingSpinnerProps extends ComponentProps<"div"> {
  size?: number;
  animationDuration?: number;
  strokeWidth?: number;
  color?: string;
}

export default function LoadingSpinner({
  size = 18,
  animationDuration = 0.75,
  strokeWidth = 5,
  color,
  ...restProps
}: ILoadingSpinnerProps) {
  const theme = useTheme();

  return (
    <Spinner {...restProps}>
      <RotatingLines
        width={size.toString()}
        strokeWidth={strokeWidth.toString()}
        strokeColor={color || theme.colors.element.primary.hex}
        animationDuration={animationDuration.toString()}
      />
    </Spinner>
  );
}
