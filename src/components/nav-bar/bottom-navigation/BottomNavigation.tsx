import { useMatch } from "react-router-dom";
import { routes } from "router/routes";
import {
  Container,
  ItemContainer,
  NavigationImage,
} from "./bottom-navigation.style";
import useAnyMatch from "lib/use-any-match";

interface IMobileNavigationItem {
  name: `${"home" | "info"}-mobile-navigation${"-active" | ""}.png`;
  url: string;
}

export default function BottomNavigation() {
  const navigationItems: IMobileNavigationItem[] = [
    {
      name: useAnyMatch([routes.home, routes.newHouse, routes.houseDetails])
        ? "home-mobile-navigation-active.png"
        : "home-mobile-navigation.png",
      url: routes.home,
    },
    {
      name: useMatch(routes.aboutUs)
        ? "info-mobile-navigation-active.png"
        : "info-mobile-navigation.png",
      url: routes.aboutUs,
    },
  ];

  return (
    <Container>
      {navigationItems.map((navItem) => (
        <ItemContainer key={navItem.url} to={navItem.url}>
          <NavigationImage src={`/images/icons/${navItem.name}`} />
        </ItemContainer>
      ))}
    </Container>
  );
}
