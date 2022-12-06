import {
  Autocomplete,
  TextField,
  Box,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { useState } from "react";
import constants from "../utils/frontPageGenerator/constants";
const OpCodeFinder = () => {
  const [instruction, setInstruction] = useState("MVI A, Data");
  const [opCode, setOpCode] = useState("3E");
  const { opCodes } = constants;
  return (
    <Card
      sx={{
        mt: { xs: 0, md: 2 },
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
              mt: 3,
            }}
            openOnFocus
            disableClearable
            onChange={(event, value) => {
              setInstruction(value.label);
              setOpCode(value.opCode);
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
                <TextField {...params} name="instruction" label="Instruction" />
                <Box sx={{ pl: 2, fontSize: "1.4rem" }}>{opCode}</Box>
              </Box>
            )}
            isOptionEqualToValue={(option, value) =>
              option.label === value.label
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
