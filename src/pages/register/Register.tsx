import { Container, RegisterButton } from "./register.style";

export default function Register() {
  async function getToken() {}

  return (
    <Container>
      <RegisterButton spinnerSize={22}>Get Api Token</RegisterButton>
    </Container>
  );
}
