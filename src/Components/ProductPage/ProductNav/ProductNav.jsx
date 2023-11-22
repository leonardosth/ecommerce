import { Container, Breadcrumbs, Typography, Link } from "@mui/material";

export default function ProductNav({ produto }) {
  return (
    <Container>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          {produto.categoria}
        </Link>
        <Typography color="text.primary">{produto.nome}</Typography>
      </Breadcrumbs>
    </Container>
  );
}
