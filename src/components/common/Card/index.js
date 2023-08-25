import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined';
import IconButton from "@mui/material/IconButton";
import ProductImage from "../../../images/product-1.png";
import "./card.css";

const ActionAreaCard = ({ cardDataDetails }) => {
  return (
    <>
      {cardDataDetails?.map((detail, index) => (
        <Grid item xs={12} sm={6} md={2}>
          <Card key={index} className="cardDataDetails">
            <CardActionArea>
              <CardMedia
                component="img"
                image={ProductImage}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {detail.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {detail.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing className="card-action">
                <Typography variant="body2" color="text.secondary">
                  $ 17.99
                </Typography>
                <div className="action-button-hover">
                  <IconButton aria-label="add to favorites">
                    <FavoriteBorderOutlinedIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <SwapHorizOutlinedIcon />
                  </IconButton>
                </div>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </>
  );
};
export default ActionAreaCard;
