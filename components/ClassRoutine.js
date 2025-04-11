import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Fragment, useEffect, useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { classRoutine, names } from "../utils/constants";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Skeleton from "@mui/material/Skeleton";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useBaseStore } from "../src/store";

const tCellStyles = {
  px: 1,
  textAlign: "center",
  border: "1px solid #d7d7d7",
};

const RoutineTableCell = ({ onlySection, section, routineRow }) =>
  routineRow[section].map(([subject, room], index) => {
    const combined =
      routineRow.a[index]?.[0] === routineRow.b[index]?.[0] &&
      routineRow.a[index]?.[1] === routineRow.b[index]?.[1];
    if (section === "b" && combined && !onlySection) {
      return null;
    }
    return typeof subject !== "string" ? (
      <TableCell
        role={subject?.microSyllabus ? "button" : null}
        onClick={() => {
          const clickOpens =
            localStorage.getItem("clickOpens") || "notes";
          if (clickOpens === "syllabus" && subject?.microSyllabus) {
            window.open(subject.microSyllabus, "_blank");
          }
          if (clickOpens === "notes" && subject?.notes) {
            window.open(subject.notes, "_blank");
          }
          if (clickOpens === "question" && subject?.questions) {
            window.open(subject.questions, "_blank");
          }
        }}
        rowSpan={combined && !onlySection ? 2 : 1}
        key={index}
        sx={{
          ...tCellStyles,
          backgroundColor: combined ? "#efefef" : "inherit",
          transition: "all .1s",
          cursor: subject?.microSyllabus ? "pointer" : null,
          "&:hover": {
            backgroundColor: subject?.microSyllabus
              ? "#e3e3e3"
              : null,
          },
          whiteSpace: "pre-wrap",
        }}
      >
        {subject?.shortName}
        <br />
        {room}
      </TableCell>
    ) : (
      <TableCell
        rowSpan={combined && !onlySection ? 2 : 1}
        align="center"
        key={index}
        sx={[tCellStyles, { p: 0 }]}
      >
        {subject} <br />
        {room}
      </TableCell>
    );
  });

