import { Container, NoResultImage, NoResultMsg } from "./no-result.style";

export default function NoResult() {
  return (
    <Container>
      <NoResultImage src="images/empty-houses.png" />
      <NoResultMsg>
        No Results found.
        <br />
        Please Try another keyword.
      </NoResultMsg>
    </Container>
  );
}
