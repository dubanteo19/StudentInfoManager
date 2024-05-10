import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box index>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">Staff</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
