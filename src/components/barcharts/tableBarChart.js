import { BarChart, Bar, ResponsiveContainer, XAxis, Cell, Tooltip } from 'recharts';

const barColors = ["#1f77b4", "#ff7f0e", "ff7f0e", "#2ca02c"]

export default function TableBarChart({data}) {
    return (
      <ResponsiveContainer width="80%" height="100%">
        <BarChart data={data} margin={{top: 20, right: 20, bottom: 20, left: 20}}  >
            <XAxis dataKey="day" />
            <Tooltip/>
            <Bar dataKey="threshold" fill="#8884d8" label={{position: 'top'}}>
                {
                    data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={barColors[index % 20]} />
                    ))
                }
            </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
}
