import { Card, Box, CardContent, Typography, Button } from "@mui/material";

const GradientButton = ({ name, link, bgColor, bgImage }) => (
  <Button
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      color: "white",
      fontSize: "1.2rem",
      minWidth: "6.2rem",
      borderRadius: "0.5rem",
      height: "5.4rem",
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
);

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
                bgColor: "#6bc6cd",
                bgImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
              },
              {
                name: "Stats I",
                link: "https://drive.google.com/drive/folders/1b6RLI0WL88wprctnlBwAge6gaXLW-VZW?usp=sharing",
                bgColor: "#2d8968",
                bgImage: "linear-gradient(42deg, #187a67 0%, #6ab26a 100%)",
              },
              {
                name: "DS CSIT",
                link: "https://drive.google.com/drive/folders/1e1wjlK7yvBb9I9Xna5N8zjuq6CVWnRnQ?usp=sharing",
                bgColor: "#319ee3",
                bgImage: "linear-gradient(175deg, #afdbff 0%, #2297df 100%)",
              },
              {
                name: "DS Rosen",
                link: "https://drive.google.com/file/d/1cq2ZgbxcC63OtVTkBqYVVdP53HR1Clhz/view?usp=sharing",
                bgColor: "#9b97a1",
                bgImage: "linear-gradient(200deg, #383c84 0%, #a49fa4 100%)",
              },
              {
                name: "OOP Lafore",
                link: "https://drive.google.com/file/d/1HogQlyLeo2QRNaFGe-ng36Wdx4l9ni2X/view?usp=sharing",
                bgColor: "#714294",
                bgImage: "linear-gradient(43deg, #773BB8 0%, #655147 100%)",
              },
            ].map(({ name, link, bgColor, bgImage }, index) => (
              <GradientButton
                key={index}
                name={name}
                link={link}
                bgColor={bgColor}
                bgImage={bgImage}
              />
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
                bgColor: "#6c55cb",
                bgImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 100%)",
              },
              {
                name: "SXC Old Qs",
                link: "https://drive.google.com/drive/folders/13pQW9kwmIEDS1vgnrfAeigVyjhSP_dUR?usp=sharing",
                bgColor: "#FBAB7E",
                bgImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
              },
              {
                name: "SPSS 2022",
                link: "https://drive.google.com/uc?export=download&id=1vc_TeosdUFqMUHqw0eD0t839NEUQxklt",
                bgColor: "#72a0ce",
                bgImage: "linear-gradient(120deg, #bcd8f0 0%, #4b83bc 100%)",
              },
            ].map(({ name, link, bgColor, bgImage }, index) => (
              <GradientButton
                key={index}
                name={name}
                link={link}
                bgColor={bgColor}
                bgImage={bgImage}
              />
            ))}
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default Sem2;
