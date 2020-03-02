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
const UlsanList = ({list,number,classes}) => {
    
    return (
        <TableRow>
            <TableCell className={classes.cell_short}>{list.감염경로}</TableCell>
            <TableCell className={classes.cell_short}>{list.인적사항}</TableCell>
            <TableCell className={classes.cell_short}>{list.감염경로}</TableCell>
            <TableCell className={classes.cell_short}>{list.접촉}</TableCell>
            <TableCell>{number.경로}</TableCell>
        </TableRow>
    )
}

export default withStyles(style)(UlsanList);
