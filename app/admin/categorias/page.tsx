"use client"
import { Button } from "@heroui/button";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@heroui/table";

export default function CategoriaScreen() {

    return (
        <div>
            <div className="flex items-center justify-between p-4">
                <h2 className="text-2xl font-bold">Creacion de categorias</h2>
                <Button color="primary">
                    Crear categoria 
                </Button>
            </div>
            <div>
                <Table aria-label="Example static collection table">
                    <TableHeader>
                        <TableColumn>Codigo de la categoría</TableColumn>
                        <TableColumn>Descripción</TableColumn>
                        <TableColumn>Fecha de creación</TableColumn>
                    </TableHeader>
                    <TableBody>
                        <TableRow key="1">
                            <TableCell>TECNO</TableCell>
                            <TableCell>Tecnologica</TableCell>
                            <TableCell>20-01-2025</TableCell>
                        </TableRow>
                        <TableRow key="2">
                            <TableCell>FASHON</TableCell>
                            <TableCell>Moda</TableCell>
                            <TableCell>20-01-2025</TableCell>
                        </TableRow>
                        <TableRow key="3">
                            <TableCell>CALZ</TableCell>
                            <TableCell>Calzado</TableCell>
                            <TableCell>20-01-2025</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>

            <div className="fixed bottom-0 left-[50%] transform-[translateX(-50%)] p-3 rounded-t-2xl border-1 border-gray-200 w-full max-w-[360px] shadow-lg shadow-gray-500/50">
                <Button color="danger" variant="bordered" fullWidth>
                    Atrás
                </Button>
            </div>
        </div>
    );
}