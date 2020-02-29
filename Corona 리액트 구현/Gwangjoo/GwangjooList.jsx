import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const GwangjooList = ({list}) => {
    return (
        <TableRow>
            <TableCell>{list.확진자번호}</TableCell>
            <TableCell>{list.인적사항}</TableCell>
            <TableCell>{list.확진경위}</TableCell>
            <TableCell>{list.확진일}</TableCell>
            <TableCell>{list.접촉}</TableCell>
            <TableCell>{list.격리시설}</TableCell>

        </TableRow>
    )
}

export default GwangjooList;