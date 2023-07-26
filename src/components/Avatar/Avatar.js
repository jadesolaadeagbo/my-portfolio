import React from "react";
import { makeStyles } from "@material-ui/core";
import AvatarImg from "../../assets/images/developer.png"; 

const Avatar = () => {
  const classes = useStyles();
  return (
      <img src={AvatarImg} alt="Jadesola Adeagbo" className={classes.avatarImg} />
  );
};  

const useStyles = makeStyles((theme) => ({
  avatarImg: {
    // borderRadius:'50%',
    width:"400px",
    // height:"270px",
    objectFit:'cover',
  },
}));

export default Avatar;
