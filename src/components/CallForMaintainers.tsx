import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const maintainerFormUrl = "https://forms.gle/biJm3zHJW427jBB86";

export default function CallForMaintainers() {
  return (
    <Card
      sx={{
        mb: 2,
        borderRadius: ".6rem",
        "&:hover": {
          boxShadow:
            "0 20px 20px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        },
      }}
      elevation={3}
    >
      <CardContent sx={{ pb: 0 }}>
        <Typography gutterBottom variant="h5" component="div">
          Call for Maintainers
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Want to contribute to CSIT21? Fill out this short Google Form to
          express your interest in becoming a maintainer.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          href={maintainerFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          size="small"
        >
          Fill Out the Form
        </Button>
      </CardActions>
    </Card>
  );
}
