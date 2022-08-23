import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from '@mui/icons-material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { styled } from '@mui/material';

const Container = styled("div")({
    flex: 1,
    margin: "5px",
    minWidth: "280px",
    minHeight: "350px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5fbfd",
    position: "relative"
});

const Project = ({ item }) => {
  return (
    <Container>
    <Card sx={{ maxWidth: "345", minWidth: "250", height: "100%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="project">
            R
          </Avatar>
        }
        title={ item.title }
        subheader={ item.type }
      />
      <CardMedia
        component="img"
        image={ item.img }
        alt="location"
      />
      <CardContent>
        <Typography variant="p" color="text.secondary" sx={{ fontSize: "11px"}}>
          { item.desc }
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteBorderOutlined />
        </IconButton>
        <IconButton aria-label="share">
          <SearchOutlined />
        </IconButton>
        <IconButton aria-label="share">
          <ShoppingCartOutlined />
        </IconButton>
      </CardActions>
    </Card>
    </Container>
  )
}

export default Project