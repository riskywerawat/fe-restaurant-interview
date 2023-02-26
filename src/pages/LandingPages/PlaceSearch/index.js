

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

//  React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

//  React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections
import Information from "pages/LandingPages/PlaceSearch/sections/Information";

import Featuring from "pages/LandingPages/PlaceSearch/sections/Featuring";
import Newsletter from "pages/LandingPages/PlaceSearch/sections/Newsletter";

// Routes

import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/thai_food.jpg";
import { Box, IconButton, Input, InputBase, Paper } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import apis from '../../../apis/placeAPIs';
function PlaceSearch() {
  const [keyword, setkeyword] = useState()
  const [content, setcontent] = useState([])

  useEffect(() => {


    return () => {

    }
  }, [])
  const handleInputPressKeyBoard = async () => {
   
    let getContent = await apis.queryPlace(keyword);
      setcontent(getContent?getContent.data:[]);
  }
  return (
    <>
   
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Find your restaurant place.
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              Discover & connect with greate restaurant in thailand.
            </MKTypography>

            <Grid container spacing={3}>
              <Grid item xs={0.5}>
                {" "}
              </Grid>
              <Grid item xs={11} md={12}>
                <Box>
                  <Paper
                
                    sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: "100%" }}
                  >
                    <IconButton sx={{ p: "10px" }} aria-label="menu">
                      <MenuIcon />
                    </IconButton>
                
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Search Google Maps"
                      inputProps={{ "aria-label": "search google maps" }}
                      value={keyword}
                      onKeyPress={async (event) => {
                        if (event.key === 'Enter') {
                          await handleInputPressKeyBoard()
                        }
                      }}
                      onChange={(e) =>{
                        setkeyword(e.target.value)
                      }
                      
                      }
                    />
                    <IconButton sx={{ p: "10px" }} aria-label="search">
                      <SearchIcon />
                    </IconButton>
                  </Paper>
         
                </Box>
              </Grid>
              <Grid item xs={0.5}>
                {" "}
              </Grid>
            </Grid>
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Find us on
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-facebook" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-instagram" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-twitter" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#">
                <i className="fab fa-google-plus" />
              </MKTypography>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information data={content} />
        <Featuring />
        <Newsletter />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default PlaceSearch;
