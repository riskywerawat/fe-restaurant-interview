


// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

//  React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { useEffect } from "react";
//  React examples
import HorizontalPlaceCard from "components/Cards/PlaceCards/HorizontalPlaceCard";


// Images

import team4 from "assets/images/ivana-square.jpg";


export default function SearchContent(props) {
  const { data } = props;

  useEffect(() => {

    if(data.length > 0){
      window.scrollTo({
        top: 800,
        behavior: 'smooth',
    });
    }
    return () => {

    }
  }, [data])


  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Result:
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
            Good luck for the restaurants we recommend!
            </MKTypography>
          </Grid>
        </Grid>

        <Grid container spacing={3}>

          {data.map((item, idx) => {
            return <>
              <Grid item xs={12} lg={6}>
                <MKBox mb={{ xs: 1, lg: 0 }}>
                  <HorizontalPlaceCard
                    image={team4}
                    geometry={item.geometry}
                    place_id={item.place_id}
                    photo_code={item.photo}
                    online={item.status}
                    rating={item.rating}
                    name={item.name}
                    position={{ color: "info", label: item.address }}
                    description="Artist is a term applied to a person who engages in an activity deemed to be an art."
                  />
             
                </MKBox>

              </Grid>
            </>
          })}
        </Grid>
      </Container>
    </MKBox>
  );
}