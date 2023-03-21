import React from "react";
import { makeStyles } from "@material-ui/core";
import AvatarImg from "../../assets/images/jade.JPG";

const Avatar = () => {
  const classes = useStyles();
  return (
      <img src={AvatarImg} alt="Jadesola Adeagbo" className={classes.avatarImg} />
  );
};  

const useStyles = makeStyles((theme) => ({
  avatarImg: {
    borderRadius:'50%',
    width:"270px",
    height:"270px",
    objectFit:'cover',
    objectPosition: "0 -20px",
    boxShadow:theme.shadows[10]
  },
}));

export default Avatar;
