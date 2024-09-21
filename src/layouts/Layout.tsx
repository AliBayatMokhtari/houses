import BottomNavigation from "components/nav-bar/bottom-navigation/BottomNavigation";
import { Outlet } from "react-router-dom";
import { Container, OutletContainer } from "./layout.styles";

export default function Layout() {
  return (
    <Container>
      <OutletContainer>
        <Outlet />
      </OutletContainer>
      <BottomNavigation />
    </Container>
  );
}
