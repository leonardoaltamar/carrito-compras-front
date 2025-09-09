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