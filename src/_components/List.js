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
function List({ paisData }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Nombre Pais</TableCell>
            <TableCell align="left">Cantidad de casos</TableCell>
            <TableCell align="left">casos de hoy</TableCell>
            <TableCell align="left">Cantidad de Muertes</TableCell>
            <TableCell align="left">Muertes de hoy </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paisData.map((paisData, index) => (
            <TableRow key={index}>
              <TableCell align="left">
                <Grid>{paisData.country}</Grid>
              </TableCell>
              <TableCell align="left">
                <Grid>{paisData.cases}</Grid>
              </TableCell>
              <TableCell align="left">
                <Grid>{paisData.todayCases}</Grid>
              </TableCell>
              <TableCell align="left">
                <Grid>{paisData.deaths}</Grid>
              </TableCell>
              <TableCell align="left">
                <Grid>{paisData.todayDeaths}</Grid>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default List;
