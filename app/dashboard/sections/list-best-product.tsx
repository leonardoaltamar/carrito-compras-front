import React from 'react'
import Card from '../components/card'
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@heroui/table";

const ListBestProduct = () => {
    return (
        <Card>
            <h2 className='font-bold text-2xl'>Productos mas vendidos del mes</h2>
            <Table className='w-full' aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>Nombre</TableColumn>
                    <TableColumn>Precio</TableColumn>
                    <TableColumn>Unidades vendidas</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow key="1">
                        <TableCell>iphone 12</TableCell>
                        <TableCell>$3.000.000</TableCell>
                        <TableCell>120</TableCell>
                    </TableRow>
                    <TableRow key="2">
                        <TableCell>iphone 12 pro max</TableCell>
                        <TableCell>$3.500.000</TableCell>
                        <TableCell>1450</TableCell>
                    </TableRow>
                    <TableRow key="3">
                        <TableCell>Airpos pro</TableCell>
                        <TableCell>$3.100.000</TableCell>
                        <TableCell>1200</TableCell>
                    </TableRow>
                    <TableRow key="4">
                        <TableCell>Zamba</TableCell>
                        <TableCell>$24.000</TableCell>
                        <TableCell>12200</TableCell>
                    </TableRow>
                    <TableRow key="5">
                        <TableCell>Cargador iphone</TableCell>
                        <TableCell>$22.000</TableCell>
                        <TableCell>1300</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Card>
    )
}

export default ListBestProduct;