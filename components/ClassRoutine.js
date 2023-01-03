import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Fragment, useEffect, useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import constants from "../utils/frontPageGenerator/constants";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Skeleton from "@mui/material/Skeleton";
import { useBaseStore } from "../src/store";

export default function ClassRoutine() {
  const roll = useBaseStore((state) => state.roll);
  const fullRoutine = useBaseStore((state) => state.fullRoutine);
  const setFullRoutine = useBaseStore((state) => state.setFullRoutine);
  const onlySection = useBaseStore((state) => state.onlySection);
  const setOnlySection = useBaseStore((state) => state.setOnlySection);

  const [loading, setLoading] = useState(true);
  const { classRoutine } = constants;
  const [todayDayName, setTodayDayName] = useState("");
  const [tomorrowDayName, setTomorrowDayName] = useState("");

  const [section, setSection] = useState(roll !== "0" && roll < 25 ? "A" : "B");

  useEffect(() => {
    setSection(roll !== "0" ? (roll < 25 ? "A" : "B") : false);
  }, [roll]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10);
    setTodayDayName(
      new Date().toLocaleString("en-US", {
        weekday: "short",
      })
    );
    setTomorrowDayName(
      new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toLocaleString(
        "en-US",
        { weekday: "short" }
      )
    );
    const dateCheck = setInterval(() => {
      setTodayDayName(
        new Date().toLocaleString("en-US", {
          weekday: "short",
        })
      );
      setTomorrowDayName(
        new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toLocaleString(
          "en-US",
          { weekday: "short" }
        )
      );
    }, 60000);
    return () => clearInterval(dateCheck);
  }, []);

  const tCellStyles = {
    px: 1,
    border: "1px solid #d7d7d7",
  };

  const showRoom = true;

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
            Class Routine (Beta)
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
                  mb: 1,
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
                  label={`Show only today, tom.`}
                />
              </FormGroup>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow
                      sx={{
                        "&:nth-of-type(odd)": {
                          backgroundColor: "#f5f5f5",
                        },
                      }}
                    >
                      {["Day", "", "1st", "2nd", "3rd", "4th"].map((item) =>
                        onlySection && item === "" ? null : (
                          <TableCell sx={tCellStyles} key={item} align="center">
                            {item}
                          </TableCell>
                        )
                      )}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(!fullRoutine
                      ? [
                          ...classRoutine.filter(
                            (row) =>
                              row.day === todayDayName ||
                              row.day === tomorrowDayName
                          ),
                          ...(todayDayName == "Fri" || todayDayName == "Sat"
                            ? [classRoutine[0]]
                            : []),
                        ]
                      : classRoutine
                    ).map((row) => (
                      <Fragment key={row.day}>
                        <TableRow
                          sx={{
                            "&:nth-of-type(odd)": {
                              backgroundColor: "#f5f5f5",
                            },
                          }}
                        >
                          <TableCell
                            sx={tCellStyles}
                            rowSpan={2}
                            align="center"
                          >
                            {todayDayName === row.day ? (
                              <Typography
                                sx={{
                                  fontWeight: "bold",
                                }}
                              >
                                Today
                              </Typography>
                            ) : tomorrowDayName === row.day ? (
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
                          {!onlySection || (onlySection && section !== "B") ? (
                            <>
                              {!onlySection ? (
                                <TableCell sx={tCellStyles} align="center">
                                  A
                                </TableCell>
                              ) : null}
                              {row.a.map(([period, room], index) => (
                                <TableCell
                                  sx={tCellStyles}
                                  align="center"
                                  key={index}
                                >
                                  {period.split(" (Lab)")[0]}
                                  <br />
                                  {showRoom ? room : null}
                                </TableCell>
                              ))}
                            </>
                          ) : null}
                        </TableRow>
                        <TableRow
                          sx={{
                            "&:nth-of-type(odd)": {
                              backgroundColor: "#f5f5f5",
                            },
                          }}
                        >
                          {!onlySection || (onlySection && section !== "A") ? (
                            <>
                              {!onlySection ? (
                                <TableCell sx={tCellStyles} align="center">
                                  B
                                </TableCell>
                              ) : null}
                              {row.b.map(([period, room], index) => (
                                <TableCell
                                  sx={tCellStyles}
                                  align="center"
                                  key={index}
                                >
                                  {period.split(" (Lab)")[0]}
                                  <br />
                                  {showRoom ? room : null}
                                </TableCell>
                              ))}
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
