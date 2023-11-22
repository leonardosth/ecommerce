import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function Produto(produto) {
  return (
    <Card sx={{ maxWidth: 345, height: 400, objectFit: "contain" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={produto.imagem}
          title={produto.altText}
          sx={{ objectFit: "contain", maxHeight: 200, maxWidth: "90%" }}
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            {produto.nome}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            cód. {produto.codigo}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" color="success">
          Comprar
        </Button>
      </CardActions>
    </Card>
  );
}
