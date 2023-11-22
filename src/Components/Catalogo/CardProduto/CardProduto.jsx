import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function CardProduto({ item, handleChange }) {
  const produto = item;

  return (
    <Card sx={{ maxWidth: 345, height: 400, objectFit: "contain" }}>
      <CardActionArea
        onClick={() => {
          handleChange(produto.id);
        }}
      >
        <CardMedia
          component="img"
          image={produto.image_url}
          nome={produto.nome}
          sx={{ objectFit: "contain", maxHeight: 200, maxWidth: "90%" }}
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            {produto.nome}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            cód. {produto.id}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        onClick={() => {
          handleChange(produto.id);
        }}
      >
        <Button variant="contained" color="success">
          Comprar
        </Button>
      </CardActions>
    </Card>
  );
}
