import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip, AreaChart, Area } from 'recharts';

const IncomeExpenses = ({data}:any) => {
    return (
        <AreaChart width={390} height={280} data={data}
            margin={{ top: 5, right: 0, left: 30, bottom: 0 }}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f53232" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#f53232" stopOpacity={0} />
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
            <Area type="monotone" dataKey="egreso" stroke="#f53232" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="ingreso" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
    )
}

export default IncomeExpenses
