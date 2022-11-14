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
} from "@mui/material";
import { useEffect, useState } from "react";
import useFrontPageGenerator from "../utils/frontPageGenerator";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import constants from "../utils/frontPageGenerator/constants";

export default function FrontPageGenerator() {
  const [roll, setRoll] = useState(null);
  const [assignmentNumber, setAssignmentNumber] = useState(null);
  const [subject, setSubject] = useState("DL");
  const { names, dlAssignments, fitAssignments } = constants;
  const list = Object.entries(names).map((entry) => ({
    roll: entry[0],
    label: entry[1][0],
  }));

  const handleChange = (event) => {
    setSubject(event.target.value);
  };

  const [generateFrontPage, error, loading] = useFrontPageGenerator();

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error, loading]);

  return (
    <Card sx={{ display: "flex", margin: "1rem auto", maxWidth: 768 }}>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <FormControl
          component="form"
          sx={{
            my: 1,
          }}
          onSubmit={(e) => {
            e.preventDefault();
            // const data = new FormData(e.target).entries();
            // const values = {};
            // let result = data.next();
            // while (!result.done) {
            //   values[result.value[0]] = result.value[1];
            //   result = data.next();
            // }
            // values.roll = list.find(
            //   (entry) => entry.label === values.name
            // ).roll;
            // // if (values.subject === "DL") {
            // //   values.assignmentNumber = dlAssignments.find(
            // //     (assignment) => assignment.name === values.assignmentName
            // //   ).number;
            // // } else if (values.subject === "FIT") {
            // //   values.assignmentNumber = fitAssignments.find(
            // //     (assignment) => assignment.name === values.assignmentName
            // //   ).number;
            // // }

            generateFrontPage({ roll, assignmentNumber, subject });
          }}
        >
          <CardContent
            sx={{
              flex: 1,
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
                my: 1,
              }}
              openOnFocus
              onChange={(event, value) => {
                setRoll(value.roll);
              }}
              disableClearable
              size="small"
              options={list}
              renderInput={(params) => (
                <TextField required {...params} name="name" label="Name" />
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
              onChange={handleChange}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FormControlLabel
                value="DL"
                defaultChecked={true}
                control={<Radio />}
                label="Digital Logic"
              />
              <FormControlLabel
                value="C"
                control={<Radio />}
                label="C Programming"
              />
              <FormControlLabel
                value="FIT"
                control={<Radio />}
                label="Fundamentals of IT"
              />
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
                required
                onChange={(e) => {
                  setAssignmentNumber(e.target.value);
                }}
                onWheel={(event) => {
                  event.target.blur();
                }}
              />
            ) : (
              [
                { subject: "DL", assignments: dlAssignments },
                { subject: "FIT", assignments: fitAssignments },
              ].map((entry) => (
                <>
                  {entry.subject === subject ? (
                    <Autocomplete
                      sx={{
                        my: 1,
                      }}
                      options={entry.assignments.map((assignment, index) => ({
                        ...assignment,
                        label: `${index}`,
                      }))}
                      onChange={(event, value) => {
                        setAssignmentNumber(value.number);
                      }}
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
                          <>- - -</>
                          <>{params.children}</>
                        </>
                      )}
                      getOptionLabel={(option) => option.name}
                    />
                  ) : null}
                </>
              ))
            )}
          </CardContent>
          <CardActions>
            <Button size="small" disabled={loading} type="submit">
              Generate Front Page
            </Button>
          </CardActions>
        </FormControl>
      </Box>
      <Box
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
      </Box>
    </Card>
  );
}
