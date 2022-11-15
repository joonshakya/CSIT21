import { Card, Container, Box, Typography } from "@mui/material";
export default function Soon() {
  return (
    <Container>
      <Card sx={{ display: "flex", margin: "1rem auto", maxWidth: 480 }}>
        <Box
          sx={{
            flex: 1,
            height: "50vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" component="h2">
            Coming Soon
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This feature is coming soon.
          </Typography>
        </Box>
      </Card>
    </Container>
  );
}
