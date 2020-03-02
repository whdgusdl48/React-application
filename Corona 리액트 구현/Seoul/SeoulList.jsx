import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const SeoulList = ({list}) => {
    return (
        <TableRow>
            <TableCell>{list.number}</TableCell>
            <TableCell>{list.status}</TableCell>
            <TableCell>{list.date}</TableCell>
            <TableCell>{list.sex}</TableCell>
            <TableCell>{list.living}</TableCell>
            <TableCell>{list.trip}</TableCell>
            <TableCell>{list.touch}</TableCell>
            <TableCell>{list.coping}</TableCell>
        </TableRow>
    )
}

export default SeoulList;
