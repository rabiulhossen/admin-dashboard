import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Table.css'

const useStyles = makeStyles({
  table: {
    minWidth: 550,
  },
});

function createData(name,TrackingId, date,Status) {
  return { name,TrackingId, date,Status };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0,'Approved'),
  createData('Ice cream sandwich', 237, 9.0,'Approved'),
  createData('Eclair', 262, 16.0, 'Pending'),
  createData('Cupcake', 305, 3.7, 'Pending'),
  createData('Gingerbread', 356, 16.0,'not provide'),
];

export default function BasicTable() {
  const classes = useStyles();
const makeStyles =(Status)=>{
if(Status === 'Approved'){
  return{
    background:'green',
    color:'red'
  }
}
else if(Status === 'Pending'){
  return{
    background:'yellow',
    color:'pink'
  }
}
else{
  return{
    background:'orange',
    color:'black'
  }
}
}

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Tracking Id</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Date</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.TrackingId}</TableCell>
              <TableCell align="left"><span style={makeStyles(row.Status)} className='status' >
                {row.Status}</span></TableCell>
              <TableCell align="left" >{row.date}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
