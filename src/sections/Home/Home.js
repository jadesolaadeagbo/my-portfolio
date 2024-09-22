import React, { useContext, useEffect } from "react";
import { Typography, Button, makeStyles, useTheme } from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-scroll";
import HomeContainer from "../../containers/HomeContainer";
import VideoLogo from "../../components/VideoLogo";
import { useTranslation } from "react-i18next";
import loaderContext from "../../contexts/loaderContext";

const Home = () => {
    const classes = useStyles();
    const { isLoading } = useContext(loaderContext);
    const controls = useAnimation();
    const theme = useTheme();
    const { t } = useTranslation();

    useEffect(() => {
        if (!isLoading) {
            controls.start((i) => ({
                y: 0,
                opacity: 1,
                transition: { delay: i * 0.1 + 1.6 },
            }));
        } else {
            controls.start({ opacity: 0, y: 5 });
        }
    }, [isLoading, controls]);

    return (
        <HomeContainer id="home">
            <div>
                <Typography
                    component={motion.div}
                    animate={controls}
                    custom={0}
                    color="primary"
                    variant="h6"
                    style={{ marginTop: "20px" }}
                >
                    {t("home_welcome")}
                    <motion.div
                        style={{ display: "inline-block" }}
                        animate={{ rotate: [50, 90, 50] }}
                        transition={{ repeat: Infinity, duration: 1.4, repeatDelay: 0.7 }}
                    >
                        👋
                    </motion.div>
                </Typography> 

                     <Typography
                    component={motion.div}
                    animate={controls}
                    custom={0}
                    color="secondary"
                    variant="h3"
                    style={{ marginTop: "20px" , marginBottom:'10px', color:"#006241", fontWeight:"700" }}
                >
                    {t("home_i")} Jadesola Adeagbo
                    </Typography>

               <Typography
                    component={motion.p}
                    animate={controls}
                    custom={2}
                    variant="h6"
                >
                    {t("home_job")}
                </Typography>
                <motion.div animate={controls} custom={5}>
                    <Button
                        component={Link}
                        spy
                        smooth
                        offset={0}
                        duration={500}
                        to="contact"
                        variant="outlined"
                        color="primary"
                        size="large"
                        style={{marginTop:'20px'}}
                    >
                        {t("home_contact_btn")}
                    </Button>
                </motion.div>
            </div>
        </HomeContainer>
    );
};

const useStyles = makeStyles((theme) => ({
    subTitle: {
        marginBottom: "16px",
        fontSize: "75px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "45px",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "35px",
        },
    },
}));

export default Home;
