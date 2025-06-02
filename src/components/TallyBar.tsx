import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

import {
  useState,
  useRef,
  useEffect,
  useCallback,
  Fragment,
  forwardRef,
  ForwardedRef,
} from "react";

const Alert = forwardRef(function Alert(
  props: AlertProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  );
});

const TallyBar = () => {
  const [frequency, setFrequency] = useState("");
  const [pasted, setPasted] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const frequencies = frequency
    .split("\n")
    .map((freq) => parseInt(freq));
  const tBodyRef = useRef(null);

  function listener(e) {
    e.clipboardData.setData("text/html", tBodyRef.current.innerHTML);
    e.clipboardData.setData("text/plain", tBodyRef.current.innerText);
    e.preventDefault();
  }

  const copyToClipboard = useCallback(() => {
    if (tBodyRef.current.innerText) {
      document.addEventListener("copy", listener);
      document.execCommand("copy");
      document.removeEventListener("copy", listener);
      setAlertOpen(true);
    }
  }, []);

  useEffect(() => {
    if (pasted && tBodyRef.current) {
      setTimeout(() => {
        copyToClipboard();
        setPasted(false);
      }, 0);
    }
  }, [pasted, tBodyRef, frequency, copyToClipboard]);

  return (
    <Card
      sx={{
        mt: 2,
        borderRadius: ".6rem",
        "&:hover": {
          boxShadow:
            "0 20px 20px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        },
      }}
      elevation={3}
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();
          copyToClipboard();
        }}
      >
        <CardContent
          sx={{
            flex: 1,
            pb: "0 !important",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Tally Bar Generator
          </Typography>
          <Box
            sx={{
              position: "relative",
            }}
          >
            <TextField
              label="Input Frequency (Eg: 20)"
              multiline
              sx={{
                mt: 1,
                width: frequency ? "35%" : "100%",
                transition: "all 0.2s",
                backgroundColor: "white",
                zIndex: 1,
              }}
              required
              value={frequency}
              onPaste={() => {
                setPasted(true);
              }}
              // onFocus={(e) => {
              //   e.target.select();
              // }}
              onChange={(e) => {
                e.target.value = e.target.value
                  .replace(/[^0-9\n]/g, "")
                  .replace("\n\n", "\n")
                  .split("\n")
                  .map((line) => {
                    if (line.length > 3) {
                      return line.slice(0, 3);
                    }
                    return line;
                  })
                  .join("\n");
                setFrequency(e.target.value);
              }}
            />
            <Table
              size="small"
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                left: "35%",
              }}
            >
              <TableBody ref={tBodyRef}>
                <TableRow>
                  <TableCell
                    sx={{
                      pt: 3,
                      fontSize: "1rem",
                      border: "none",
                      userSelect: "all",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                    }}
                  >
                    {frequencies.map((freq, index) =>
                      freq ? (
                        <Fragment key={index}>
                          {Array(Math.floor(freq / 5) || 0)
                            .fill(
                              <>
                                <s>{"////"}</s>{" "}
                              </>
                            )
                            .map((item, index) => (
                              <Fragment key={index}>{item}</Fragment>
                            ))}
                          {new Array(freq % 5 || 0).fill("/")}
                          <br />
                        </Fragment>
                      ) : null
                    )}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </CardContent>

        <CardActions
          sx={{
            flexWrap: "wrap",
          }}
        >
          <Button type="submit" size="small">
            Copy to Clipboard
          </Button>
        </CardActions>
      </form>
      <Snackbar
        open={alertOpen}
        autoHideDuration={3000}
        onClose={(event, reason) => {
          if (reason === "clickaway") {
            return;
          }
          setAlertOpen(false);
        }}
      >
        <Alert
          onClose={() => {
            setAlertOpen(false);
          }}
          severity="success"
          sx={{
            width: "100%",
            m: "env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)",
          }}
        >
          Tally Bars Copied to Clipboard
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default TallyBar;
