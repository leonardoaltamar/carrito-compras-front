import React from 'react'
import Card from '../components/card'
import Annualsales from '../components/annual-sales-graphic';

const VentasAnuales = () => {
    const data = [{ name: '2020', uv: 1000000 }, { name: '2021', uv: 2000000 }, { name: '2022', uv: 500000 }, { name: '2023', uv: 4500000 }, { name: '2024', uv: 12000000 }];

    return (
        <section>
            <Card>
                <h2 className='font-bold text-2xl'>Ventas anuales</h2>
                <Annualsales data={data}></Annualsales>
            </Card>
        </section>
    )
}

export default VentasAnuales