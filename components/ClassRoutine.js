import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Fragment, useEffect, useState, useContext } from "react";
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
import { AppContext } from "../context/appContext";

export default function ClassRoutine() {
  const { routine } = constants;
  const todayDayName = new Date().toLocaleString("en-US", {
    weekday: "short",
  });
  const tomorrowDayName = new Date(
    new Date().getTime() + 24 * 60 * 60 * 1000
  ).toLocaleString("en-US", { weekday: "short" });
  const [fullRoutine, setFullRoutine] = useState(
    JSON.parse(localStorage.getItem("fullRoutine")) || false
  );
  const { roll } = useContext(AppContext);
  const [onlySection, setOnlySection] = useState(
    JSON.parse(localStorage.getItem("onlySection")) || false
  );

  const [section, setSection] = useState(roll !== "0" && roll < 25 ? "A" : "B");
  useEffect(() => {
    setSection(roll !== "0" ? (roll < 25 ? "A" : "B") : false);
  }, [roll]);
  useEffect(() => {
    localStorage.setItem("fullRoutine", fullRoutine);
  }, [fullRoutine]);
  useEffect(() => {
    localStorage.setItem("onlySection", onlySection);
  }, [onlySection]);
  const tCellStyles = {
    px: 0.5,
    border: "1px solid rgba(0, 0, 0, 0.12)",
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
            Class Routine
          </Typography>
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
                    checked={onlySection}
                    onChange={(e) => {
                      setOnlySection(e.target.checked);
                    }}
                    sx={{
                      color: "#3f51b5",
                      "&.Mui-checked": {
                        color: "#3f51b5",
                      },
                      height: "1.75rem",
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
                <TableRow>
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
                      ...routine.filter(
                        (row) =>
                          row.day === todayDayName ||
                          row.day === tomorrowDayName
                      ),
                      ...(todayDayName == "Fri" || todayDayName == "Sat"
                        ? [routine[0]]
                        : []),
                    ]
                  : routine
                ).map((row) => (
                  <Fragment key={row.day}>
                    <TableRow>
                      <TableCell sx={tCellStyles} rowSpan={2} align="center">
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
                          {row.a.map((period, index) => (
                            <TableCell
                              sx={tCellStyles}
                              align="center"
                              key={index}
                            >
                              {period}
                            </TableCell>
                          ))}
                        </>
                      ) : null}
                    </TableRow>
                    <TableRow>
                      {!onlySection || (onlySection && section !== "A") ? (
                        <>
                          {!onlySection ? (
                            <TableCell sx={tCellStyles} align="center">
                              B
                            </TableCell>
                          ) : null}
                          {row.b.map((period, index) => (
                            <TableCell
                              sx={tCellStyles}
                              align="center"
                              key={index}
                            >
                              {period}
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
        </CardContent>
      </Box>
    </Card>
  );
}
