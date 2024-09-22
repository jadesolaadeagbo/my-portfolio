import React, { useState } from "react";
import { makeStyles, Menu, MenuItem, Button } from "@material-ui/core";
import { KeyboardArrowDownSharp } from "@material-ui/icons";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import "flag-icon-css/css/flag-icon.min.css";

const languages = [
    {
        code: "en",
        name: "EN",
        country_code: "gb",
    },
    {
        code: "fr",
        name: "FR",
        country_code: "fr",
    },

];

const LangSelector = (props) => {
    const classes = useStyles();
    const { t } = useTranslation();
    const [anchorEl, setAnchorEl] = useState(null);
    
    // Get the current active language
    const currentLanguageCode = i18n.language;
    const currentLanguage = languages.find((elem) => elem.code === currentLanguageCode);

    const handleClose = (code) => {
        i18n.changeLanguage(code);
        setAnchorEl(null);
        if (props.onClose) {
            props.onClose();
        }
    };

    return (
        <div {...props}>
            <Button variant="contained" color="primary" onClick={(e) => setAnchorEl(e.currentTarget)}>
                {currentLanguage && (
                    <>
                        <span className={`flag-icon flag-icon-${currentLanguage.country_code} ${classes.flagIcon}`} />
                        {currentLanguage.name}
                    </>
                )}
                <KeyboardArrowDownSharp  />
            </Button>
            <Menu
                id="profile-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                keepMounted
                elevation={0}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                className={classes.profileMenu}
                disableScrollLock
            >
                {languages.map((lang) => (
                    <MenuItem
                        key={lang.code}
                        className={classes.menuItem}
                        onClick={() => handleClose(lang.code)}
                        selected={lang.code === currentLanguageCode}  // Add selected prop based on current language
                    >
                        <span className={`flag-icon flag-icon-${lang.country_code} ${classes.flagIcon}`} />
                        {lang.name}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    profileMenu: {
        "& .MuiPaper-root": {
            backgroundColor: theme.palette.primary.main,
            marginTop: "2px",
            boxShadow: theme.shadows[4],
        },
    },
    menuItem: {
        color: "black",
        fontWeight: "400",
        "&:hover": {
            backgroundColor: theme.backgroundSecondary,
        },
        "&.Mui-selected": {
            backgroundColor: theme.backgroundSecondary,
            fontWeight: "700",
        },
    },
    flagIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default LangSelector;
