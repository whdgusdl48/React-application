import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const SeoulList = ({list}) => {
    return (
        <TableRow>
            <TableCell>{list.id}</TableCell>
            <TableCell>{list.name}</TableCell>
            <TableCell>{list.date}</TableCell>
            <TableCell>{list.조치사항}</TableCell>
        </TableRow>
    )
}

export default SeoulList;
