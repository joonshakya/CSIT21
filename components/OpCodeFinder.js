import {
  Autocomplete,
  TextField,
  Box,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { useEffect } from "react";
import { useRef } from "react";
import { opCodes } from "../utils/constants";
import { useOpCodeStore } from "../src/store";

const OpCodeFinder = ({ operate }) => {
  const {
    instruction,
    setInstruction,
    opCode,
    setOpCode,
    opCodeContainerWidth,
    setOpCodeContainerWidth,
  } = useOpCodeStore();
  const opCodeValueRef = useRef(null);

  useEffect(() => {
    if (opCodeValueRef.current && operate) {
      setOpCodeContainerWidth(opCodeValueRef.current.offsetWidth);
    }
  }, [opCode, operate, setOpCodeContainerWidth]);

  return (
    <Card
      sx={{
        mt: { xs: 0, sm: 2 },
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
        <CardContent
          sx={{
            flex: 1,
            pb: "0 !important",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Op. Code Finder
          </Typography>
          <Autocomplete
            sx={{
              my: 2,
            }}
            openOnFocus
            onChange={(event, value) => {
              setInstruction(value?.label || "");
              if (value) {
                setOpCode(value.opCode);
              }
            }}
            value={opCodes.find((entry) => entry.label === instruction)}
            autoHighlight
            options={opCodes}
            renderInput={(params) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TextField
                  sx={{
                    zIndex: 2,
                    backgroundColor: "white",
                  }}
                  {...params}
                  name="instruction"
                  label="Instruction"
                />
                <Box
                  sx={{
                    width: instruction ? opCodeContainerWidth || 0 : 0,
                    position: "relative",
                    ml: instruction && opCodeContainerWidth ? 2 : 0,
                    transition: "all 0.2s ease-in",
                  }}
                >
                  <Box
                    ref={opCodeValueRef}
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      transform: "translateY(-50%)",
                      height: "fit-content",
                      fontSize: "1.4rem",
                      // color: !instruction && "transparent",
                      transition: "all 0.1s ease-in",
                    }}
                  >
                    {opCode}
                  </Box>
                </Box>
              </Box>
            )}
            isOptionEqualToValue={(option, value) =>
              option.label === value?.label
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
                <Typography>{option.opCode}</Typography>
              </Box>
            )}
          />
        </CardContent>
      </Box>
    </Card>
  );
};

export default OpCodeFinder;
