import {
  Card,
  Box,
  CardContent,
  Typography,
  Link,
  Button,
} from "@mui/material";

const Sem2 = () => {
  return (
    <Card
      sx={{
        display: "flex",
        borderRadius: ".6rem",
        "&:hover": {
          boxShadow:
            "0 20px 20px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        },
      }}
      elevation={3}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent
          sx={{
            flex: 1,
            pb: 0,
          }}
        >
          <Typography variant="h5" component="div">
            Books
          </Typography>
          <Box
            sx={{
              my: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              {
                name: "Maths II",
                link: "https://drive.google.com/file/d/1rKmnbHftNWflZOgtMewyohmkVGipWVHZ/view?usp=sharing",
                bgColor: "#FBAB7Eaa",
                bgImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
              },
              {
                name: "Stat I",
                link: "https://drive.google.com/drive/folders/1b6RLI0WL88wprctnlBwAge6gaXLW-VZW?usp=sharing",
                bgColor: "#6bc6cdaa",
                bgImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
              },
              {
                name: "Descrete Structure",
                link: "https://drive.google.com/drive/folders/1e1wjlK7yvBb9I9Xna5N8zjuq6CVWnRnQ?usp=sharing",
                bgColor: "#4158D0aa",
                bgImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 100%)",
              },
            ].map(({ name, link, bgColor, bgImage }, index) => (
              <Button
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "white",
                  fontSize: "1.2rem",
                  minWidth: "8rem",
                  borderRadius: "0.5rem",
                  height: "6rem",
                  fontWeight: "bold",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  px: 1.6,
                  m: 1,
                  lineHeight: 1.2,
                  backgroundColor: bgColor,
                  backgroundImage: bgImage,
                  boxShadow: `0 4px 12px -2px ${bgColor}`,
                  "&:hover": {
                    boxShadow: `0 4px 24px 0 ${bgColor}`,
                  },
                  backdropFilter: "blur( 4px )",
                }}
              >
                {name}
              </Button>
            ))}
          </Box>
          <Typography variant="h5" component="div">
            Materials
          </Typography>
          <Box
            sx={{
              mt: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              {
                name: "Pratik Jung Karki",
                link: "https://drive.google.com/drive/folders/1eypTAyhDoSx5CEZXsYnQtcaD_mur2udM?usp=sharing",
                bgColor: "#5baf70aa",
                bgImage: "linear-gradient(132deg, #F4D03F 0%, #16A085 100%)",
              },
            ].map(({ name, link, bgColor, bgImage }, index) => (
              <Button
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "white",
                  fontSize: "1.2rem",
                  minWidth: "8rem",
                  borderRadius: "0.5rem",
                  height: "6rem",
                  fontWeight: "bold",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  px: 1.6,
                  m: 1,
                  lineHeight: 1.2,
                  backgroundColor: bgColor,
                  backgroundImage: bgImage,
                  boxShadow: `0 4px 12px -2px ${bgColor}`,
                  "&:hover": {
                    boxShadow: `0 4px 24px 0 ${bgColor}`,
                  },
                  backdropFilter: "blur( 4px )",
                }}
              >
                {name}
              </Button>
            ))}
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default Sem2;
