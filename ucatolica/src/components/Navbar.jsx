import React from "react";
import {AppBar, Button, IconButton, makeStyles, Typography} from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';
import {Avatar} from "@material-ui/core";

const useStyle = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2),
    }, title: {
        flexGrow: 1
    },
}))

const Navbar = () => {
    const classes = useStyle()
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <IconButton color={"inherit"}
                                aria-label={"menu"}
                                className={classes.menuButton}>
                        <Avatar alt="Remy Sharp" src='temperatura.png'/>

                    </IconButton>
                    <Typography variant='h6' className={classes.title}>
                        Monitor de temperatura
                    </Typography>
                    <Button variant={"text"} color={"inherit"}>
                        Buscar

                    </Button>


                </Toolbar>
            </AppBar>
            <div className={classes.offset}>
            </div>
        </div>
    )
}

export default Navbar