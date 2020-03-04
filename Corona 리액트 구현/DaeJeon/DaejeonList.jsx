import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const SeoulList = ({ list }) => {
    return (
        <TableRow>
            <TableCell>{list.번호}</TableCell>
            <TableCell>{list.질본번호}</TableCell>
            <TableCell>{list.확진일자}</TableCell>
            <TableCell>{list.성별}</TableCell>
            <TableCell>{list.거주지}</TableCell>
            <TableCell>{list.접촉력}</TableCell>
            <TableCell>{list.조치사항}</TableCell>
        </TableRow>
    )
}

export default SeoulList;
