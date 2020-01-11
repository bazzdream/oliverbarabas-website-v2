/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Styled, jsx, Container } from "theme-ui";

import useSiteMetadata from "gatsby-theme-musician/src/use-site-metadata";
import HeroImage from "gatsby-theme-musician/src/components/hero-image";
import Social from "gatsby-theme-musician/src/components/social";
import Typewriter from "typewriter-effect";
import "./banner.css";

let additionalStyles = {};
let bgOverlayStyles = {};

const BannerContent = ({ title, tagline }) => (
  <>
    <Styled.h1>{title}</Styled.h1>
    {tagline && (
      <Typewriter
        onInit={typewriter => {
          typewriter
            .pauseFor(500)
            .typeString(tagline.first + " ")
            .pauseFor(500)
            .typeString(tagline.second + " ")
            .pauseFor(500)
            .typeString(tagline.third)
            .pauseFor(500)
            .start();
        }}
        options={{
          autoStart: true,
          loop: false,
          delay: 50
        }}
      />
    )}
    <Social />
  </>
);

const Banner = ({ children, bgOverlay, color }) => {
  const { title, artist, bannerImg } = useSiteMetadata();

  if (bannerImg) {
    additionalStyles["flexDirection"] = "column";
  }
  if (color) {
    additionalStyles["color"] = "color";
  }

  if (bgOverlay) {
    bgOverlayStyles = {
      "&:after": {
        background: bgOverlay
      }
    };
  }

  const bannerContentElement = (
    <BannerContent
      title={title}
      tagline={typeof artist.tagline === "undefined" ? null : artist.tagline}
    />
  );

  return (
    <div
      className="GtmBanner"
      sx={{
        variant: "components.banner",
        ...additionalStyles,
        ...bgOverlayStyles
      }}
    >
      {bannerImg ? (
        <HeroImage
          className="GtmBanner__hero-wrapper"
          fluid={bannerImg.fluid}
          sx={{ flexGrow: 1 }}
        >
          <Container className="GtmBanner__content-wrapper">
            {children || bannerContentElement}
          </Container>
        </HeroImage>
      ) : (
        <Container
          className="GtmBanner__content-wrapper"
          sx={{ alignSelf: "center" }}
        >
          {children || bannerContentElement}
        </Container>
      )}
    </div>
  );
};

Banner.propTypes = {
  children: PropTypes.any,
  bgOverlay: PropTypes.string,
  color: PropTypes.string
};

export default Banner;
