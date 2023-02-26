

// @mui material components
import Card from "@mui/material/Card";

//  React components
import MKBox from "components/MKBox";

//  React examples


// Author page sections
import Profile from "pages/LandingPages/PlaceDetail/sections/Profile";
import Posts from "pages/LandingPages/PlaceDetail/sections/Posts";
import Contact from "pages/LandingPages/PlaceDetail/sections/Contact";
import Footer from "pages/LandingPages/PlaceDetail/sections/Footer";

// Routes

import { useParams } from "react-router-dom";

// Images
import bgImage from "assets/images/city-profile.jpg";
import { useEffect, useState } from "react";
import apis from '../../../apis/placeAPIs';
function PlaceDetail() {
  const { id } = useParams();
  const [placeDetailContent, setplaceDetailContent] = useState({})
 
  useEffect(() => {
    init()

    return () => {

    }
  }, [])
  const init = async () => {
    await getPlaceDetailById();
  }
  const getPlaceDetailById = async () => {
    try {
      let result = await apis.getPlaceDetail(id)
      console.log(result.data);
      if (result) {
        setplaceDetailContent(result.data ? result.data : {})
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
     
     
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Profile data={placeDetailContent} />
          <Posts data={placeDetailContent.reviews ? placeDetailContent.reviews : []} />
        </Card>
        <Contact  data={placeDetailContent}/>
        <Footer />
      </MKBox>
    </>
  );
}

export default PlaceDetail;
