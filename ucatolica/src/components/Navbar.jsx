import React from "react";
import {AppBar, Button, IconButton, makeStyles, Typography} from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';
import {Avatar} from "@material-ui/core";
import { fade } from "@material-ui/core/styles";

const useStyle = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2),
    }, title: {
        flexGrow: 1
    }, grow: {
        flexGrow: 1
      },
      menuButton: {
        marginRight: theme.spacing(2)
      },
      title: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
          display: "block"
        }
      },
      search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
          backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
          marginLeft: theme.spacing(1),
          width: "580px",
          marginLeft: "30%"
        }
      },
      searchIcon: {
        padding: theme.spacing(0, 1),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      inputRoot: {
        color: "inherit"
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
          width: "500px"
        }
      }
}))

const Navbar = () => {
    const classes = useStyle()
    return (
        <div className={classes.grow}>
          <AppBar position="static">
            <Toolbar>
            <IconButton color={"inherit"}
                          aria-label={"menu"}
                          className={classes.menuButton}>
                  <Avatar alt="Remy Sharp" src='temperatura.png'/>
              </IconButton>
              <Typography variant='h6' className={classes.title}>
                  Monitor de temperatura
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      );
    }

export default Navbar