import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
});

function createData(name, detail) {
  return { name, detail };
}

const rows = [
  createData('Address', "6 Serena Way, Iluka, WA 6028, Australia"),
  createData('E-mail', <a href="mailto:adrian@polywhiz.com" textDecoration="none">adrian@polywhiz.com</a>),
  createData('Website', <a textDecoration="none" href="http://www.thefullstackers.com" target="_blank">www.thefullstackers.com</a>),
  createData('Mobile', <a class="white-text" href="tel:+61424064104">0424 064 104</a>),
  createData('GitHub Profile', <a class="white-text" href="https://github.com/AdrianMEvans" target="blank">github.com/AdrianMEvans</a>),
  createData('LinkedIn', <a class="white-text" href="https://www.linkedin.com/company/71619875/admin/" target="blank">LinkedIn - The FullStackers</a>),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Contact</TableCell>
            <TableCell align="left">Detail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.detail}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
