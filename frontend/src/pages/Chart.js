import {PieChart,Pie,Tooltip,BarChart,XAxis,YAxis,Legend,CartesianGrid,Bar} from "recharts";
import "../pages/Chart.css";
const Chart = () =>{
    const data=[
        {name:"Item1",value:31},
        {name:"Item2",value:33},
        {name:"Item3",value:35},
        {name:"Item4",value:46},
    ];
    return(
        <div style={{textAlign:"center"}}>
            <h1>Chart Describing List of Items in Use</h1>
            <div className="align">
            <div>
            <h2>PieChart</h2>
            <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        </div>
        <div>
        <h2>BarChart</h2>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={30}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
        </div>
        </div>
        </div>
    )
}
export default Chart;