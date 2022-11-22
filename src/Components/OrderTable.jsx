import React from 'react';
import {Table} from 'react-bootstrap'

const OrderTable = () => {
  return (
    <>
        <Table striped>
            <thead>
                <tr>
                    <th>Price</th>
                    <th>Payment Method</th>
                    <th>userName</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>20,500 Usd</td>
                    <td>Google Pay</td>
                    <td>test123</td>
                </tr>
            </tbody>
        </Table>
    </>
  )
}

export default OrderTable
