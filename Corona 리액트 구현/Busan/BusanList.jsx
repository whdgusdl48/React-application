import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const BusanList = ({list}) => {
    return (
        <TableRow>
            <TableCell>{list.인적사항}</TableCell>
            <TableCell>{list.감염경로}</TableCell>
            <TableCell>{list.접촉}</TableCell>
            <TableCell>{list.격리시설}</TableCell>
        </TableRow>
    )
}

export default BusanList;