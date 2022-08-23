import { styled } from "@mui/material";
import { useState } from "react";
import ArrowLeftOutlined from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlined from "@mui/icons-material/ArrowRightOutlined";

import { slides } from "../data/data";

const Container = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: { display: "none"}
}));

const Arrow = styled("div")(({ direction }) => ({
  width: "60px",
  height: "60px",
  backgroundColor: "white",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: 0,
  bottom: 0,
  margin: "auto",
  left: direction === "left" ? "10px" : "none",
  right: direction === "right" ? "10px" : "none",
  cursor: "pointer",
  opacity: 0.5,
  zIndex: 2
}));

const Wrapper = styled("div")(({ sindex }) => ({
  display: "flex",
  transition: "all 1.5s ease",
  transform: `translateX(${ sindex * -100 }vw)`
}));

const Slide = styled("div")({
  width: "100vw",
  height: "100vh",
  position: "relative"
});

// const ImgContainer = styled("div")({
// });

const Image = styled("img")({
    width: "100%",
    height: "100%",
    objectFit: "fill"
});

const BlankContainer= styled("div")({
    flexGrow: 1
});

const InfoContainer = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "90vw",
  height: "80vh",
  display: "flex",
  flexDirection: "column",
  zIndex: 3,
  padding: "50px" 
});

const Title = styled("h1")(({ color }) => ({
    flexGrow: 0,
    fontSize: "56px",
    color: color
}));

const Desc = styled("p")(({ color }) => ({
    flexGrow: 0,
    margin: "50px 0px",
    fontSize: "20px",
    color: color,
    fontWeight: 500,
    letterSpacing: "3px"
}));

const FindOut = styled("a")(({ color }) => ({
    flexGrow: 0,
    fontSize: "20px",
    fontWeight: 800,
    color: color,
    cursor: "pointer"
}));


const Slides = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const SlidesNum = slides.length;
    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : SlidesNum - 1);
        } else {
            setSlideIndex(slideIndex < SlidesNum - 1  ? slideIndex + 1 : 0);
        }
    };

  return (
    <Container>
      <Arrow direction="left" onClick={ () => handleClick("left") }>
        <ArrowLeftOutlined sx={{ fontSize: "52px" }} />
      </Arrow>
      <Wrapper sindex={ slideIndex }>
        { slides.map((item) => (
            <Slide key={ item.id }>
                    {/* <ImgContainer> */}
                        <Image src={ item.img } />
                    {/* </ImgContainer> */}
                    
                    <InfoContainer>
                        <BlankContainer></BlankContainer>
                        <Title color={ item.color } >{ item.title }</Title>
                        <Desc color={ item.color }>{ item.desc }</Desc>
                        <FindOut color={ item.color } href="/">FIND OUT</FindOut>
                    </InfoContainer>
            </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={ () => handleClick("right") }>
        <ArrowRightOutlined sx={{ fontSize: "52px" }} />
      </Arrow>
    </Container>
  );
};

export default Slides;