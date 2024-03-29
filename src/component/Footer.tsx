import { Box, Typography } from "@mui/material";
import { BrowserRouter, Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <Box
      sx={{
        maxWidth: "800px",
        mx: "auto",
        p: 3,
        borderTop: "1px solid #7B89A8",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h6"
            sx={{ textAlign: "center", color: "white", my: 2 }}
          >
            Contact me
          </Typography>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <EmailIcon sx={{ mr: 2, color: "white" }} />
            <Typography variant="body2" sx={{ color: "white", my: 1 }}>
              Nyiwaingchit5@gmail.com
            </Typography>
          </Box>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <PhoneIcon sx={{ mr: 2, color: "white" }} />
            <Typography variant="body2" sx={{ color: "white", my: 1 }}>
              09757573132
            </Typography>
          </Box>
          <Link
            to="https://www.linkedin.com/in/nyi-waing-chit-a0492928a/"
            target="_blink"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <LinkedInIcon sx={{ mr: 2, color: "white" }} />
            <Typography variant="body2" sx={{ color: "white", my: 1 }}>
              LinedIn
            </Typography>
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            sx={{ textAlign: "center", color: "white", my: 2 }}
          >
            Social
          </Typography>
          <Link
            to="https://web.facebook.com/Chit.24007"
            target="_blink"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <FacebookIcon sx={{ mr: 2, color: "white" }} />
            <Typography variant="body2" sx={{ color: "white", my: 1 }}>
              Facebook
            </Typography>
          </Link>
          <Link
            to="https://www.instagram.com/nyiwaingchit/"
            target="_blink"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <InstagramIcon sx={{ mr: 2, color: "white" }} />
            <Typography variant="body2" sx={{ color: "white", my: 1 }}>
              Instagram
            </Typography>
          </Link>
          <Link
            to="https://github.com/NyiWaingchit7"
            target="_blink"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <GitHubIcon sx={{ mr: 2, color: "white" }} />
            <Typography variant="body2" sx={{ color: "white", my: 1 }}>
              Github
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
