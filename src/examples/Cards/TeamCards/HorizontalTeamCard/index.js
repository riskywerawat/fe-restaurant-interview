/**
=========================================================
*  React - v2.0.0
=========================================================





 =========================================================

* 
*/import LocationOnIcon from '@mui/icons-material/LocationOn';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import Chip from '@mui/material/Chip';
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Sun from '@mui/icons-material/LightMode';
//  React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { Box, Button, Divider, Rating, Typography } from "@mui/material";
import MKButton from "components/MKButton";
import { useEffect, useState } from "react";
import apis from "../../../../apis/placeAPIs";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link, useNavigate } from 'react-router-dom';
function HorizontalTeamCard({ image, photo_code, place_id, geometry, name, position, description, rating, online }) {
  const [photo, setphoto] = useState("")
  const navigate = useNavigate();
  useEffect(() => {
    _getPhoto(photo_code)
    return () => {

    }
  }, [photo_code])



  const _getPhoto = async (photo_code) => {

    let url = (await apis.getPhotoRef({ photo_code: photo_code })).data
    setphoto(url)
  }
  return (
    <Card sx={{ mt: 3 }}>

      <Grid container>
        <Grid item xs={12} md={6} lg={4} sx={{ mt: -6 }}>
          <MKBox width="100%" pt={2} pb={1} px={2}>


            <LazyLoadImage
              style={{
                "border-radius": 12
              }}

              alt={image.photo}
              height={180}
              width={'100%'}
              effect="blur"
              src={photo} />
            <Box
              sx={{
                '& > legend': { mt: 3 },
              }}
            >
              <Grid container spacing={2} >
                <Grid item md={6}>
                  <Rating name="read-only"
                    precision={0.1}
                    value={rating} readOnly size="small" />
                </Grid>
                <Grid item md={6}>
                  <Box sx={{ ml: 4 }} ><Typography variant="overline" display="block" gutterBottom >
                    {rating}
                  </Typography>
                  </Box>
                </Grid>

              </Grid>
              <Grid container spacing={3} >
                <Grid item sx={6}>
                  <Typography variant="h6" gutterBottom>status:</Typography>
                </Grid>
                <Grid item sx={6}>

                  <Box sx={{ mb: 2, mt: -0.5 }}>

                    <Chip
                      sx={{ fontSize: 10, fontWeight: 'bold', color: '#F0FFFF', height: '18px' }}

                      size="sm"
                      variant=""
                      startDecorator={<Sun />}
                      color={online === 'เปิดอยู่' ? "success" : "error"}
                      readOnly

                      label={online}
                    />
                  </Box>
                </Grid>

              </Grid>
              <Box >

              </Box>
            </Box>
          </MKBox>
        </Grid>

        <Grid item xs={12} md={6} lg={8} sx={{ my: "auto" }}>
          <MKBox pt={{ xs: 1, lg: 2.5 }} pb={2.5} pr={4} pl={{ xs: 4, lg: 1 }} lineHeight={1}>
            <MKTypography variant="h5">{name}</MKTypography>
            <MKTypography variant="h6" color={position.color} mb={1}>
              {position.label}
            </MKTypography>


            <Divider> </Divider>
            <br></br>
            <Grid container spacing={5}>

              <Grid item md={6} xs={12}>
                <MKButton
                  fullWidth={true}
                  target="_blank"
                  rel="noreferrer"
                  variant="gradient"
                  size="small"
                  color="success"
                  endIcon={<LocationOnIcon sx={{ color: '#F0FFFF' }} />}
                  onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${geometry.location.lat, geometry.location.lng}&query_place_id=${place_id}`, '_blank')}
                >
                  {'FIND MAP'}
                </MKButton>
              </Grid>
              <Grid item md={6} xs={12}>
                <MKButton
                  fullWidth={true}
                  target="_blank"
                  rel="noreferrer"
                  variant="gradient"
                  size="small"
                  color="info"

                  endIcon={<ReadMoreIcon sx={{ color: '#F0FFFF' }} />}
                
                >
                  <Link   style={{color: 'white'}} target="_blank" to={`/search/detail/${place_id}`} onClick={() => 
                    
               {
                localStorage.setItem("image", photo);
                localStorage.setItem("nivigate", `https://www.google.com/maps/search/?api=1&query=${geometry.location.lat,geometry.location.lng}&query_place_id=${place_id}`);
               }
                  
                  }
                    
                    >
                  {'FIND OUT MORE'}
                  </Link>
                
                </MKButton>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Grid>
    </Card >
  );
}

// Typechecking props for the HorizontalTeamCard
HorizontalTeamCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
};

export default HorizontalTeamCard;
