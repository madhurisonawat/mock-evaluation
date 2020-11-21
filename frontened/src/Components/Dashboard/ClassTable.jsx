import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
    table: {
        width: "100%",
    },
});

export default function ClassTable(props) {
    console.log(props)
    const classes = useStyles();

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">#</TableCell>
                            <TableCell align="center">Section</TableCell>
                            <TableCell align="left">Subject</TableCell>
                            <TableCell align="left">Grade</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.data.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell align="left">{index + 1}</TableCell>
                                <TableCell align="center">{item.section}</TableCell>
                                <TableCell align="left">{item.subject}</TableCell>
                                <TableCell align="left">{item.grade}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}