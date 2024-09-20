import { Container, Price, Size } from "./sort.style";

export type SortValue = "price" | "size";

interface ISortProps {
  value: SortValue;
  onChange(value: SortValue): void;
}

export default function Sort({ value, onChange }: ISortProps) {
  return (
    <Container>
      <Price $active={value === "price"} onClick={() => onChange("price")}>
        Price
      </Price>
      <Size $active={value === "size"} onClick={() => onChange("size")}>
        Size
      </Size>
    </Container>
  );
}
