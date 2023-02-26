

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

//  React components
import MKBox from "components/MKBox";

//  React examples


// Images

function Featuring() {
  return (
    <MKBox component="section" pt={3} pb={8}>
      <Container>
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
      
          <Grid item xs={12} md={3}>
        
          </Grid>
          <Grid item xs={12} md={3}>
         
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Featuring;
