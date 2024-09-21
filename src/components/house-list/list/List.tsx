import { useVirtualizer } from "@tanstack/react-virtual";
import { IHouse } from "models/house";
import { useRef } from "react";
import {
  Container,
  VirtualItemContainer,
  VirtualizerContainer,
} from "./list.style";
import HouseItem from "../house-item/HouseItem";

interface IListProps {
  data: IHouse[];
}

export default function List({ data }: IListProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rowVirtualizer = useVirtualizer({
    count: data.length,
    estimateSize: () => 150,
    getScrollElement: () => ref.current,
  });

  return (
    <Container ref={ref}>
      <VirtualizerContainer $height={rowVirtualizer.getTotalSize()}>
        {rowVirtualizer.getVirtualItems().map((virtualItem) => (
          <VirtualItemContainer
            key={virtualItem.key}
            $height={virtualItem.size}
            $start={virtualItem.start}
          >
            <HouseItem house={data[virtualItem.index]} />
          </VirtualItemContainer>
        ))}
      </VirtualizerContainer>
    </Container>
  );
}
