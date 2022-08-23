import { styled } from "@mui/material";
import login_bg_img from "../assets/forest_drive.jpg";

const Container = styled("div")({
  width: "100vw",
  height: "100vh",
  background: `url(${login_bg_img}) center`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const Wrapper = styled("div")(({ theme }) => ({
  width: "25%",
  padding: "20px",
  backgroundColor: "white",
  [theme.breakpoints.down("sm")]: { width: "75%"},
  [theme.breakpoints.down("md")]: { width: "35%"}
}));

const Title = styled("h1")({
  fontSize: "24px",
  fontWeight: 300
});

const Form = styled("form")({
  display: "flex",
  flexDirection: "column"
});

const Input = styled("input")({
  flex: 1,
  minWidth: "40%",
  margin: "10px 0",
  padding: "10px"
});

const Button = styled("button")({
  width: "40%",
  border: "none",
  padding: "15px 20px",
  backgroundColor: "green",
  color: "white",
  cursor: "pointer",
  marginBottom: "10px"
});

const Link = styled("a")({
  margin: "5px 0px",
  fontSize: "12px",
  textDecoration: "underline",
  cursor: "pointer"
});

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>        
    </Container>
  )
}

export default Login