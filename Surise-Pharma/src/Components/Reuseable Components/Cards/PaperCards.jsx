import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const StyledItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  margin: "0 70px 50px 70px",
  boxShadow: "0 10px 20px 0 rgba(0,0,0,0.3)",
}));

const CustomGridItem = ({ xs, md, title, content }) => (
  <Grid item xs={xs} md={md}>
    <StyledItem>
      <h3>{title}</h3>
      {content}
    </StyledItem>
  </Grid>
);

const ReusableGrid = ({ items }) => (
  <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      {items.map((item, index) => (
        <CustomGridItem key={index} {...item} />
      ))}
    </Grid>
  </Box>
);

export default ReusableGrid;