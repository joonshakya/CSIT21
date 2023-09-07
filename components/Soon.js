import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Soon() {
  return (
    <Card
      sx={{
        mt: 2,
        maxWidth: "100%",
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
          pb: 0,
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          Rest Coming Soon
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{}}>
          CSIT21 is going through some changes under the hood so all the feaures
          and contents aren&apos;t available yet. If you want to view the
          previous version of CSIT21, click the button below.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          href="https://legacy.csit21.cf/"
          target="_blank"
          rel="noopener noreferrer"
          size="small"
        >
          Go To Previous Version
        </Button>
      </CardActions>
    </Card>
  );
}
