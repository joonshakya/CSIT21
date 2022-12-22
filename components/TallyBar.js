import {
  TextField,
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Table,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import {
  useState,
  useRef,
  useEffect,
  useCallback,
  Fragment,
  forwardRef,
} from "react";
const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const TallyBar = () => {
  const [frequency, setFrequency] = useState("");
  const [pasted, setPasted] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const frequencies = frequency.split("\n").map((freq) => parseInt(freq));
  const tBodyRef = useRef(null);

  function listener(e) {
    e.clipboardData.setData("text/html", tBodyRef.current.innerHTML);
    e.clipboardData.setData("text/text", tBodyRef.current.innerText);
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

  const closeAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlertOpen(false);
  };

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
        mt: { xs: 2, sm: 0 },
        borderRadius: ".6rem",
        "&:hover": {
          boxShadow:
            "0 20px 20px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        },
      }}
      elevation={3}
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
            id="outlined-textarea"
            label="Input Frequency (Eg: 20)"
            multiline
            sx={{
              mt: 1,
              width: frequency ? "35%" : "100%",
              transition: "all 0.2s",
              backgroundColor: "white",
              zIndex: 1,
            }}
            value={frequency}
            onPaste={() => {
              setPasted(true);
            }}
            onFocus={(e) => {
              e.target.select();
            }}
            onChange={(e) => setFrequency(e.target.value)}
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
        <Button
          size="small"
          onClick={() => {
            copyToClipboard();
          }}
        >
          Copy to Clipboard
        </Button>
      </CardActions>
      <Snackbar open={alertOpen} autoHideDuration={3000} onClose={closeAlert}>
        <Alert onClose={closeAlert} severity="success" sx={{ width: "100%" }}>
          Tally Bars Copied to Clipboard
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default TallyBar;
