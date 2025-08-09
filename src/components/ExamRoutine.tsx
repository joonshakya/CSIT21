import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Fragment, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Skeleton from "@mui/material/Skeleton";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Countdown from "./Countdown";
import { questionPapers } from "../constants";
import { examTypes as examTypesObj } from "../constants";
import { examRoutine } from "../constants/examRoutine";
import EditOnGithubButton from "./EditOnGithubButton";

export default function ExamRoutine({
  examType,
  sem,
  subtitle,
  title,
}: {
  examType: string;
  sem: string;
  subtitle?: string | React.ReactNode;
  title?: string;
}) {
  const [loading, setLoading] = useState(true);
  const [todayDate, setTodayDate] = useState(null);
  const [tomorrowDate, setTomorrowDate] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10);
    const newDate = new Date();
    setTodayDate(newDate);
    setTomorrowDate(
      new Date(newDate.getTime() + 24 * 60 * 60 * 1000)
    );
    const dateCheck = setInterval(() => {
      const newDate = new Date();
      setTodayDate(newDate);
      setTomorrowDate(
        new Date(newDate.getTime() + 24 * 60 * 60 * 1000)
      );
    }, 60000);
    return () => clearInterval(dateCheck);
  }, []);

  const tCellStyles = {
    px: 1,
    height: "inherit",
    border: "1px solid #d7d7d7",
  };

  const routine = examRoutine[sem][examType];
  const questions = questionPapers[sem];

  if (
    new Date(
      routine[routine.length - 1].date + " GMT+5:45"
    ).getTime() <
    new Date().getTime() - 24 * 60 * 60 * 1000
  ) {
    return null;
  }

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
            position: "relative",

            flex: 1,
            pb: "1rem !important",
          }}
        >
          <EditOnGithubButton link="https://github.com/joonshakya/CSIT21/blob/main/src/constants/examRoutine.tsx" />
          <Typography variant="h5" component="div">
            {title ? title : `${examType} Exam Routine`}
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            color="text.secondary"
          >
            {subtitle ? (
              <>
                {subtitle}
                <br />
              </>
            ) : null}
            {routine[0].sourceName ? (
              <>
                Source:{" "}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={routine[0].source}
                >
                  {routine[0].sourceName}
                </Link>
              </>
            ) : null}
          </Typography>
          <Countdown yyyymmddDate={routine[0].date} hideTomorrow />
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
                  .fill(null)
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
                        .fill(null)
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
              <TableContainer
                sx={{
                  mx: "auto",
                  maxWidth:
                    examType !== examTypesObj.prac
                      ? "560px"
                      : "360px",
                }}
              >
                <Table size="small">
                  <TableHead>
                    <TableRow
                      sx={{
                        "&:nth-of-type(odd)": {
                          backgroundColor: "#f5f5f5",
                        },
                      }}
                    >
                      {routine[0].friendlyDate ? (
                        <TableCell sx={tCellStyles} align="center">
                          Date
                        </TableCell>
                      ) : null}
                      <TableCell sx={tCellStyles} align="center">
                        Day
                      </TableCell>
                      {routine[0].time ? (
                        <TableCell sx={tCellStyles} align="center">
                          Time
                        </TableCell>
                      ) : null}
                      <TableCell sx={tCellStyles} align="center">
                        Subject
                      </TableCell>
                      {/* {questions && examType !== examTypesObj.prac ? (
                        <TableCell sx={tCellStyles} align="center">
                          Old Qs
                        </TableCell>
                      ) : null} */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {routine.map((exam) => (
                      <Fragment
                        key={
                          exam.subject.shortName ||
                          exam.subject[0]?.shortName ||
                          exam.date + exam.day + exam.time
                        }
                      >
                        <TableRow
                          sx={{
                            "&:nth-of-type(even)": {
                              backgroundColor: "#f5f5f5",
                            },
                            height: "1px",
                          }}
                        >
                          {exam.friendlyDate ? (
                            <TableCell
                              sx={tCellStyles}
                              align="center"
                            >
                              {exam.friendlyDate}
                            </TableCell>
                          ) : null}

                          <TableCell sx={tCellStyles} align="center">
                            {new Date(
                              exam.date + " GMT+5:45"
                            ).toDateString() ===
                            todayDate.toDateString() ? (
                              <div
                                style={{
                                  fontWeight: "bold",
                                }}
                              >
                                Today
                              </div>
                            ) : new Date(
                                exam.date + " GMT+5:45"
                              ).toDateString() ===
                              new Date(
                                tomorrowDate
                              ).toDateString() ? (
                              <div
                                style={{
                                  fontWeight: "bold",
                                }}
                              >
                                Tmr.
                              </div>
                            ) : null}
                            {exam.day}
                          </TableCell>
                          {exam.time ? (
                            <TableCell
                              sx={tCellStyles}
                              align="center"
                            >
                              {exam.time}
                            </TableCell>
                          ) : null}

                          {!Array.isArray(exam.subject) ? (
                            <TableCell sx={{ ...tCellStyles, p: 0 }}>
                              <Link
                                align="center"
                                sx={{
                                  p: 1,
                                  color: "black",
                                  height: "100%",
                                  width: "100%",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  textDecoration: "none",
                                  transition: "all .1s",
                                  "&:hover": exam.subject
                                    ?.microSyllabus
                                    ? {
                                        backgroundColor: "#e3e3e3",
                                      }
                                    : null,
                                }}
                                href={exam.subject?.microSyllabus}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {exam.subject?.shortName}
                              </Link>
                            </TableCell>
                          ) : (
                            <TableCell
                              sx={{
                                // display: "flex",
                                ...tCellStyles,
                                p: 0,
                                px: 0,
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  height: "100%",
                                }}
                              >
                                {exam.subject.map(
                                  (subject, index) => (
                                    <Link
                                      key={subject?.shortName}
                                      align="center"
                                      sx={{
                                        p: 1,
                                        color: "black",
                                        height: "100%",
                                        width: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        textDecoration: "none",
                                        borderLeft:
                                          index === 0
                                            ? "none"
                                            : "1px solid #d7d7d7",

                                        transition: "all .1s",
                                        "&:hover":
                                          subject.microSyllabus
                                            ? {
                                                backgroundColor:
                                                  "#e3e3e3",
                                              }
                                            : null,
                                      }}
                                      href={subject.microSyllabus}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      {subject.shortName}
                                    </Link>
                                    // <Box
                                    //   key={subject?.shortName}
                                    //   sx={{
                                    //     // ...tCellStyles,
                                    //     // border: "none",
                                    //     borderLeft:
                                    //       index === 0 ? "none" : "1px solid #d7d7d7",
                                    //     p: 1,
                                    //     backgroundColor: "#f6f6f6",
                                    //     flex: 1,
                                    //     display: "flex",
                                    //     alignItems: "center",
                                    //     justifyContent: "center",
                                    //     transition: "all .1s",
                                    //     cursor: subject?.microSyllabus ? "pointer" : null,
                                    //     "&:hover": {
                                    //       backgroundColor: subject?.microSyllabus
                                    //         ? "#e3e3e3"
                                    //         : null,
                                    //     },
                                    //     whiteSpace: "pre-wrap",
                                    //   }}
                                    //   role={subject?.microSyllabus ? "button" : null}
                                    //   onClick={() => {
                                    //     const clickOpens =
                                    //       localStorage.getItem("clickOpens") || "syllabus";
                                    //     if (clickOpens === "syllabus") {
                                    //       if (subject?.microSyllabus) {
                                    //         window.open(subject.microSyllabus, "_blank");
                                    //       } else {
                                    //         setContributeDialogOpen(true);
                                    //         setContributeDialogTitle(
                                    //           `${subject?.shortName} syllabus not found`
                                    //         );
                                    //       }
                                    //     }
                                    //     if (clickOpens === "notes") {
                                    //       if (subject?.notes) {
                                    //         window.open(subject.notes, "_blank");
                                    //       } else {
                                    //         setContributeDialogOpen(true);
                                    //         setContributeDialogTitle(
                                    //           `${subject?.shortName} notes not found`
                                    //         );
                                    //       }
                                    //     }
                                    //     if (clickOpens === "question") {
                                    //       if (subject?.questions) {
                                    //         window.open(subject.questions, "_blank");
                                    //       } else {
                                    //         setContributeDialogOpen(true);
                                    //         setContributeDialogTitle(
                                    //           `${subject?.shortName} question bank not found`
                                    //         );
                                    //       }
                                    //     }
                                    //     if (clickOpens === "meet") {
                                    //       if (section === "a" && subject?.meetCodeA) {
                                    //         window.open(
                                    //           `https://meet.google.com/${
                                    //             subject.meetCodeA
                                    //           }?authuser=${
                                    //             localStorage.getItem("authuser") || "0"
                                    //           }`,
                                    //           "_blank"
                                    //         );
                                    //       } else if (section === "b" && subject?.meetCodeB) {
                                    //         window.open(
                                    //           `https://meet.google.com/${
                                    //             subject.meetCodeB
                                    //           }?authuser=${
                                    //             localStorage.getItem("authuser") || "0"
                                    //           }`,
                                    //           "_blank"
                                    //         );
                                    //       } else {
                                    //         setContributeDialogOpen(true);
                                    //         setContributeDialogTitle(
                                    //           `${subject?.shortName} meet link not found`
                                    //         );
                                    //       }
                                    //     }
                                    //   }}
                                    // >
                                    //   {subject?.shortName}
                                    //   <br />
                                    //   {room}
                                    // </Box>
                                  )
                                )}
                              </Box>
                            </TableCell>
                          )}

                          {/* {questions &&
                          examType !== examTypesObj.prac ? (
                            <TableCell
                              sx={{
                                ...tCellStyles,
                                maxWidth: "200px",
                              }}
                              align="center"
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  flexWrap: "wrap",
                                  justifyContent: "space-evenly",
                                }}
                              >
                                {questions[
                                  exam.subject.shortName
                                ].map((question, index) => (
                                  <Button
                                    key={index}
                                    color="primary"
                                    size="small"
                                    href={question.link}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                  >
                                    {question.examType}{" "}
                                    {question.batch}
                                  </Button>
                                ))}
                              </Box>
                            </TableCell>
                          ) : null} */}
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
