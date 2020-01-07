import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {TableFooter} from '@material-ui/core';

const rows = [
  {name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0},
  {name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3},
  {name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0},
  {name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3},
  {name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9},
];

export default function MyTable() {
  return <div>
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Footer Cell</TableCell>
            <TableCell align="right">Footer Cell</TableCell>
            <TableCell align="right">Footer Cell</TableCell>
            <TableCell align="right">Footer Cell</TableCell>
            <TableCell align="right">Footer Cell</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  </div>
}
