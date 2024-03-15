import Link from "next/link";
// Mui Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme, useTheme } from "@mui/material/styles";
// Icons
import FavoriteIcon from "@mui/icons-material/Favorite";

const Footer = () => {
  const theme: Theme = useTheme();
  const currentDate = new Date().getFullYear();
  const extraSmallDev = useMediaQuery("(max-width:350px)");
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: theme.palette.text.darkPink,
          p: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: extraSmallDev ? "12px" : "14px",
            fontFamily: "Oswald",
            color: "#fff",
            letterSpacing: "1px",
          }}
        >
          {`Copyright © ${currentDate}.`}
        </Typography>
        <Typography
          component="p"
          sx={{
            fontSize: extraSmallDev ? "12px" : "14px",
            fontFamily: "Oswald",
            color: "#fff",
            letterSpacing: "1px",
            textTransform: "capitalize",
            display: "flex",
            alignItems: "center",
            mt: 0.5,
          }}
        >
          created with
          <FavoriteIcon
            sx={{
              color: "#fff",
              letterSpacing: "1px",
              fontSize: "17px",
              mx: 0.5,
            }}
          />
          by :
          <Link
            href="https://github.com/Ahmedadelkhalil"
            target="_blank"
            style={{
              textDecoration: "none",
              color: "#fff",
              marginLeft: "6px",
            }}
          >
            Ahmed Adel
          </Link>
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
