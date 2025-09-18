"use client"
import React from 'react'
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@heroui/table";
import { useAppSelector } from '@/store';
import Category from '@/core/interfaces/Category';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenAlt } from '@fortawesome/free-solid-svg-icons';

const TableCategory = () => {

    const categories = useAppSelector( state => state.category.categories );

    return (
        <Table aria-label="Example static collection table">
            <TableHeader>
                <TableColumn>Codigo de la categoría</TableColumn>
                <TableColumn>Descripción</TableColumn>
                <TableColumn>Acciones</TableColumn>
            </TableHeader>
            <TableBody>
                {
                    categories.map( (category: Category) => (
                        <TableRow key={category.id}>
                            <TableCell>{category.code}</TableCell>
                            <TableCell>{category.description}</TableCell>
                            <TableCell className='flex items-center gap-4'>
                                <div className='flex flex-col justify-center items-center text-blue-500'>
                                    <FontAwesomeIcon icon={faPenAlt}/>
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

export default TableCategory