"use client"

import React, { useEffect, useState } from 'react'
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@heroui/table";
import { useAppSelector } from '@/store';
import Product from '@/core/interfaces/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

const TableProduct = () => {
    const products = useAppSelector(state => state.product.products);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return (
            <Table aria-label="Loading table">
                <TableHeader>
                    <TableColumn>Nombre</TableColumn>
                    <TableColumn>Stock</TableColumn>
                    <TableColumn>Precio</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Cargando...</TableCell>
                        <TableCell>Cargando...</TableCell>
                        <TableCell>Cargando...</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }

    return (
        <Table aria-label="Example static collection table">
            <TableHeader>
                <TableColumn>Nombre</TableColumn>
                <TableColumn>Stock</TableColumn>
                <TableColumn>Precio</TableColumn>
                <TableColumn>Acciones</TableColumn>
            </TableHeader>
            <TableBody>
                {
                    products.map((product: Product) => (
                        <TableRow key={product.id}>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>{product.stock}</TableCell>
                            <TableCell>{product.price}</TableCell>
                            <TableCell className='flex items-center gap-4'>
                                <div className='flex flex-col justify-center items-center text-blue-500'>
                                    <FontAwesomeIcon icon={faPen} />
                                    <span>Editar</span>
                                </div>
                                <div className='flex flex-col justify-center items-center text-danger-500'>
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                    <span>Eliminar</span>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default TableProduct