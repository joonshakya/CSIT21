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
import MenuItem from "@mui/material/MenuItem";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useEffect, useState, useRef, useMemo } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {
  names,
  dlAssignments,
  fitAssignments,
  dsAssignments,
  oopAssignments,
  caAssignments,
  nmAssignments,
  dsaAssignments,
  cnAssignments,
  dbmsAssignments,
  tocAssignments,
  webTechAssignments,
  simulationAssignments,
  nccAssignments,
  compilerAssignments,
  eComAssignments,
  javaAssignments,
} from "../constants";
import { prefetchDocument } from "../utils/frontPageGenerator";
import useFrontPageGenerator from "../utils/frontPageGenerator";
import CircularProgress from "@mui/material/CircularProgress";
import { useBaseStore, useWordStore } from "../store";
import { Sem } from "../constants/types";
import { ListItem } from "@mui/material";

export default function FrontPageGenerator({ sem }: { sem: Sem }) {
  const namePicker = useRef(null);

  const roll = useBaseStore((state) => state.roll);
  const setRoll = useBaseStore((state) => state.setRoll);
  const wordFileLoaded = useBaseStore(
    (state) => state.wordFileLoaded
  );

  const assignmentsWithTopics = useMemo(() => {
    return [
      "DL",
      "FIT",
      "DS",
      "OOP",
      "CA",
      "NM",
      "DSA",
      "CN",
      "DBMS",
      "TOC",
      "Web Tech",
      "Simulation",
      "NCC",
      "ECom",
      "Compiler",
      "Java",
    ];
  }, []);

  const assignmentsWithoutTopics = useMemo(() => {
    return [
      "Compiler Index",
      "Ecom Index",
      "SE Index",
      "NCC Index",
      "Web Tech Index",
      "Simulation Index",
      "DAA Index",
      "MM Index",
      "TOC Index",
      "DBMS Index",
      "CN Index",
      "AI Index",
      "CG Index",
      "CA Index",
      "DSA Index",
      "NM Index",
      "OOP Index",
      "DS Index",
      "μP Index",
      "C",
    ];
  }, []);

  const initialSubject = "Java";

  const [tab, setTab] = useState("assignment");
  const [subject, setSubject] = useState(initialSubject);

  const assignmentLists = useMemo(() => {
    return [
      {
        subject: "Java",
        assignments: javaAssignments,
      },
      {
        subject: "Compiler",
        assignments: compilerAssignments,
      },
      {
        subject: "ECom",
        assignments: eComAssignments,
      },
      {
        subject: "NCC",
        assignments: nccAssignments,
      },
      {
        subject: "Web Tech",
        assignments: webTechAssignments,
      },
      {
        subject: "Simulation",
        assignments: simulationAssignments,
      },
      {
        subject: "CN",
        assignments: cnAssignments,
      },
      {
        subject: "DBMS",
        assignments: dbmsAssignments,
      },
      {
        subject: "TOC",
        assignments: tocAssignments,
      },
      {
        subject: "DSA",
        assignments: dsaAssignments,
      },
      {
        subject: "TOC Index",
        assignments: [
          {
            number: 0,
            selected: true,
          },
        ],
      },
      {
        subject: "Compiler Index",
        assignments: [
          {
            number: 0,
            selected: true,
          },
        ],
      },
      {
        subject: "NCC Index",
        assignments: [
          {
            number: 0,
            selected: true,
          },
        ],
      },
      {
        subject: "ECom Index",
        assignments: [
          {
            number: 0,
            selected: true,
          },
        ],
      },
      {
        subject: "SE Index",
        assignments: [
          {
            number: 0,
            selected: true,
          },
        ],
      },
      {
        subject: "Web Tech Index",
        assignments: [
          {
            number: 0,
            selected: true,
          },
        ],
      },
      {
        subject: "Simulation Index",
        assignments: [
          {
            number: 0,
            selected: true,
          },
        ],
      },
      {
        subject: "DAA Index",
        assignments: [
          {
            number: 0,
            selected: true,
          },
        ],
      },
      {
        subject: "MM Index",
        assignments: [
          {
            number: 0,
            selected: true,
          },
        ],
      },
      {
        subject: "DBMS Index",
        assignments: [
          {
            number: 0,
            selected: true,
          },
        ],
      },
      {
        subject: "CN Index",
        assignments: [
          {
            number: 0,
            selected: true,
          },
        ],
      },
      {
        subject: "AI Index",
        assignments: [
          {
            number: 0,
            selected: true,
          },
        ],
      },
      {
        subject: "CG Index",
        assignments: [
          {
            number: 0,
            selected: true,
          },
        ],
      },
      {
        subject: "CA Index",
        assignments: [
          {
            number: 0,
            selected: true,
          },
        ],
      },
      {
        subject: "DSA Index",
        assignments: [
          {
            number: 0,
            selected: true,
          },
        ],
      },
      {
        subject: "NM Index",
        assignments: [
          {
            number: 0,
            selected: true,
          },
        ],
      },
      {
        subject: "CA",
        assignments: caAssignments,
      },
      {
        subject: "NM",
        assignments: nmAssignments,
      },
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
  }, []);

  const [assignmentNumber, setAssignmentNumber] = useState(
    assignmentLists
      .find((entry) => entry.subject === subject)
      .assignments.find((assignment) => assignment.selected).number
  );

  useEffect(() => {
    if (tab === "assignment") {
      setSubject(initialSubject);
    } else if (tab === "index") {
      setSubject("Compiler Index");
    }
  }, [tab]);

  useEffect(() => {
    if (assignmentsWithTopics.includes(subject)) {
      assignmentLists.forEach((entry) => {
        if (entry.subject === subject) {
          setAssignmentNumber(
            entry.assignments.find(
              (assignment) => assignment.selected
            ).number
          );
        }
      });
    } else if (assignmentsWithoutTopics.includes(subject)) {
      setAssignmentNumber(
        assignmentLists
          .find((entry) => entry.subject === subject)
          .assignments.find((assignment) => assignment.selected)
          .number
      );
    }
  }, [
    subject,
    assignmentLists,
    assignmentsWithTopics,
    assignmentsWithoutTopics,
  ]);

  const list: Array<{
    roll: number;
    label: string;
  }> = [
    ["0", ["Select your name"]],
    ...Object.entries(names[sem]),
  ].map((entry: [roll: string, [name: string]]) => ({
    roll: parseInt(entry[0]),
    label: entry[1][0],
  }));

  const wordFiles = useWordStore() as {
    setWordFile: (data: {
      subject: string;
      content: ArrayBuffer;
    }) => void;
  } & {
    [key: string]: ArrayBuffer | null;
  };
  const { generateFrontPage, error, loading, setError } =
    useFrontPageGenerator();

  useEffect(() => {
    setError(null);
    prefetchDocument({
      sem,
      wordFiles,
      subject,
      roll,
      setLoad: false,
    });
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
            if (!roll) {
              namePicker.current.select();
              return;
            }
            generateFrontPage({
              sem,
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
                option === list.find((entry) => entry.roll === 0)
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
              renderOption={(props, option) => {
                const { key, ...optionProps } = props as any;
                return (
                  <ListItem
                    {...optionProps}
                    key={key}
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
                  </ListItem>
                );
              }}
            />
            <FormLabel
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
                          shortHand: "Java",
                          longHand: "Java",
                        },
                      ]
                    : []
                  ).map((subject, index) => (
                    <FormControlLabel
                      key={index}
                      value={subject.shortHand}
                      defaultChecked={index === 0}
                      control={<Radio />}
                      label={subject.longHand}
                    />
                  ))}
                </Box>
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
                          shortHand: "Compiler",
                          longHand: "Compiler",
                        },
                        {
                          shortHand: "NCC",
                          longHand: "NCC",
                        },
                        {
                          shortHand: "ECom",
                          longHand: "ECom",
                        },
                      ]
                    : [
                        {
                          shortHand: "Compiler Index",
                          longHand: "Compiler",
                        },
                        {
                          shortHand: "NCC Index",
                          longHand: "NCC",
                        },
                        {
                          shortHand: "SE Index",
                          longHand: "SE",
                        },
                        {
                          shortHand: "ECom Index",
                          longHand: "ECom",
                        },
                      ]
                  ).map((subject, index) => (
                    <FormControlLabel
                      key={index}
                      value={subject.shortHand}
                      defaultChecked={index === 0}
                      control={<Radio />}
                      label={subject.longHand}
                    />
                  ))}
                </Box>
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
                          shortHand: "Web Tech",
                          longHand: "Web Tech",
                        },
                        {
                          shortHand: "Simulation",
                          longHand: "Simulation",
                        },
                      ]
                    : [
                        {
                          shortHand: "Web Tech Index",
                          longHand: "Web Tech",
                        },
                        {
                          shortHand: "Simulation Index",
                          longHand: "Simulation",
                        },
                        {
                          shortHand: "DAA Index",
                          longHand: "DAA",
                        },
                        {
                          shortHand: "MM Index",
                          longHand: "MM",
                        },
                      ]
                  ).map((subject, index) => (
                    <FormControlLabel
                      key={index}
                      value={subject.shortHand}
                      defaultChecked={index === 0}
                      control={<Radio />}
                      label={subject.longHand}
                    />
                  ))}
                </Box>
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
                          shortHand: "CN",
                          longHand: "CN",
                        },
                        {
                          shortHand: "DBMS",
                          longHand: "DBMS",
                        },
                        {
                          shortHand: "TOC",
                          longHand: "TOC",
                        },
                      ]
                    : [
                        {
                          shortHand: "TOC Index",
                          longHand: "TOC",
                        },
                        {
                          shortHand: "DBMS Index",
                          longHand: "DBMS",
                        },
                        {
                          shortHand: "CN Index",
                          longHand: "CN",
                        },
                        {
                          shortHand: "AI Index",
                          longHand: "AI",
                        },
                      ]
                  ).map((subject, index) => (
                    <FormControlLabel
                      key={index}
                      value={subject.shortHand}
                      defaultChecked={index === 0}
                      control={<Radio />}
                      label={subject.longHand}
                    />
                  ))}
                </Box>
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
                          shortHand: "CA",
                          longHand: "CA",
                        },
                        {
                          shortHand: "DSA",
                          longHand: "DSA",
                        },
                        {
                          shortHand: "NM",
                          longHand: "NM",
                        },
                      ]
                    : [
                        {
                          shortHand: "CG Index",
                          longHand: "CG",
                        },
                        {
                          shortHand: "CA Index",
                          longHand: "CA",
                        },
                        {
                          shortHand: "DSA Index",
                          longHand: "DSA",
                        },
                        {
                          shortHand: "NM Index",
                          longHand: "NM",
                        },
                      ]
                  ).map((subject, index) => (
                    <FormControlLabel
                      key={index}
                      value={subject.shortHand}
                      defaultChecked={index === 0}
                      control={<Radio />}
                      label={subject.longHand}
                    />
                  ))}
                </Box>
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
                      ]
                    : []
                  ).map((subject, index) => (
                    <FormControlLabel
                      key={index}
                      value={subject.shortHand}
                      defaultChecked={index === 0}
                      control={<Radio />}
                      label={subject.longHand}
                    />
                  ))}
                </Box>
              </Box>
            </RadioGroup>
            {assignmentsWithoutTopics.includes(subject) ? (
              <>
                {tab === "assignment" ? (
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
                      setAssignmentNumber(parseInt(e.target.value));
                    }}
                    onWheel={(event) => {
                      (event.target as HTMLInputElement).blur();
                    }}
                  />
                ) : null}
              </>
            ) : assignmentsWithTopics.includes(subject) ? (
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
                          setAssignmentNumber(
                            typeof event.target.value === "string"
                              ? parseInt(event.target.value)
                              : event.target.value
                          )
                        }
                      >
                        {entry.assignments.map(
                          (assignment, index) => (
                            <MenuItem
                              key={index}
                              sx={{
                                whiteSpace: "break-spaces",
                              }}
                              value={assignment.number}
                            >
                              {assignment.number}. {assignment.name}
                            </MenuItem>
                          )
                        )}
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
