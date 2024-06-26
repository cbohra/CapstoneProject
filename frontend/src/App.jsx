// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import {
//   Box,
//   CssBaseline,
//   Drawer,
//   AppBar,
//   Toolbar,
//   Typography,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";
// import HomeIcon from "@mui/icons-material/Home";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import Home from "./pages/Home";
// import WishList from "./pages/WishList";
// import Cart from "./pages/Cart";

// const drawerWidth = 240;

// function App() {
//   return (
//     <Router>
//       <Box sx={{ display: "flex" }}>
//         <CssBaseline />
//         <AppBar
//           position="fixed"
//           sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
//         >
//           <Toolbar>
//             <Typography variant="h6" noWrap component="div">
//               My Application
//             </Typography>
//           </Toolbar>
//         </AppBar>
//         <Drawer
//           variant="permanent"
//           sx={{
//             width: drawerWidth,
//             flexShrink: 0,
//             [`& .MuiDrawer-paper`]: {
//               width: drawerWidth,
//               boxSizing: "border-box",
//             },
//           }}
//         >
//           <Toolbar />
//           <Box sx={{ overflow: "auto" }}>
//             <List>
//               <ListItem button component={Link} to="/">
//                 <ListItemIcon>
//                   <HomeIcon></HomeIcon>
//                 </ListItemIcon>
//                 <ListItemText primary="Home" />
//               </ListItem>
//               <ListItem button component={Link} to="/wishlist">
//                 <ListItemIcon>
//                   <FavoriteIcon></FavoriteIcon>
//                 </ListItemIcon>
//                 <ListItemText primary="WishList" />
//               </ListItem>
//               <ListItem button component={Link} to="/cart">
//                 <ListItemIcon>
//                   <ShoppingCartIcon></ShoppingCartIcon>
//                 </ListItemIcon>
//                 <ListItemText primary="Cart" />
//               </ListItem>
//             </List>
//           </Box>
//         </Drawer>
//         <Box
//           component="main"
//           sx={{
//             flexGrow: 1,
//             bgcolor: "background.default",
//             p: 3,
//             ml: `${drawerWidth}px`,
//           }}
//         >
//           <Toolbar />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/wishlist" element={<WishList />} />
//             <Route path="/cart" element={<Cart />} />
//           </Routes>
//         </Box>
//       </Box>
//     </Router>
//   );
// }

// export default App;

// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  Box,
  CssBaseline,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Home from "./pages/Home";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";

const drawerWidth = 240;

function App() {
  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              My Application
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              <ListItem button component={Link} to="/">
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component={Link} to="/wishlist">
                <ListItemIcon>
                  <FavoriteIcon />
                </ListItemIcon>
                <ListItemText primary="WishList" />
              </ListItem>
              <ListItem button component={Link} to="/cart">
                <ListItemIcon>
                  <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Cart" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "background.default",
            p: 3,
            ml: `${drawerWidth}px`,
          }}
        >
          <Toolbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
