

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

//  React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

//  React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";

function Places(props) {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Reviews
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          {  props.data? props.data.map((item) => {

            return (
              <>
                <Grid item xs={12} sm={6} lg={3}>
                  {/* {JSON.stringify(props.data)} */}

                  <TransparentBlogCard
                    image={item.profile_photo_url}
                    title={item.author_name}
                    description={item.text}
                    rating={item.rating}
                    relative_time_description={item.relative_time_description}
                    action={{
                      type: "",
                      route: `${item.author_url}`,
                      color: "info",
                      label: "read more",
                    }}
                  />


                </Grid>

              </>
            )
          }) :<></>}


        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
