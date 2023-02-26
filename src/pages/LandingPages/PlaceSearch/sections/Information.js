/* eslint-disable react/prop-types */


// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SearchContent from "pages/LandingPages/PlaceSearch/sections/SearchContent";
//  React components
import MKBox from "components/MKBox";
import React, { useState } from 'react';

import Coverflow from 'react-coverflow';

import { useEffect } from "react";



import 'react-lazy-load-image-component/src/effects/blur.css';
import "./styles.scss";
import apis from '../../../../apis/placeAPIs';
export default function Information(props) {
  const { data } = props;
  const [contentPromineces, setcontentPromineces] = useState([])
  useEffect(

    () => {

      init()
    },

    []);

  const init = async () => {
    await getcontentProminence()
  }
  const getcontentProminence = async () => {
    let content = await apis.getcontentProminence()
    setcontentPromineces(content ? content.data : [])
  }

  const fn = function () {
    /* do your action */
  }
  const contentImage = (image) => {
  }
  return (
    <MKBox component="section" py={12}>
      {data.length > 0 ? <SearchContent data={data} /> : <>

        {
          contentPromineces.length ? <Coverflow
            displayQuantityOfSide={2}
            navigation
            infiniteScroll
            enableHeading
            media={{
              '@media (max-width: 900px)': {
                width: 'auto',
                height: '300px'
              },
              '@media (min-width: 900px)': {
                width: 'auto',
                height: '600px'
              }
            }}
          >


            {contentPromineces.length > 0 ?

              contentPromineces.map((item) => <img src={item.photo} alt={`${item.name}`} data-action={item.place_id} />)
              : ""}

          </Coverflow> : <></>
        }
      </>
      }

    </MKBox>

  );

}

