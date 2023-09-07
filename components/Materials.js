import { Card, Box, CardContent, Typography, Button } from "@mui/material";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { materials } from "../utils/constants";
import { useRouter } from "next/router";

export const GradientButton = ({ name, link, bgColor, bgImage, onClick }) => (
  <Button
    href={link}
    onClick={onClick}
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      textAlign: "left",
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
    }}
  >
    {name}
  </Button>
);

const Materials = ({ sem }) => {
  const router = useRouter();
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
            pt: 1,
          }}
        >
          <FormControl
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <RadioGroup
              defaultValue="sem3"
              name="semChooseOptions"
              value={sem}
              onChange={(event) => {
                localStorage.setItem("sem", event.target.value.split("sem")[1]);
                router.replace(`/${event.target.value.split("sem")[1]}`);
              }}
              sx={{
                py: 1,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <FormControlLabel
                value="sem3"
                control={<Radio />}
                label="3rd Semester"
              />
              <FormControlLabel
                value="sem2"
                control={<Radio />}
                label="2nd Semester"
              />
            </RadioGroup>
          </FormControl>

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
            {materials[sem].books.map(
              ({ name, link, bgColor, bgImage }, index) => (
                <GradientButton
                  key={index}
                  name={name}
                  link={link}
                  bgColor={bgColor}
                  bgImage={bgImage}
                />
              )
            )}
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
            {materials[sem].materials.map(
              ({ name, link, onClick, bgColor, bgImage }, index) => (
                <GradientButton
                  key={index}
                  name={name}
                  link={link}
                  onClick={onClick}
                  bgColor={bgColor}
                  bgImage={bgImage}
                />
              )
            )}
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default Materials;
