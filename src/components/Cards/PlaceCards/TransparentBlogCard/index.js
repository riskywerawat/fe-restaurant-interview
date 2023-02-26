/**
=========================================================
*  React - v2.0.0
=========================================================






 =========================================================

* 
*/
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import MuiLink from "@mui/material/Link";

//  React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { Box, Button, CardActions, Divider, Rating, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { CardActionArea } from '@mui/material';

function TransparentBlogCard({ image, rating, relative_time_description, title, description, action }) {
  const cardActionStyles = {
    display: "flex",
    alignItems: "center",
    width: "max-content",

    "& .material-icons, .material-icons-round,": {
      transform: `translateX(2px)`,
      transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
    },

    "&:hover .material-icons, &:focus .material-icons, &:hover .material-icons-round, &:focus .material-icons-round":
    {
      transform: `translateX(6px)`,
    },
  };



  return (
    <Card
      sx={{
        background: "transparent",
        boxShadow: "none",
        overflow: "visible",
        maxWidth: 345
      }}
    >
      {action.type === "internal" ? (

        <LazyLoadImage
          style={{
            "border-radius": 12
          }}
          referrerpolicy="no-referrer"
          alt={image}
          height={150}
          width={'75%'}
          effect="blur"
          src={image} />
      ) : (
        <LazyLoadImage
          style={{
            "border-radius": 12
          }}
          referrerpolicy="no-referrer"
          alt={image}
          height={150}
          width={'75%'}
          effect="blur"
          src={image} />
      )}
      <MKBox pt={2} pb={3} >
        {action.type === "internal" ? (
          <Link to={action.route} sx={cardActionStyles}>
            <MKTypography variant="h5" gutterBottom>
              {title}
            </MKTypography>
          </Link>
        ) : (
          <MuiLink href={action.route} target="_blank" rel="noreferrer" sx={cardActionStyles}>
            <MKTypography variant="h5" gutterBottom>
              {title}
            </MKTypography>
          </MuiLink>
        )}
        <Box>
          <Box>

            <MKTypography sx={{height:'200px'}} variant="subtitle2" component="p" color="text" mb={3}>

              <MKTypography component="span" variant="body2" fontWeight="bold">

                <Box >
                  <Grid container spacing={0}>
                    <Grid item md={4} xs={12}>
                      <Typography xs={{ textAlign: 'right' }} variant='body2'>
                        การให้คะแนน:
                      </Typography>
                    </Grid>

                    <Grid item md={8} xs={12}>
                      <Rating name="read-only" sx={{ mt: 0.4, textAlign: 'center' }}
                        precision={0.1}
                        value={parseInt(rating)} readOnly size="small" />
                    </Grid>




                  </Grid>

                </Box>

                <br></br>
              </MKTypography>
              {description?description.length>150?description.substring(0, 150)+"...":description:'ไม่มีการแสดงความคิดเห็น'}
            </MKTypography>

            <MKTypography variant="body2" component="p" color="text" mb={1}>

              <MKTypography component="span" variant="subtitle" >
             
                <Box >
                  แสดงความคิดเห็นเมื่อ : <span style={{ color: 'blueviolet' }}>
                    {relative_time_description}
                  </span>

                </Box>

                <br></br>
              </MKTypography>

            </MKTypography>

            {action.type === "internal" ? (
              <MKTypography
                component={Link}
                to={action.route}
                variant="body2"
                fontWeight="regular"
                color={action.color}
                textTransform="capitalize"
                sx={cardActionStyles}
              >
                {action.label}
                <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
              </MKTypography>
            ) : (
              <MKTypography
                component={MuiLink}
                href={action.route}
                target="_blank"
                rel="noreferrer"
                variant="body2"
                fontWeight="regular"
                color={action.color}
                textTransform="capitalize"
                sx={cardActionStyles}
              >
                {action.label}
                <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
              </MKTypography>
            )}
          </Box>

        </Box>
        <Divider></Divider>
      </MKBox>

    </Card>
  );
}

// Typechecking props for the TransparentBlogCard
TransparentBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]),
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "inherit",
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
      "text",
    ]).isRequired,
  }).isRequired,
};

export default TransparentBlogCard;
