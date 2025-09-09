"use client"

import { faHouse, faRectangleList } from '@fortawesome/free-regular-svg-icons'
import { faBox, faCartShopping, faCubesStacked } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts';
import VentasAnuales from './sections/ventas-anuales'
import ReportIncomeExpenses from './sections/report-income-expense'
import ListBestSellers from './sections/list-best-sellers'
import ListBestProduct from './sections/list-best-product'

const DashboardScreen = () => {
   

    /* 
    <AreaChart width={730} height={250} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart> */

    

    return (
        <div className="h-screen flex flex-col p-4">
            <h2 className=' font-bold text-3xl text-center mb-8'>Bienvenidos al menú de FastShop</h2>
            
            <div className='flex gap-8 justify-center mb-10'>
                <VentasAnuales></VentasAnuales>
                <ReportIncomeExpenses></ReportIncomeExpenses>
                <ListBestSellers></ListBestSellers>
            </div>

            <div className='flex gap-8 justify-center'>                
                <ListBestProduct></ListBestProduct>
            </div>
        </div>
    )
}

export default DashboardScreen