export default function ClassRoutine({ sem }) {
  const roll = useBaseStore((state) => state.roll);
  const fullRoutine = useBaseStore((state) => state.fullRoutine);
  const setFullRoutine = useBaseStore(
    (state) => state.setFullRoutine
  );
  const onlySection = useBaseStore((state) => state.onlySection);
  const setOnlySection = useBaseStore(
    (state) => state.setOnlySection
  );

  const [loading, setLoading] = useState(true);
  const [todayDayName, setTodayDayName] = useState("");
  const [tomorrowDayName, setTomorrowDayName] = useState("");

  const [section, setSection] = useState(
    (roll !== "0" && names[sem]?.[roll]?.[2]) || roll < 25 ? "A" : "B"
  );

  useEffect(() => {
    setSection(
      roll !== "0"
        ? names[sem]?.[roll]?.[2] || (roll < 25 ? "A" : "B")
        : false
    );
  }, [roll]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10);
    const npt = new Date(
      new Date().getTime() +
        new Date().getTimezoneOffset() * 60000 +
        3600000 * 5 +
        2700000
    );
    setTodayDayName(
      npt.toLocaleString("en-US", {
        weekday: "short",
      })
    );
    setTomorrowDayName(
      new Date(npt.getTime() + 24 * 60 * 60 * 1000).toLocaleString(
        "en-US",
        {
          weekday: "short",
        }
      )
    );

    const dateCheck = setInterval(() => {
      const npt = new Date(
        new Date().getTime() +
          new Date().getTimezoneOffset() * 60000 +
          3600000 * 5 +
          2700000
      );
      setTodayDayName(
        npt.toLocaleString("en-US", {
          weekday: "short",
        })
      );
      setTomorrowDayName(
        new Date(npt.getTime() + 24 * 60 * 60 * 1000).toLocaleString(
          "en-US",
          {
            weekday: "short",
          }
        )
      );
    }, 60000);
    return () => clearInterval(dateCheck);
  }, []);

  const [clickOpens, setClickOpens] = useState(
    localStorage.getItem("clickOpens") || "notes"
  );

  useEffect(() => {
    localStorage.setItem("clickOpens", clickOpens);
  }, [clickOpens]);

  return (
    <Card
      sx={{
        mt: 2,
        display: "flex",
        borderRadius: ".6rem",
        "&:hover": {
          boxShadow:
            "0 20px 20px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        },
        overflowX: "auto",
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
            pb: "1rem !important",
          }}
        >
          <Typography variant="h5" component="div">
            Class Routine
          </Typography>
          {loading ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  pt: 4,
                }}
              >
                {Array(3)
                  .fill()
                  .map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                      }}
                    >
                      {Array(3)
                        .fill()
                        .map((item, index) => (
                          <Skeleton
                            key={index}
                            variant="rectangular"
                            sx={{ m: 1 }}
                            width={80}
                            height={30}
                          />
                        ))}
                    </Box>
                  ))}
              </Box>
            </Box>
          ) : (
            <>
              <FormGroup
                sx={{
                  userSelect: "none",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  flexWrap: "wrap",
                }}
              >
                {section && (
                  <FormControlLabel
                    control={
                      <Checkbox
                        size="small"
                        checked={onlySection}
                        onChange={(e) => {
                          setOnlySection(e.target.checked);
                        }}
                        sx={{
                          color: "#3f51b5",
                          "&.Mui-checked": {
                            color: "#3f51b5",
                          },
                        }}
                      />
                    }
                    label={`Show only section ${section}`}
                  />
                )}
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      checked={!fullRoutine}
                      onChange={(e) => {
                        setFullRoutine(!e.target.checked);
                      }}
                      sx={{
                        color: "#3f51b5",
                        "&.Mui-checked": {
                          color: "#3f51b5",
                        },
                      }}
                    />
                  }
                  label={`Show only today, tmr.`}
                />
              </FormGroup>
              <FormControl
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  mb: 1,
                }}
              >
                <Typography
                  sx={{
                    flexShrink: 0,
                    marginRight: 2,
                    marginLeft: 2,
                  }}
                >
                  Click opens
                </Typography>
                <RadioGroup
                  defaultValue="sem3"
                  name="clickOpensOptions"
                  value={clickOpens}
                  onChange={(event) => {
                    setClickOpens(event.target.value);
                  }}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <FormControlLabel
                    value="notes"
                    control={<Radio size="small" />}
                    label="Notes"
                  />
                  <FormControlLabel
                    value="syllabus"
                    control={<Radio size="small" />}
                    label="Syllabus"
                  />
                  <FormControlLabel
                    value="question"
                    control={<Radio size="small" />}
                    label="Question Bank"
                  />
                </RadioGroup>
              </FormControl>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow
                      sx={{
                        backgroundColor: "#f5f5f5",
                        "&:nth-of-type(odd)": {
                          // backgroundColor: "#f5f5f5",
                        },
                      }}
                    >
                      {[
                        "Day",
                        "",
                        "1st",
                        "2nd",
                        "3rd",
                        ...(classRoutine[sem][0].a.length === 4
                          ? ["4th"]
                          : []),
                      ].map((item) =>
                        onlySection && item === "" ? null : (
                          <TableCell
                            sx={tCellStyles}
                            key={item}
                            align="center"
                          >
                            {item}
                          </TableCell>
                        )
                      )}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(!fullRoutine
                      ? [
                          ...classRoutine[sem].filter(
                            (row) =>
                              row.day === todayDayName ||
                              row.day === tomorrowDayName
                          ),
                          ...(todayDayName == "Fri"
                            ? [classRoutine[sem][0]]
                            : []),
                        ]
                      : classRoutine[sem]
                    ).map((row) => (
                      <Fragment key={row.day}>
                        <TableRow
                          sx={{
                            backgroundColor: "#fefefe",
                            "&:nth-of-type(odd)": {
                              // backgroundColor: "#f5f5f5",
                            },
                          }}
                        >
                          <TableCell
                            sx={tCellStyles}
                            rowSpan={2}
                            align="center"
                          >
                            {todayDayName === row.day ? (
                              <div
                                sx={{
                                  fontWeight: "bold",
                                }}
                              >
                                Today
                              </div>
                            ) : tomorrowDayName === row.day ? (
                              <div
                                sx={{
                                  fontWeight: "bold",
                                }}
                              >
                                Tmr.
                              </div>
                            ) : null}
                            {row.day}
                          </TableCell>
                          {!onlySection ||
                          (onlySection && section !== "B") ? (
                            <>
                              {!onlySection ? (
                                <TableCell
                                  sx={tCellStyles}
                                  align="center"
                                >
                                  A
                                </TableCell>
                              ) : null}
                              <RoutineTableCell
                                onlySection={onlySection}
                                section="a"
                                routineRow={row}
                              />
                            </>
                          ) : null}
                        </TableRow>
                        <TableRow
                          sx={{
                            backgroundColor: "#f5f5f5",
                            "&:nth-of-type(odd)": {
                              // backgroundColor: "#f5f5f5",
                            },
                          }}
                        >
                          {!onlySection ||
                          (onlySection && section !== "A") ? (
                            <>
                              {!onlySection ? (
                                <TableCell
                                  sx={tCellStyles}
                                  align="center"
                                >
                                  B
                                </TableCell>
                              ) : null}
                              <RoutineTableCell
                                onlySection={onlySection}
                                section="b"
                                routineRow={row}
                              />
                            </>
                          ) : null}
                        </TableRow>
                      </Fragment>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )}
        </CardContent>
      </Box>
    </Card>
  );
}
