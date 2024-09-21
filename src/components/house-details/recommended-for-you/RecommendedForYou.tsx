import HouseItem from "components/house-list/house-item/HouseItem";
import { IHouse } from "models/house";
import { Title } from "./recommended-for-you.style";

interface IRecommendedForYouProps {
  house: IHouse;
}

export default function RecommendedForYou({ house }: IRecommendedForYouProps) {
  return (
    <>
      <Title>Recommended for you</Title>
      {Array.from({ length: 3 }).map((_, index) => (
        <HouseItem key={index} house={house} />
      ))}
    </>
  );
}
