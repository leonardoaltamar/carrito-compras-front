"use client"
import { Button } from "@heroui/button";
import TableCategory from "./sections/tableCategory";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/modal";
import FormCategory from "./sections/formCategory";

export default function CategoriaScreen() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <div className="px-12">
            <div className="flex items-center justify-between py-4">
                <h2 className="text-2xl font-bold">Creacion de categorias</h2>
                <Button color="primary" onPress={onOpen} >
                    Crear categoria
                </Button>
            </div>

            <TableCategory></TableCategory>

            <div className="fixed bottom-0 left-[50%] transform-[translateX(-50%)] p-3 rounded-t-2xl border-1 border-gray-200 w-full max-w-[360px] shadow-lg shadow-gray-500/50">
                <Button color="danger" variant="bordered" fullWidth>
                    Atrás
                </Button>
            </div>


            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Crear categoría</ModalHeader>
                            <ModalBody>
                                <FormCategory></FormCategory>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cerrar
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Guardar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>


        </div>
    );
}