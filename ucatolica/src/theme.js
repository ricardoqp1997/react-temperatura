import {createMuiTheme} from "@material-ui/core/styles";
import {blue, indigo, purple} from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette : {
        primary: {
            main: indigo[500]
        },
        secondary:{
            main: purple[500]
        },
        paper:{
            main: blue[500]
        },
    }
})

export default theme;