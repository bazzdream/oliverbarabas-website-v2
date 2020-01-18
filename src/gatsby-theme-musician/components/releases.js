/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { jsx } from "theme-ui";

import useSiteMetadata from "gatsby-theme-musician/src/use-site-metadata";
// import Grids from "gatsby-theme-musician/src/components/grids";
import LandingSectionTitle from "gatsby-theme-musician/src/components/landing-section-title";
import ReleaseItem from "gatsby-theme-musician/src/components/release-item";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import "./releases.css";

const Releases = ({ releases = [], columns }) => {
  // Use text label from YAML config
  let sectionTitle = "Releases";
  const { textLabels } = useSiteMetadata();
  if (typeof textLabels.section_releases_title !== "undefined") {
    if (textLabels.section_releases_title.length) {
      sectionTitle = textLabels.section_releases_title;
    }
  }

  // Define custom grid template only if not defined from the component
  // let customGridTemplateColumns;
  // if (!columns) {
  //   customGridTemplateColumns = [null, "repeat(auto-fit,minmax(14em,1fr))"];
  // }

  const swiperParams = {
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      640: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  };

  return (
    <section
      id="releases"
      sx={{
        variant: "layout.landingSection"
      }}
    >
      <LandingSectionTitle>{sectionTitle}</LandingSectionTitle>
      <p sx={{ textAlign: "center" }}>
        <i>swipe for more. click to view backside with track information</i>
      </p>
      <Swiper {...swiperParams}>
        {releases.length > 0 &&
          releases.map(node => {
            return (
              <div key={node.id}>
                <ReleaseItem {...node} />
              </div>
            );
          })}
      </Swiper>
      {/* <Grids
        as="ol"
        columns={columns}
        gap="calc(1em + 1vw)"
        sx={{
          gridTemplateColumns: customGridTemplateColumns,
        }}
      >
        {releases.length > 0 &&
          releases.map(node => {
            return (
              <li key={node.id}>
                <ReleaseItem {...node} />
              </li>
            )
          })}
      </Grids> */}
    </section>
  );
};

export default Releases;
