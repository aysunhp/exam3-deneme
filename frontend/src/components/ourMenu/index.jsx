import React from "react";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import WineBarIcon from "@mui/icons-material/WineBar";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./ourMenu.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
const OurMenu = () => {
  return (
    <>
      <div className="ourMenu-sect">
        <div className="container">
          <div className="our-menu-heading">
            <span>OUR MENU</span>
            <h1>Discover Our Exclusive Menu</h1>
          </div>
          <div className="choose-menu-type">
            <div className="menu-type-item">
              <RamenDiningIcon /> Main
            </div>
            <div className="menu-type-item">
              <RestaurantIcon /> Desert
            </div>
            <div className="menu-type-item">
              <WineBarIcon /> Drinks
            </div>
          </div>
          <div className="menu">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  xl={6}
                  lg={6}
                  style={{ padding: "0px" }}
                >
                  <Card sx={{ display: "flex" }} style={{ width: "100%", margin:"0px"}} >
                    <Box sx={{ display: "flex" }}  style={{ width: "100%", margin:"0px"}} >
                      <CardMedia
                        component="img"
                        sx={{ width: 100 }}
                        image="https://media.npr.org/assets/img/2019/09/04/gettyimages-1080442180_sq-0b05660eee29228e910ea8d982ca843aafecfe9b-s1100-c50.jpg"
                        alt="Live from space album cover"
                        style={{
                          borderRadius: "50%",
                          height: "100px",
                          marginTop: "5px",
                          padding: "10px",
                        }}
                      />
                   <Box sx={{ display: "flex", flexDirection: "column" }}>
                   <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography component="div" variant="h5">
                          Live From Space
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          Mac Miller
                        </Typography>
                      </CardContent>
                   </Box>
                    <Box sx={{ display: "flex",justifyContent:"center", alignItems:"center", flexDirection: "column" }}>  <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography component="div" variant="h5">
                          $5
                        </Typography>
                     
                        <Grid container spacing={2}>
                          <Grid item xs={6}>
                            <FavoriteBorderIcon />
                          </Grid>
                          <Grid item xs={6}>
                            <ShoppingBasketIcon />
                          </Grid>
                        </Grid>
                 
                      </CardContent>

                    </Box>
                    
                    </Box>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={12} xl={6} lg={6}>
                  sa
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMenu;
