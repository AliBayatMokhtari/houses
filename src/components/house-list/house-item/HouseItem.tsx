import { IHouse } from "models/house";
import {
  ActionIcon,
  ActionItem,
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

const fallbackImgUrl = "images/broken-house.png";

interface IHouseItemProps {
  house: IHouse;
}

export default function HouseItem({ house }: IHouseItemProps) {
  const features = [
    { icon: "images/icons/bed.png", value: house.rooms.bedrooms },
    { icon: "images/icons/bath.png", value: house.rooms.bathrooms },
    { icon: "images/icons/size.png", value: `${house.size} m2` },
  ];

  return (
    <Container>
      <InnerContainer>
        <HouseItemImg src={house.image || fallbackImgUrl} />
        <Info>
          <InfoHeader>
            <Street>{house.location.street}</Street>
            {house.madeByMe && (
              <Actions>
                <ActionItem>
                  <ActionIcon src="images/icons/edit-primary.png" />
                </ActionItem>
                <ActionItem>
                  <ActionIcon src="images/icons/delete.png" />
                </ActionItem>
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
