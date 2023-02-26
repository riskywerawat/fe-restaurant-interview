

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

//  React components
import MKBox from "components/MKBox";

import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import CustomizedTables from './CustomizationTable';
// Images

import { Divider, Link, Rating } from "@mui/material";


import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function Profile(props) {

  const image = localStorage.getItem('image');
  const urlNavigate = localStorage.getItem('nivigate');
  let arrayWeekText = props.data.opening_hours?.weekday_text ? props.data.opening_hours.weekday_text : []
  let open_now = props.data.opening_hours?.open_now
  return (
    <>
      <MKBox component="section" py={{ xs: 6, sm: 12 }}>
        <Container>

          <Grid container item xs={12} justifyContent="center" mx="auto">
            <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
              <LazyLoadImage
                style={{
                  "border-radius": 100
                }}

                alt={image.photo}
                height={200}
                width={200}
                effect="blur"
                src={image} />
           
            </MKBox>
            
            <Grid container justifyContent="center" py={6}>
              <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
                <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                  <MKTypography variant="h3">{props.data.name}</MKTypography>
                  <MKButton variant="outlined" color="info" size="small" onClick={()=>{
                   
                    window.open(urlNavigate, '_blank');
                  }}>
                    navigator
                  </MKButton>
                </MKBox>
                <Grid container spacing={3} mb={3}>
                  <Grid item>
                    <MKTypography component="span" variant="body2" fontWeight="bold">

                      <Rating name="read-only"
                        precision={0.1}
                        value={parseInt(props.data.rating)} readOnly size="large" />

                    </MKTypography>

                  </Grid>
                  <Grid item>
                    <MKTypography component="span" variant="body2" fontWeight="bold">
                      {props.data.user_ratings_total} &nbsp;
                    </MKTypography>
                    <MKTypography component="span" variant="body2" color="text">
                      user rating totals
                    </MKTypography>
                  </Grid>
                  <Grid item>
                    {/* <MKTypography component="span" variant="body2" fontWeight="bold">
                    260&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Following
                  </MKTypography> */}
                  </Grid>
                </Grid>



                <br></br>
                <MKTypography variant="h5">{'Location'}</MKTypography>
                <MKTypography variant="body1" fontWeight="light" color="text">
                  {props.data.formatted_address}
                  <br />

                  <Divider>

                  </Divider>

                  <MKTypography variant="h5">{'Information'}</MKTypography>
                  <MKTypography sx={{ pt: 2 }} variant="body2" fontWeight="light" color="text">
                    เบอร์โทร : {props.data.formatted_phone_number ? props.data.formatted_phone_number : '-'}
                  </MKTypography>

                  <MKTypography sx={{ pt: 2 }} variant="body2" fontWeight="light" color="text">


                    เว็บไซต์ : {props.data.website ? <a target="_blank" href={props.data.website}>{props.data.website}</a> : '-'}
                  </MKTypography>

                  <Divider>

                  </Divider>

                  <MKTypography variant="h5">{'Weekdays'}</MKTypography>



                </MKTypography>
                <CustomizedTables data={splitWeekText(arrayWeekText)} open={open_now}></CustomizedTables>

              </Grid>
            </Grid>
          </Grid>
        </Container>

      </MKBox>

    </>
  );
}
const splitWeekText = (arrays) => {

  return arrays.map((item => {
    let val = item.split(": ");
    return {
      day: val[0],
      time: val[1]
    }
  }))
}
export default Profile;
