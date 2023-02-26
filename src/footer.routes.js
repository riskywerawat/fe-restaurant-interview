// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

//  React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "www.facebook.com//",
    },
    {
      icon: <TwitterIcon />,
      link: "twitter.com/",
    },
    {
      icon: <GitHubIcon />,
      link: "github.com/official",
    },
    {
      icon: <YouTubeIcon />,
      link: "www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "/presentation" },
        { name: "freebies", href: "/templates/free" },
        { name: "premium tools", href: "/templates/premium" },
        { name: "blog", href: "/blog" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "illustrations", href: "iradesign.io/" },
        { name: "bits & snippets", href: "/bits" },
        { name: "affiliate program", href: "/affiliates/new" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "/contact-us" },
        { name: "knowledge center", href: "/knowledge-center" },
        { name: "custom development", href: "services.creative-tim.com/" },
        { name: "sponsorships", href: "/sponsorships" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "/terms" },
        { name: "privacy policy", href: "/privacy" },
        { name: "licenses (EULA)", href: "/license" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} {" "}
      <MKTypography
        component="a"
        href=""
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        
      </MKTypography>
      .
    </MKTypography>
  ),
};
