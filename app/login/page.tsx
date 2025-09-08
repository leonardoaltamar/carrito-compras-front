
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";

export default function LoginScreen() {

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-4 max-w-[560px] min-w-[460px] shadow-2xl p-8 rounded-2xl border-2 border-gray-100">
                <h2 className="text-2xl font-bold" >FAST SHOP</h2>
                <Input
                    isRequired                    
                    placeholder="Ingrese su usuario"
                    label="Usuario"
                    type="text"
                    fullWidth
                />

                <Input
                    isRequired                    
                    placeholder="Ingrese su contraseña"
                    label="Contraseña"
                    type="password"
                    fullWidth
                />

                <Button color="primary" fullWidth>
                    Ingresar
                </Button>
            </div>
        </div>
    );
}
