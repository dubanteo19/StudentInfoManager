import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">Nhân viên quản lý</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
