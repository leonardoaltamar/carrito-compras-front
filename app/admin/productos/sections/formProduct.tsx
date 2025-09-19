import Category from "@/core/interfaces/Category";
import { GeneratorId } from "@/core/lib/uuid/GeneratorId";
import { useAppSelector } from "@/store";
import { addProduct } from "@/store/product/productSlice";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const FormProduct = ({ onClose }: any) => {
  const categories = useAppSelector(state => state.category.categories);
  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState<any>(null);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <p>Loading</p>
    );
  }


  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log(data);
    dispatch(addProduct(
      {
        id: GeneratorId.generateId(),
        img: URL.createObjectURL(data.imagen as any),
        category: data.categoria,
        name: data.name as string,
        price: Number(data.price),
        stock: Number(data.stock),
        inCar: false,
      }
    ))

    onClose();

  };

  const Oncancel = () => {
    onClose();
  }
  return (
    <form action="" onSubmit={onSubmit}>

      <Input
        isRequired
        label="Nombre"
        name='name'
        type="text"
        fullWidth
        className='mb-4'
      />

      <Input
        isRequired
        label="Precio"
        name='price'
        type="text"
        fullWidth
        className='mb-4'
      />

      <Input
        isRequired
        label="Stock"
        name='stock'
        type="text"
        fullWidth
        className='mb-4'
      />    

      <Select className="w-full mb-4" label="Categorias" name="categoria" placeholder="Seleccione una categoría">
        {
          categories.map((category: Category) => (
            <SelectItem key={category.id}>{category.description}</SelectItem>
          ))
        }
      </Select>

      <Input type="file" name="imagen" className="mb-4" />

      <div className='flex justify-between mb-4'>

        <Button color="danger" variant="light" onPress={Oncancel}>
          Cerrar
        </Button>

        <Button type='submit' color="primary">
          Guardar
        </Button>

      </div>
    </form>
  )
}

export default FormProduct