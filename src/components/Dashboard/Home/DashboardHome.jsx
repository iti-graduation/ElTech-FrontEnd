import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}></Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={8}></Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </Box>
  );
}
