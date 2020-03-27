import React from "react";
import Paper from "@material-ui/core/Paper";
import { Grid, Button } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "200%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
});
function Paisglobal({ paisData }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Casos</TableCell>
            <TableCell align="left">Muertos </TableCell>
            <TableCell align="left">Curados</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="left">
              <Grid>{paisData.cases}</Grid>
            </TableCell>
            <TableCell align="left">
              <Grid>{paisData.deaths}</Grid>
            </TableCell>
            <TableCell align="left">
              <Grid>{paisData.recovered}</Grid>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <a href="/countries">Ver Países</a>
    </Paper>
  );
}

export default Paisglobal;
