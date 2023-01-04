import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Fragment, useEffect, useState } from "react";
import constants from "../utils/frontPageGenerator/constants";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Skeleton from "@mui/material/Skeleton";
import { Button } from "@mui/material";

export default function ExamRoutine() {
  const [loading, setLoading] = useState(true);
  const { examRoutine } = constants;
  const [todayDate, setTodayDate] = useState("");
  const [tomorrowDate, setTomorrowDate] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10);
    setTodayDate(new Date());
    setTomorrowDate(new Date(new Date().getTime() + 24 * 60 * 60 * 1000));
    const dateCheck = setInterval(() => {
      setTodayDate(new Date());
      setTomorrowDate(new Date(new Date().getTime() + 24 * 60 * 60 * 1000));
    }, 60000);
    return () => clearInterval(dateCheck);
  }, []);

  const tCellStyles = {
    px: 1,
    border: "1px solid #d7d7d7",
  };

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
            Exam Routine
          </Typography>
          <Typography variant="body2" gutterBottom color="text.secondary">
            Room: Section A: 203, Section B: 204
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
              <TableContainer
                sx={{
                  maxWidth: "24rem",
                  mx: "auto",
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
                      <TableCell sx={tCellStyles} align="center">
                        Day
                      </TableCell>
                      <TableCell sx={tCellStyles} align="center">
                        Subject
                      </TableCell>
                      <TableCell sx={tCellStyles} align="center">
                        Old Qs
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {examRoutine.map((row) => (
                      <Fragment key={row.day}>
                        <TableRow
                          sx={{
                            "&:nth-of-type(even)": {
                              backgroundColor: "#f5f5f5",
                            },
                          }}
                        >
                          <TableCell sx={tCellStyles} align="center">
                            {row.date.toDateString() ===
                            todayDate.toDateString() ? (
                              <Typography
                                sx={{
                                  fontWeight: "bold",
                                }}
                              >
                                Today
                              </Typography>
                            ) : row.date.toDateString() ===
                              tomorrowDate.toDateString() ? (
                              <Typography
                                sx={{
                                  fontWeight: "bold",
                                }}
                              >
                                Tom.
                              </Typography>
                            ) : null}
                            {row.day}
                          </TableCell>
                          <TableCell sx={tCellStyles} align="center">
                            {row.subject}
                          </TableCell>
                          <TableCell sx={tCellStyles} align="center">
                            <Button
                              color="primary"
                              size="small"
                              href={row.oldQ}
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              Batch 2020
                            </Button>
                          </TableCell>
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
