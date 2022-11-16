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
  InputLabel,
  Select,
  SelectField,
  MenuItem,
  Container,
} from "@mui/material";
import { useEffect, useState, useContext, useRef } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import constants from "../utils/frontPageGenerator/constants";
import { AppContext } from "../context/appContext";
import { WordContext } from "../context/wordContext";
import { prefetchDocument } from "../utils/frontPageGenerator";
import useFrontPageGenerator from "../utils/frontPageGenerator";

export default function FrontPageGenerator() {
  const namePicker = useRef(null);

  const { roll, setRoll } = useContext(AppContext);
  const [subject, setSubject] = useState("DL");

  const { names, dlAssignments, fitAssignments } = constants;

  const assignmentLists = [
    { subject: "DL", assignments: dlAssignments },
    { subject: "FIT", assignments: fitAssignments },
    {
      subject: "C",
      assignments: [
        {
          number: 10,
          selected: true,
        },
      ],
    },
  ];

  const [assignmentNumber, setAssignmentNumber] = useState(
    assignmentLists
      .find((entry) => entry.subject === subject)
      .assignments.find((assignment) => assignment.selected).number
  );

  useEffect(() => {
    if (subject === "DL" || subject === "FIT") {
      assignmentLists.forEach((entry) => {
        if (entry.subject === subject) {
          setAssignmentNumber(
            entry.assignments.find((assignment) => assignment.selected).number
          );
        }
      });
    } else if (subject === "C") {
      setAssignmentNumber(
        assignmentLists
          .find((entry) => entry.subject === subject)
          .assignments.find((assignment) => assignment.selected).number
      );
    }
  }, [subject]);

  const list = [["0", ["Select your name"]], ...Object.entries(names)].map(
    (entry) => ({
      roll: entry[0],
      label: entry[1][0],
    })
  );

  const wordFiles = useContext(WordContext);

  const [generateFrontPage, error, loading] = useFrontPageGenerator();

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error, loading]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      prefetchDocument({ wordFiles, subject, roll });
    }
  }, [subject, roll]);

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
          <FormControl
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              if (roll === "0" || !roll) {
                namePicker.current.select();
                return;
              }
              generateFrontPage({
                roll,
                assignmentNumber,
                subject,
                wordFiles,
              });
            }}
          >
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
                  mt: 3,
                }}
                openOnFocus
                onChange={(event, value) => {
                  setRoll(value.roll);
                }}
                value={list.find((entry) => entry.roll === roll)}
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
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                sx={{
                  fontSize: ".8rem",
                }}
              >
                Subject
              </FormLabel>
              <RadioGroup
                name="subject"
                value={subject}
                onChange={(event) => {
                  setSubject(event.target.value);
                }}
                sx={{
                  mb: 2,
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
                    key={index}
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
                  name="assignmentNumber"
                  label="Assignment Number"
                  type="number"
                  inputProps={{
                    min: 1,
                  }}
                  required
                  value={assignmentNumber}
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
                      <FormControl
                        fullWidth
                        sx={{
                          my: 1,
                        }}
                      >
                        <InputLabel id="assignment-number">
                          Assignment Name
                        </InputLabel>
                        <Select
                          labelId="assignment-number-label"
                          id="assignment-number"
                          label="Assignment Name"
                          sx={{
                            "& .MuiInputBase-input": {
                              whiteSpace: "break-spaces !important",
                            },
                          }}
                          MenuProps={{
                            anchorOrigin: {
                              vertical: "top",
                              horizontal: "left",
                            },
                            transformOrigin: {
                              vertical: "top",
                              horizontal: "left",
                            },
                          }}
                          value={assignmentNumber}
                          onChange={(event) =>
                            setAssignmentNumber(event.target.value)
                          }
                        >
                          {entry.assignments.map((assignment, index) => (
                            <MenuItem
                              key={index}
                              sx={{
                                whiteSpace: "break-spaces",
                              }}
                              value={assignment.number}
                            >
                              {assignment.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    ) : null}
                  </Box>
                ))
              )}
            </CardContent>
            <CardActions>
              <Button type="submit" size="small">
                Generate Front Page
              </Button>
            </CardActions>
          </FormControl>
        </Box>
      </Card>
    </Container>
  );
}
