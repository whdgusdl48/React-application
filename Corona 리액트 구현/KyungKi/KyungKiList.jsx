import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const KyungKiList = ({ list }) => {
    return (
        <TableRow>
            <TableCell>{list.번호}</TableCell>
            <TableCell>{list.확진자}</TableCell>
            <TableCell>{list.성별}</TableCell>
            <TableCell>{list.출생연도}</TableCell>
            <TableCell>{list.확진일자}</TableCell>
            <TableCell>{list.퇴원}</TableCell>
            <TableCell>{list.지역}</TableCell>
        </TableRow>
    )
}

export default KyungKiList;
