import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import EditOnGithubButton from "./EditOnGithubButton";
import { materials } from "../utils/constants/materials";

export function GradientButton({
  name,
  link,
  bgColor,
  bgImage,
  onClick,
}: {
  name: string | React.ReactNode;
  link: string;
  bgColor: string;
  bgImage: string;
  onClick?: () => void;
}) {
  return (
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
}

const Materials = ({ sem, setSem }) => {
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
            position: "relative",
            flex: 1,
            pb: 0,
            pt: 1,
          }}
        >
          <EditOnGithubButton link="https://www.github.com/" />
          <FormControl
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 1,
            }}
          >
            <Typography variant="h5" component="div">
              Semester
            </Typography>
            <RadioGroup
              defaultValue="sem3"
              name="semChooseOptions"
              value={sem}
              onChange={(event) => {
                setSem(event.target.value);
              }}
              sx={{
                py: 1,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <FormControlLabel
                value="sem1"
                control={<Radio />}
                label="1st"
              />
              <FormControlLabel
                value="sem2"
                control={<Radio />}
                label="2nd"
              />
              <FormControlLabel
                value="sem3"
                control={<Radio />}
                label="3rd"
              />
              <FormControlLabel
                value="sem4"
                control={<Radio />}
                label="4th"
              />
              <FormControlLabel
                value="sem5"
                control={<Radio />}
                label="5th"
              />
              <FormControlLabel
                value="sem6"
                control={<Radio />}
                label="6th"
              />
              <FormControlLabel
                value="sem7"
                control={<Radio />}
                label="7th"
              />
            </RadioGroup>
          </FormControl>
          {materials[sem].books.length !== 0 ? (
            <>
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
                  textAlign: "center",
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
            </>
          ) : null}
          {materials[sem].materials.length !== 0 ? (
            <>
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
                  textAlign: "center",
                }}
              >
                {materials[sem].materials.map(
                  (
                    { name, link, onClick, bgColor, bgImage },
                    index
                  ) => (
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
            </>
          ) : null}
          {materials[sem].materials.length === 0 &&
          materials[sem].books.length === 0 ? (
            <Typography
              variant="subtitle1"
              component="div"
              sx={{
                textAlign: "center",
              }}
            >
              No materials available for this semester
            </Typography>
          ) : null}
        </CardContent>
      </Box>
    </Card>
  );
};

export default Materials;
