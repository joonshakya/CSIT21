import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { MenuItem, Tab, Tabs } from "@mui/material";
import { useEffect, useState, useRef, useMemo } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import constants from "../utils/frontPageGenerator/constants";
import { prefetchDocument } from "../utils/frontPageGenerator";
import useFrontPageGenerator from "../utils/frontPageGenerator";
import { CircularProgress } from "@mui/material";
import { useBaseStore, useWordStore } from "../src/store";

export default function FrontPageGenerator() {
  const namePicker = useRef(null);

  const roll = useBaseStore((state) => state.roll);
  const setRoll = useBaseStore((state) => state.setRoll);
  const wordFileLoaded = useBaseStore((state) => state.wordFileLoaded);

  const [tab, setTab] = useState("assignment");
  const [subject, setSubject] = useState("OOP");

  const {
    names,
    dlAssignments,
    fitAssignments,
    dsAssignments,
    oopAssignments,
  } = constants;
  const assignmentLists = useMemo(() => {
    return [
      {
        subject: "OOP Index",
        assignments: [
          {
            number: 0,
            selected: true,
          },
        ],
      },
      {
        subject: "OOP",
        assignments: oopAssignments,
      },
      {
        subject: "DS Index",
        assignments: [
          {
            number: 0,
            selected: true,
          },
        ],
      },
      {
        subject: "DS",
        assignments: dsAssignments,
      },
      {
        subject: "μP Index",
        assignments: [
          {
            number: 0,
            selected: true,
          },
        ],
      },
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
  }, [dlAssignments, fitAssignments, dsAssignments, oopAssignments]);

  const [assignmentNumber, setAssignmentNumber] = useState(
    assignmentLists
      .find((entry) => entry.subject === subject)
      .assignments.find((assignment) => assignment.selected).number
  );

  useEffect(() => {
    if (tab === "assignment") {
      setSubject("OOP");
    } else if (tab === "index") {
      setSubject("OOP Index");
    }
  }, [tab]);

  useEffect(() => {
    if (
      subject === "DL" ||
      subject === "FIT" ||
      subject === "DS" ||
      subject === "OOP"
    ) {
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
  }, [subject, assignmentLists]);

  const list = [["0", ["Select your name"]], ...Object.entries(names)].map(
    (entry) => ({
      roll: entry[0],
      label: entry[1][0],
    })
  );

  const wordFiles = useWordStore();
  const [generateFrontPage, error, loading, setError] = useFrontPageGenerator();

  useEffect(() => {
    setError(false);
    prefetchDocument({ wordFiles, subject, roll, setLoad: false });
  }, [subject, roll, setError]); // eslint-disable-line react-hooks/exhaustive-deps

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
                if (value) {
                  setRoll(value.roll);
                }
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
              // sx={{
              //   "& .MuiTabs-indicator": {
              //     display: "none",
              //   },
              // }}
            >
              <Tabs
                sx={{
                  minHeight: "36px",
                  display: "flex",
                  width: "100%",
                }}
                value={tab}
                onChange={(event, newValue) => {
                  setTab(newValue);
                }}
                centered
              >
                <Tab
                  sx={{
                    borderTopLeftRadius: "1rem",
                    display: "block",
                    // backgroundColor: tab === "index" ? "#f3f4f9" : "#e1e4f0",
                    backgroundColor: "#f8f9fd",
                    minHeight: "36px",
                    color: "#697194",
                  }}
                  value="index"
                  label="Index"
                  wrapped
                />
                <Tab
                  sx={{
                    borderTopRightRadius: "1rem",
                    display: "block",
                    backgroundColor: "#f8f9fd",
                    // backgroundColor:
                    //   tab === "assignment" ? "#f3f4f9" : "#e1e4f0",
                    minHeight: "36px",
                    color: "#697194",
                  }}
                  value="assignment"
                  label="Assignment"
                  wrapped
                />
              </Tabs>
              <Box
                sx={{
                  mx: "auto",
                  px: 2,
                  borderRadius: ".6rem",
                  backgroundColor: "#f8f9fd",
                  // backgroundColor: "#f3f4f9",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  {(tab === "assignment"
                    ? [
                        {
                          shortHand: "OOP",
                          longHand: "OOP",
                        },
                        {
                          shortHand: "DS",
                          longHand: "DS",
                        },
                      ]
                    : [
                        {
                          shortHand: "OOP Index",
                          longHand: "OOP",
                        },
                        {
                          shortHand: "DS Index",
                          longHand: "DS",
                        },
                        {
                          shortHand: "μP Index",
                          longHand: "μP",
                        },
                      ]
                  ).map((subject, index) => (
                    <FormControlLabel
                      key={index}
                      value={subject.shortHand}
                      defaultChecked={index === 0}
                      control={<Radio />}
                      label={
                        <>
                          <Box
                            sx={{
                              py: 0.6,
                            }}
                          >
                            {subject.longHand}
                          </Box>
                        </>
                      }
                    />
                  ))}
                </Box>
                {tab === "assignment" ? (
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}
                  >
                    {[
                      {
                        shortHand: "DL",
                        longHand: "DL",
                      },
                      {
                        shortHand: "C",
                        longHand: "C",
                      },
                      {
                        shortHand: "FIT",
                        longHand: "FIT",
                      },
                    ].map((subject, index) => (
                      <FormControlLabel
                        key={index}
                        value={subject.shortHand}
                        defaultChecked={index === 0}
                        control={<Radio />}
                        label={subject.longHand}
                      />
                    ))}
                  </Box>
                ) : null}
              </Box>
            </RadioGroup>
            {subject === "C" ? (
              <TextField
                sx={{
                  my: 1,
                  mt: 2,
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
            ) : subject === "DL" ||
              subject == "FIT" ||
              subject == "DS" ||
              subject == "OOP" ? (
              assignmentLists.map((entry, index) => (
                <Box key={index}>
                  {entry.subject === subject ? (
                    <FormControl
                      fullWidth
                      sx={{
                        my: 1,
                        mt: 2,
                      }}
                    >
                      <InputLabel>Assignment Name</InputLabel>
                      <Select
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
                            {assignment.number}. {assignment.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  ) : null}
                </Box>
              ))
            ) : null}
          </CardContent>
          <CardActions
            sx={{
              flexWrap: "wrap",
            }}
          >
            <Button type="submit" size="small">
              Generate Front Page
            </Button>
            {error ? (
              <Typography
                sx={{
                  color: "#ee8888",
                  px: 1,
                  fontSize: "0.8125rem",
                }}
              >
                {error}
              </Typography>
            ) : loading ? (
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <CircularProgress
                  aria-label="loading"
                  size={24}
                  variant="determinate"
                  value={100}
                  sx={{
                    position: "absolute",
                    mx: 2,
                    opacity: loading ? 0.25 : 0,
                    transition: "opacity 0.5s ease-in-out",
                  }}
                />
                <CircularProgress
                  aria-label="loading"
                  size={24}
                  variant="determinate"
                  value={wordFileLoaded}
                  sx={{
                    mx: 2,
                    opacity: loading ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out",
                  }}
                />
              </Box>
            ) : null}
          </CardActions>
        </FormControl>
      </Box>
    </Card>
  );
}
