import { IHouse } from "models/house";
import {
  DetailsRow,
  Details,
  HouseImg,
  DetailsIcon,
  Title,
  DetailsLbl,
  DetailsRowItem,
  LocationIcon,
  GarageLbl,
  GarageIcon,
  Description,
} from "./house-details.style";
import { fallbackImgUrl } from "lib/constants";
import LoadingSpinner from "components/common/loading-spinner/LoadingSpinner";
import RecommendedForYou from "./recommended-for-you/RecommendedForYou";

interface IHouseDetailsProps {
  house: IHouse;
  loading: boolean;
}

export default function HouseDetails({ house, loading }: IHouseDetailsProps) {
  return (
    <>
      <HouseImg src={house.image || fallbackImgUrl} />
      <Details>
        <Title>
          {house.location.street} {loading && <LoadingSpinner />}
        </Title>
        <DetailsRow>
          <DetailsRowItem>
            <LocationIcon src="images/icons/location.png" />
            <DetailsLbl>
              {house.location.zip} {house.location.houseNumberAddition}{" "}
              {house.location.city}
            </DetailsLbl>
          </DetailsRowItem>
        </DetailsRow>
        <DetailsRow>
          <DetailsRowItem>
            <DetailsIcon src="images/icons/price.png" />
            <DetailsLbl>{(house.price / 1000).toFixed(3)}</DetailsLbl>
          </DetailsRowItem>
          <DetailsRowItem>
            <DetailsIcon src="images/icons/size.png" />
            <DetailsLbl>{house.size} m2</DetailsLbl>
          </DetailsRowItem>
          <DetailsRowItem>
            <DetailsIcon src="images/icons/construction.png" />
            <DetailsLbl>Built in {house.constructionYear}</DetailsLbl>
          </DetailsRowItem>
        </DetailsRow>
        <DetailsRow>
          <DetailsRowItem>
            <DetailsIcon src="images/icons/bed.png" />
            <DetailsLbl>{house.rooms.bedrooms}</DetailsLbl>
          </DetailsRowItem>
          <DetailsRowItem>
            <DetailsIcon src="images/icons/size.png" />
            <DetailsLbl>{house.rooms.bathrooms}</DetailsLbl>
          </DetailsRowItem>
          <DetailsRowItem>
            <GarageIcon src="images/icons/garage.png" />
            <GarageLbl>{house.hasGarage ? "Yes" : "No"}</GarageLbl>
          </DetailsRowItem>
        </DetailsRow>
        <Description>{house.description}</Description>
      </Details>
      <RecommendedForYou house={house} />
    </>
  );
}
