import { Input } from '@heroui/input'
import React from 'react'

const FormCategory = () => {
    return (
        <form action="">
            <Input
                isRequired
                placeholder="Moda-12"
                label="Código"
                type="text"
                fullWidth
                className='mb-4'
            />
            <Input
                isRequired
                placeholder="zapatos"
                label="Descripción"
                type="text"
                fullWidth
            />
        </form>
    )
}

export default FormCategory