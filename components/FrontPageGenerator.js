import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Typography,
  Container,
} from "@mui/material";
import { useEffect, useState, useContext, useRef } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import constants from "../utils/frontPageGenerator/constants";
import { AppContext } from "../context/appContext";
import dynamic from "next/dynamic";

export default function FrontPageGenerator() {
  const NonSSRFrontPageButton = dynamic(
    () => import("./NonSSRFrontPageButton"),
    {
      ssr: false,
      loading: () => (
        <Button disabled size="small">
          Generate Front Page
        </Button>
      ),
    }
  );

  const namePicker = useRef(null);

  const { roll, setRoll } = useContext(AppContext);
  const [assignmentNumber, setAssignmentNumber] = useState(null);
  const [subject, setSubject] = useState("DL");
  const { names, dlAssignments, fitAssignments } = constants;

  const assignmentLists = [
    { subject: "DL", assignments: dlAssignments },
    { subject: "FIT", assignments: fitAssignments },
  ];

  useEffect(() => {
    if (subject === "DL" || subject === "FIT") {
      assignmentLists.forEach((entry) => {
        if (entry.subject === subject) {
          setAssignmentNumber(
            entry.assignments.find((assignment) => assignment.selected).number
          );
        }
      });
    }
  }, [subject]);

  const list = [["0", ["Select your name"]], ...Object.entries(names)].map(
    (entry) => ({
      roll: entry[0],
      label: entry[1][0],
    })
  );

  return (
    <Container>
      <Card sx={{ display: "flex", margin: "1rem auto", maxWidth: 480 }}>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <FormControl component="form">
            <CardContent
              sx={{
                flex: 1,
                pb: 0,
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                Front Page Generator
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Generate your own front page with ease.
              </Typography>

              <Autocomplete
                sx={{
                  my: 2,
                }}
                openOnFocus
                onChange={(event, value) => {
                  setRoll(value.roll);
                }}
                value={list.find((entry) => entry.roll === roll)}
                disableClearable
                size="small"
                autoHighlight
                options={list}
                getOptionDisabled={(option) =>
                  option === list.find((entry) => entry.roll === "0")
                }
                renderInput={(params) => (
                  <TextField
                    inputRef={namePicker}
                    required
                    {...params}
                    name="name"
                    label="Name"
                  />
                )}
                isOptionEqualToValue={(option, value) =>
                  option.roll === value.roll
                }
                renderOption={(props, option) => (
                  <Box
                    {...props}
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Typography
                      sx={{
                        flex: 1,
                      }}
                    >
                      {option.label}
                    </Typography>
                    <Typography>{option.roll}</Typography>
                  </Box>
                )}
              />
              <FormLabel id="demo-row-radio-buttons-group-label">
                Subject
              </FormLabel>
              <RadioGroup
                name="subject"
                value={subject}
                onChange={(event) => {
                  setSubject(event.target.value);
                }}
                sx={{
                  mb: 1,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {[
                  {
                    shortHand: "DL",
                    longHand: "Digital Logic",
                  },
                  {
                    shortHand: "C",
                    longHand: "C Programming",
                  },
                  {
                    shortHand: "FIT",
                    longHand: "Fundamentals of IT",
                  },
                ].map((subject, index) => (
                  <FormControlLabel
                    sx={{
                      my: -0.5,
                    }}
                    value={subject.shortHand}
                    defaultChecked={index === 0}
                    control={<Radio />}
                    label={subject.longHand}
                  />
                ))}
              </RadioGroup>
              {subject === "C" ? (
                <TextField
                  sx={{
                    my: 1,
                    width: "100%",
                  }}
                  size="small"
                  name="assignmentNumber"
                  label="Assignment Number"
                  type="number"
                  inputProps={{
                    min: 1,
                  }}
                  required
                  onChange={(e) => {
                    setAssignmentNumber(e.target.value);
                  }}
                  onWheel={(event) => {
                    event.target.blur();
                  }}
                />
              ) : (
                assignmentLists.map((entry, index) => (
                  <Box key={index}>
                    {entry.subject === subject ? (
                      <Autocomplete
                        sx={{
                          my: 2,
                        }}
                        onFocus={(event) => {
                          event.target.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }}
                        options={entry.assignments.map((assignment, index) => ({
                          ...assignment,
                          label: `${index}`,
                        }))}
                        onChange={(event, value) => {
                          setAssignmentNumber(value.number);
                        }}
                        defaultValue={entry.assignments.find(
                          (assignment) => assignment.selected
                        )}
                        autoHighlight
                        groupBy={(option) => option.group}
                        disableClearable
                        size="small"
                        openOnFocus
                        isOptionEqualToValue={(option, value) =>
                          option.number === value.number
                        }
                        renderInput={(params) => (
                          <TextField
                            required
                            {...params}
                            name="assignmentName"
                            label="Assignment Name"
                          />
                        )}
                        renderGroup={(params) => (
                          <>
                            <hr />
                            {params.children}
                          </>
                        )}
                        getOptionLabel={(option) => option.name}
                      />
                    ) : null}
                  </Box>
                ))
              )}
            </CardContent>
            <CardActions>
              <NonSSRFrontPageButton
                {...{
                  roll,
                  assignmentNumber,
                  subject,
                  namePicker,
                }}
              />
            </CardActions>
          </FormControl>
        </Box>
        {/* <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          sx={{
            height: "100%",
            objectFit: "contain",
          }}
          component="img"
          image="/static/images/cards/front-page-example.png"
          alt="Front page example"
        />
      </Box> */}
      </Card>
    </Container>
  );
}
