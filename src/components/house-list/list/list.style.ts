import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  overflow: auto;
`;

export const VirtualizerContainer = styled.div<{ $height: number }>`
  width: 100%;
  position: relative;
  height: ${(props) => props.$height}px;
`;

export const VirtualItemContainer = styled.div<{
  $height: number;
  $start: number;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => props.$height}px;
  transform: ${(props) => `translateY(${props.$start}px)`};
`;
