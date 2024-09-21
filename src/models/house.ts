export interface IHouse {
  id: number;
  image: string | null;
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
    houseNumberAddition: string | null;
    city: string;
    zip: string;
  };
  createdAt: string;
  constructionYear: number;
  hasGarage: boolean;
  madeByMe: boolean;
}
