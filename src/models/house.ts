export interface IHouse {
  id: number;
  image: Nullable<string>;
  price: number;
  rooms: {
    bedrooms: number;
    bathrooms: number;
  };
  size: number;
  description: string;
  location: {
    street: string;
    houseNumber: number;
    houseNumberAddition: Nullable<string>;
    city: string;
    zip: string;
  };
  createdAt: string;
  constructionYear: number;
  hasGarage: boolean;
  madeByMe: boolean;
}
