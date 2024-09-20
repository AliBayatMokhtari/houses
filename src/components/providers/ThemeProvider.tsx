import { PropsWithChildren } from "react";
import { ThemeProvider as StyledComponentThemeProvider } from "styled-components";
import { theme } from "theme";

export default function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <StyledComponentThemeProvider theme={theme}>
      {children}
    </StyledComponentThemeProvider>
  );
}
