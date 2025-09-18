import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts';

const Annualsales = ({ data }: any) => {
    return (
        <LineChart width={350} height={280} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="uv" stroke="purple" strokeWidth={2} name="Ventas anuales" />
            <XAxis dataKey="name" />
            <YAxis width="auto" label={{ value: '', position: 'insideLeft', angle: -90 }} />
            <Legend align="right" />
            <Tooltip />
        </LineChart>
    )
}

export default Annualsales