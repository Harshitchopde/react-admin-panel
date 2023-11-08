import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./table.scss"
function TableTransaction() {
    const rows = [
        {
            "id": "1",
            "product": "Amazon Echo Dot",
            "img": "https://unsplash.com/s/photos/echo-dot",
            "customer": "John Doe",
            "date": "2023-10-01",
            "amount": 49.99,
            "method": "Credit Card",
            "status": "Pending"
        },
        {
            "id": "2",
            "product": "Amazon Kindle Paperwhite",
            "img": "https://m.media-amazon.com/images/I/61d5WVS49ML._SL1000_.jpg",
            "customer": "Jane Smith",
            "date": "2023-10-02",
            "amount": 129.99,
            "method": "PayPal",
            "status": "Approved"
        },
        {
            "id": "3",
            "product": "Amazon Fire TV Stick",
            "img": "https://m.media-amazon.com/images/I/51Ipih4XFHL._SY300_SX300_.jpg",
            "customer": "Bob Johnson",
            "date": "2023-10-03",
            "amount": 39.99,
            "method": "Debit Card",
            "status": "Approved"
        },
        {
            "id": "4",
            "product": "Amazon Echo Show 5",
            "img": "https://m.media-amazon.com/images/I/517GYiFI4TL._SY300_SX300_.jpg",
            "customer": "Alice Brown",
            "date": "2023-10-04",
            "amount": 79.99,
            "method": "Credit Card",
            "status": "Pending"
        },
        {
            "id": "5",
            "product": "Amazon Basics Backpack",
            "img": "https://m.media-amazon.com/images/I/51Ipih4XFHL._SY300_SX300_.jpg",
            "customer": "Sam Wilson",
            "date": "2023-10-05",
            "amount": 29.99,
            "method": "PayPal",
            "status": "Approved"
        },
        {
            "id": "6",
            "product": "Amazon Fire Tablet",
            "img": "https://m.media-amazon.com/images/I/61d5WVS49ML._SL1000_.jpg",
            "customer": "Emily Davis",
            "date": "2023-10-06",
            "amount": 89.99,
            "method": "Credit Card",
            "status": "Pending"
        }
    ]

    return (
        <TableContainer component={Paper} className='table'>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>

                        <TableCell className='tablecell'>Tracking ID</TableCell>
                        <TableCell className='tablecell'>Product</TableCell>
                        <TableCell className='tablecell'>Customer</TableCell>
                        <TableCell className='tablecell'>Date</TableCell>

                        <TableCell className='tablecell'>Amount</TableCell>
                        <TableCell className='tablecell'>Payment</TableCell>
                        <TableCell className='tablecell'>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                        >
                            <TableCell className='tablecell'>
                                {row.id}
                            </TableCell>
                            <TableCell className='tablecell'><div className="cellwrapper">
                                <img src={row.img} className="image" alt="" />
                                {row.product}
                                </div></TableCell>
                            <TableCell className='tablecell'>{row.customer}</TableCell>
                            <TableCell className='tablecell'>{row.date}</TableCell>
                            <TableCell className='tablecell'>{row.amount}</TableCell>
                            <TableCell className='tablecell'>{row.method}</TableCell>
                            <TableCell className='tablecell'>
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableTransaction
