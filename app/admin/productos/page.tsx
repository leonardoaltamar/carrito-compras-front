"use client"

import { Button } from "@heroui/button";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@heroui/table";
import TableProduct from "./sections/tableProduct";
import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@heroui/modal";
import FormProduct from "./sections/formProduct";

export default function ProductoScreen() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <div className="px-12">

            <div className="flex items-center justify-between py-4">
                <h2 className="text-2xl font-bold">Creacion de productos</h2>
                <Button color="primary" onPress={onOpen}>
                    Crear producto
                </Button>
            </div>

            <TableProduct></TableProduct>

            <div className="fixed bottom-0 left-[50%] transform-[translateX(-50%)] p-3 rounded-t-2xl border-1 border-gray-200 w-full max-w-[360px] shadow-lg shadow-gray-500/50">
                <Button color="danger" variant="bordered" fullWidth>
                    Atrás
                </Button>
            </div>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Crear producto</ModalHeader>
                            <ModalBody>
                                <FormProduct onClose={onClose}></FormProduct>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}