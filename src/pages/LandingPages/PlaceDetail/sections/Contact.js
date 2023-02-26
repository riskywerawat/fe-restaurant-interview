

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

//  React components
import MKBox from "components/MKBox";


import MKTypography from "components/MKTypography";
import GoogleMapReact from 'google-map-react';
// Images

import { useEffect, useState } from "react";

import _ from 'lodash'
import apis from "../../../../apis/globalAPIs";
require('dotenv').config()
function Contact(props) {
  const { geometry,formatted_address } = props.data;
  console.log("geometry",geometry)
 
  const [apiKeys, setapiKeys] = useState("")

  const image = localStorage.getItem('image');
  const [defaultProps, setdefaultProps] = useState({})
  useEffect( () => {
    if(geometry){
      init();
    }
    
  
  }, [geometry])
  const init = async () => {
    let authService = await apis.getApiKey();
    await setapiKeys(authService.data);
    await setMapProps(geometry.location.lat,geometry.location.lng)
  }
  const setMapProps = async (latitude,longitude) => {
  
    setdefaultProps( {
      center: {
        lat: geometry.location.lat,
        lng: longitude
      },zoom: 11
    })
  }
  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: geometry.location.lat, lng: geometry.location.lng },
      map,
      title: 'Hello World!'
    });
    return marker;
  };


  return (

    
      <>
      {!_.isEmpty(defaultProps)? <MKBox component="section" py={{ xs: 0, lg: 6 }}>
      <Container>
      <MKTypography variant="h3" mb={6}>
            MAP
          </MKTypography>
        <Grid container item>
          <MKBox
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            mb={6}
            sx={{ overflow: "hidden" }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                lg={5}
                position="relative"
                px={0}
                sx={{
                  backgroundImage: ({
                    palette: { gradients },
                    functions: { rgba, linearGradient },
                  }) =>
                    `${linearGradient(
                      rgba(gradients.dark.main, 0.8),
                      rgba(gradients.dark.state, 0.8)
                    )}, url(${image})`,
                  backgroundSize: "cover",
                }}
              >
                <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <MKBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                    <MKTypography variant="h3" color="white" mb={1}>
                      FIND PLACE MAP
                    </MKTypography>
                    <MKTypography variant="body2" color="white" opacity={0.8} mb={3}>
                    Search for the place from google map.
                    </MKTypography>
                    <MKTypography variant="body2" color="white" opacity={0.8} mb={3}>
                    {formatted_address}
                    </MKTypography>
                 
                  </MKBox>
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={7}>
                <MKBox>
                  <div style={{ height: '650px', width: '100%' }}>
                    {<GoogleMapReact
                      bootstrapURLKeys={{ key: apiKeys }}
                      defaultCenter={defaultProps.center}
                      defaultZoom={defaultProps.zoom}
                      onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
                    >

                    </GoogleMapReact>}
                  </div>
                </MKBox>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>:''}
      </>
    
  );
}

export default Contact;
