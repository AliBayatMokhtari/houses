import { Form } from "react-router-dom";
import { Container } from "./new-house-form.style";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormState {
  street: string;
  houseNumber: number;
  houseNumberAddition: Nullable<string>;
  postalCode: string;
  city: string;
  image: string;
  price: number;
  size: number;
  hasGarage: boolean;
  bedrooms: number;
  bathrooms: number;
  constructionDate: string;
  description: string;
}

export default function NewHouseForm() {
  const form = useForm<IFormState>({
    defaultValues: {},
  });

  const onSubmit: SubmitHandler<IFormState> = (data) => {
    console.log({ data });
  };

  return (
    <Container>
      <Form onSubmit={form.handleSubmit(onSubmit)}></Form>
    </Container>
  );
}
