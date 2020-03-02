import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const style = theme => ({
cell_long: {
    fontSize: "10px",
    width: 600,
    minWidth: 1,
    backgroundColor: '#ee82ee'

  },
  cell_short: {
      width: 100,
    },
});
const UlsanList = ({list,classes}) => {
    
    return (
        <TableRow>
            <TableCell>{list.환자번호}</TableCell>
            <TableCell>{list.성별나이}</TableCell>
            <TableCell>{list.date}</TableCell>
            <TableCell>{list.주요증상}</TableCell>
            <TableCell>{list.퇴원}</TableCell>
            <TableCell>{list.비고}</TableCell>
        </TableRow>
    )
}

export default withStyles(style)(UlsanList);
