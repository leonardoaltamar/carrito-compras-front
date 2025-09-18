import { Button } from "@heroui/button";
import TableCategory from "./sections/tableCategory";

export default function CategoriaScreen() {

    return (
        <div className="px-12">
            <div className="flex items-center justify-between py-4">
                <h2 className="text-2xl font-bold">Creacion de categorias</h2>
                <Button color="primary">
                    Crear categoria
                </Button>
            </div>            

            <TableCategory></TableCategory>

            <div className="fixed bottom-0 left-[50%] transform-[translateX(-50%)] p-3 rounded-t-2xl border-1 border-gray-200 w-full max-w-[360px] shadow-lg shadow-gray-500/50">
                <Button color="danger" variant="bordered" fullWidth>
                    Atrás
                </Button>
            </div>
        </div>
    );
}