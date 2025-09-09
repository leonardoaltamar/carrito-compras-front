import React from 'react'
import Card from '../components/card'
import IncomeExpenses from '../components/income-expenses-graphic';

const ReportIncomeExpenses = () => {
    const data = [{ name: '2020', egreso: 200000, ingreso: 3000000 }, { name: '2021', egreso: 9000000,  ingreso:7500000 }, { name: '2022', egreso: 2300000,  ingreso: 3000000 }, { name: '2023', egreso: 0,  ingreso: 2000000 }, { name: '2024', egreso: 0,  ingreso: 8000000 }];

    return (
        <section>
            <Card>
                <h2 className='font-bold text-2xl'>Ingresos y egresos</h2>
                <IncomeExpenses data={data}></IncomeExpenses>
            </Card>
        </section>
    )
}

export default ReportIncomeExpenses