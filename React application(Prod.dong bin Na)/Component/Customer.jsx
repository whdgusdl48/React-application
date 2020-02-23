import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CustomerDelete from './CustomerDelete';
const Customer =({customer,stateRefresh})=> {

    return (
        <TableRow>
        <TableCell>{customer.id}</TableCell>
        <TableCell><img src={customer.image} alt="profile"/></TableCell>
        <TableCell>{customer.name}</TableCell>
        <TableCell>{customer.birthday}</TableCell>
        <TableCell>{customer.gender}</TableCell>
        <TableCell>{customer.job}</TableCell>
        <TableCell> <CustomerDelete stateRefresh = {stateRefresh} id ={customer.id} /></TableCell>
        </TableRow>
)

}

export default Customer;
