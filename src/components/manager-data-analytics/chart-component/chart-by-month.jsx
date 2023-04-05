import React from 'react'
import {
    ComposedChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';


export default function ChartByMonthComponent({ payload }) {
    const data = React.useMemo(() => {
        let data = {};
        for (let i = 1; i <= 31; i++) {
            data[i] = {
                months: i,
                users: 0
            }
        }

        payload.patients.forEach((patient) => {
            const createdDate = new Date(patient.createdAt);
            const currentDate = createdDate.getDate();
        
            data[currentDate].users++;
        })
        return Object.values(data);
    }, [payload]);
    return (
        <ComposedChart width={600}
            height={400}
            data={data}
            margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
            }}>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="months" scale="value" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="users" stroke="#413ea0" />
        </ComposedChart>
    )
}

