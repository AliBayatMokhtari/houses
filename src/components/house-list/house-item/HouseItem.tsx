import { IHouse } from "models/house";
import {
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
  return (
    <Container>
      <InnerContainer>
        <HouseItemImg src={house.image || fallbackImgUrl} />
        <Info>
          <InfoHeader>
            <Street>{house.location.street}</Street>
          </InfoHeader>
          <Price>€ {(house.price / 1000).toFixed(3)}</Price>
          <Address>
            {house.location.zip} {house.location.city}
          </Address>
          <Features>
            <FeatureItem>
              <FeatureIcon src="images/icons/bed.png" />
              <FeatureValue>{house.rooms.bedrooms}</FeatureValue>
            </FeatureItem>
            <FeatureItem>
              <FeatureIcon src="images/icons/bath.png" />
              <FeatureValue>{house.rooms.bathrooms}</FeatureValue>
            </FeatureItem>
            <FeatureItem>
              <FeatureIcon src="images/icons/size.png" />
              <FeatureValue>{house.size} m2</FeatureValue>
            </FeatureItem>
          </Features>
        </Info>
      </InnerContainer>
    </Container>
  );
}
