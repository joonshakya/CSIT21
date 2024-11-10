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
import { Button, Link } from "@mui/material";
import Countdown from "./Countdown";
import { examRoutine, questionPapers } from "../utils/constants";
import { examTypes as examTypesObj } from "../utils/constants";

export default function ExamRoutine({
  examType,
  sem,
  subtitle,
  title,
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
    new Date(routine[routine.length - 1].date + " GMT+5:45") <
    new Date().getTime() - 24 * 60 * 60 * 1000
  )
    return null;

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
                      {questions && examType !== examTypesObj.prac ? (
                        <TableCell sx={tCellStyles} align="center">
                          Old Qs
                        </TableCell>
                      ) : null}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {routine.map((exam) => (
                      <Fragment key={exam.subject.shortName}>
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
                                sx={{
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
                                "&:hover": exam.subject?.microSyllabus
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
                          {questions &&
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
