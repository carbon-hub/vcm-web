import { styled } from "@mui/material";
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

const Container = styled("div")({
    height: "25vh",
    backgroundColor: "#fcf5f5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
});

const Title = styled("h1")({
    fontSize: "28px",
    marginBottom: "20px"
});

const Desc = styled("div")(({ theme }) => ({
    fontSize: "20px",
    fontWeight: 300,
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: { textAlign: "center"}
}));

const InputContainer = styled("div")(({ theme }) => ({
    width: "50%",
    height: "40px",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid lightgray",
    [theme.breakpoints.down("sm")]: { width: "80%"}
}));

const Input = styled("input")({
    border: "none",
    flex: 8,
    paddingLeft: "20px"
});

const Button = styled("button")({
    flex: 1,
    border: "none",
    backgroundColor: "teal",
    color: "white",
});


const Newsletter = () => {
  return (
    <Container>
        <Title>Keep up with our content</Title>
        <Desc>Subscribe to our newsletter and get timely updates.</Desc>
        <InputContainer>
            <Input placeholder="Your email" />
            <Button>
                <SubscriptionsIcon />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter