import { styled } from "@mui/material";
import FacebookIcon  from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon  from "@mui/icons-material/MailOutline";
import payment_logo from "../assets/payment.png";

const Container = styled("div")(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.down("sm")]: { flexDirection: "column" }
}));

const Left = styled("div")({
    display: "flex",
    flex: 1,
    flexDirection: "column",
    padding: "20px"
});

const Logo = styled("h1")({

});

const Desc = styled("p")({
    margin: "20px 0px"
});

const SocialContainer = styled("div")({
    display: "flex"
});

const SocialIcon = styled("div")(({ color }) => ({
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    color: "white",
    backgroundColor: color,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "20px"
}));

const Center = styled("div")(({ theme }) => ({
    flex: 1,
    padding: "20px",
    [theme.breakpoints.down("sm")]: { display: "none"}
}));

const Title = styled("h3")({
    marginBottom: "30px"
});

const List = styled("ul")({
    margin: 0,
    padding: 0,
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap"
});

const LisItem = styled("li")({
    width: "50%",
    marginBottom: "10px"
});

const Right = styled("div")(({ theme }) => ({
    flex: 1,
    padding: "20px",
    [theme.breakpoints.down("sm")]: { backgroundColor: "#fff8f8"}
}));

const ContactItem = styled("div")({
    marginBottom: "10px",
    display: "flex",
    alignItems: "center"
});

const Payment = styled("img")({
    padding: "10px 0px",
    width: "50%"
});

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>CarbonHub</Logo>
            <Desc>
            Sustainability is everybody’s business. A way of protecting and creating new sources of value – for business, people, society and the world as a whole.                 
            </Desc>
            <SocialContainer>
                <SocialIcon color="#3B5999">
                    <FacebookIcon />
                </SocialIcon>
                <SocialIcon color="#E4405F">
                    <InstagramIcon />
                </SocialIcon>
                <SocialIcon color="#55ACEE">
                    <TwitterIcon />
                </SocialIcon>
                <SocialIcon color="#E60023">
                    <PinterestIcon />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <LisItem>Home</LisItem>
                <LisItem>Cart</LisItem>
                <LisItem>My Account</LisItem>
                <LisItem>Order Tracking</LisItem>
                <LisItem>Terms</LisItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <RoomIcon sx={{marginRight: "10px"}} />123 Main Stree, New York, 10000
            </ContactItem>
            <ContactItem>
                <PhoneIcon sx={{marginRight: "10px"}} />(212)555-5555
            </ContactItem>
            <ContactItem>
                <MailOutlineIcon sx={{marginRight: "10px"}} />info@carbonhub.com
            </ContactItem>
            <Payment src={ payment_logo } />

        </Right>
    </Container>
  )
}

export default Footer;