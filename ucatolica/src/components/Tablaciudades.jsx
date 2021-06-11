import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(Ciudad, Temperatura, Humedad) {
    return { Ciudad, Temperatura, Humedad };
}

const rows = [
    createData('Ciudad', 159, 6.0),
    createData('Ciudad', 237, 9.0),
    createData('Ciudad', 262, 16.0),
    createData('Ciudad', 305, 3.7),
];

const useStyles = makeStyles({
    table: {
        minWidth: 200,
        maxWidth: 300,
    },
});

export default function CustomizedTables() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Ciudades</StyledTableCell>
                        <StyledTableCell align="right">Temperatura</StyledTableCell>
                        <StyledTableCell align="right">Humedad</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.Ciudad}>
                            <StyledTableCell component="th" scope="row">
                                {row.Ciudad}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.Temperatura}</StyledTableCell>
                            <StyledTableCell align="right">{row.Humedad}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
