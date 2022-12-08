import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CircularProgress, LinearProgress } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

export default function ClassRoutineLoading() {
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
                    {Array(4)
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
        </CardContent>
      </Box>
    </Card>
  );
}
