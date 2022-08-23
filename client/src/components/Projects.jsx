import { styled } from "@mui/material";
import { projects } from "../data/data";
import Project from "./Project";

const Container = styled("div")({
    padding: "20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
});

const Projects = () => {
  return (
    <Container>
        { projects.map((item) => (
            <Project item={ item } key={ item.id } />
        ))}
    </Container>
  )
}

export default Projects