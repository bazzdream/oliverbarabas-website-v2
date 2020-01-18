import colors from "gatsby-theme-musician/src/gatsby-plugin-theme-ui/colors";
import spacing from "gatsby-theme-musician/src/gatsby-plugin-theme-ui/spacing";
import textStyles from "gatsby-theme-musician/src/gatsby-plugin-theme-ui/textStyles";
import "./layoutStyles.css";

const layoutStyles = {
  header: {
    background: colors.bgOpaque,
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 4px 0px",
    color: colors.text,
    lineHeight: 0, // fix gap bug
    minHeight: "60px",
    textAlign: ["center", null, "initial"],
    // fixed position
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 2,
    // end fixed position
    container: {
      py: 0,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    },
    customChild: {
      lineHeight: [
        `${spacing.headerHeight[0]}px`,
        null,
        `${spacing.headerHeight[2]}px`
      ]
    },
    link: {
      ...textStyles.navLink,
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      fontSize: [0, 0, 1],
      height: spacing.headerHeight,
      lineHeight: ["48px", null, "60px"],
      px: [2, null, 3],
      mx: 0,
      "&:hover": {
        color: colors.primary
      }
    },
    homeLink: {
      fontSize: "1em",
      fontWeight: 700,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      mt: [1, null, 0]
    }
    // iconLink: {
    //   borderRadius: "50%",
    //   mx: [1, 1, 1],
    //   "&:hover": {
    //     color: colors.background,
    //     background: colors.text
    //   }
    // }
  },
  footer: {
    textAlign: "center",
    copyright: {
      display: "block",
      px: 3,
      py: [3, 4],
      mt: 3,
      color: "muted"
    },
    hr: {
      width: 40,
      mx: "auto",
      mt: [4, 5],
      mb: 0,
      border: "2px solid",
      borderColor: "bgAccent"
    },
    ".GtmFooter__social-heading": {
      display: "inline-block",
      fontSize: 1,
      mb: 3
    },
    ".GtmFooter__social-wrapper": {
      px: 3
    }
  },
  landingSection: {
    py: spacing.landingSectionSpacing,
    "& + &": {
      pt: 0
    },
    "& + hr": {
      mt: 0
    },
    "hr + &": {
      mt: "calc(-2rem - 2vw)"
    }
  }
};

export default layoutStyles;
