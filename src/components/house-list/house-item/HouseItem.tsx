import { IHouse } from "models/house";
import {
  Actions,
  Address,
  Container,
  FeatureIcon,
  FeatureItem,
  Features,
  FeatureValue,
  HouseItemImg,
  Info,
  InfoHeader,
  InnerContainer,
  Price,
  Street,
} from "./house-item.style";
import IconButton from "components/common/icon-button/IconButton";
import { fallbackImgUrl } from "lib/constants";
import { useNavigate } from "react-router-dom";

interface IHouseItemProps {
  house: IHouse;
}

export default function HouseItem({ house }: IHouseItemProps) {
  const navigate = useNavigate();
  const features = [
    { icon: "images/icons/bed.png", value: house.rooms.bedrooms },
    { icon: "images/icons/bath.png", value: house.rooms.bathrooms },
    { icon: "images/icons/size.png", value: `${house.size} m2` },
  ];

  function goToDetailsPage() {
    navigate(`/houses/${house.id}`);
  }

  return (
    <Container>
      <InnerContainer onClick={goToDetailsPage}>
        <HouseItemImg src={house.image || fallbackImgUrl} />
        <Info $madeByMe={house.madeByMe}>
          <InfoHeader>
            <Street>{house.location.street}</Street>
            {house.madeByMe && (
              <Actions>
                <IconButton icon="images/icons/edit-primary.png" />
                <IconButton icon="images/icons/delete.png" />
              </Actions>
            )}
          </InfoHeader>
          <Price>€ {(house.price / 1000).toFixed(3)}</Price>
          <Address>
            {house.location.zip} {house.location.city}
          </Address>
          <Features>
            {features.map((feature, index) => (
              <FeatureItem key={index}>
                <FeatureIcon src={feature.icon} />
                <FeatureValue>{feature.value}</FeatureValue>
              </FeatureItem>
            ))}
          </Features>
        </Info>
      </InnerContainer>
    </Container>
  );
}
