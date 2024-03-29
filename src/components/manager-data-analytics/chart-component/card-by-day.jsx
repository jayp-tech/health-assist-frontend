import React from 'react';
import {
    CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis,
    YAxis
} from 'recharts';



export default function CardByDayComponent({ payload }) {
    
    const data = React.useMemo(() => {
        let data = {};
        for (let i = 1; i <= 24; i++) {
            data[i] = {
                hours: i,
                users: 0
            }
        }
        payload.patients.forEach((patient) => {

            const hour = new Date(patient.createdAt).getHours();
        
            data[hour].users++;
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
            <XAxis dataKey="hours" scale="value" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line dataKey="users" fill="#8884d8" />
        </ComposedChart>
    )
}