import { GeneratorId } from '@/core/lib/uuid/GeneratorId';
import { useAppSelector } from '@/store';
import { addCategory } from '@/store/category/CategorySlice';
import { Button } from '@heroui/button'
import { Input } from '@heroui/input'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const FormCategory = ({ onClose }: any) => {
    const dispatch = useDispatch();
    const [submitted, setSubmitted] = useState<any>(null);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        dispatch( addCategory(
            {
                id: GeneratorId.generateId(),
                code: data.codigo as string,
                description: data.descripcion as string
            }
        ) )

        onClose();

    };

    const Oncancel = () => {
        onClose();
    }

    return (
        <form action="" onSubmit={onSubmit}>
            <Input
                isRequired
                placeholder="Moda-12"
                label="Código"
                name='codigo'
                type="text"
                fullWidth
                className='mb-4'
            />

            <Input
                isRequired
                placeholder="zapatos"
                label="Descripción"
                name='descripcion'
                type="text"
                fullWidth
                className='mb-4'
            />

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

export default FormCategory