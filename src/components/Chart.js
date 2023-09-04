import React, { useEffect, useState } from "react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';



const Chart = () => {

    const [data, setData] = useState([]);
    const [result, setResult] = useState([]);


    //    fetching case data from API

    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
            .then((res) => res.json())
            .then((data) => setData(data.cases));
    }, []);

    // object and key value separated from the object

    useEffect(() => {
        let newdata = Object.keys(data);
        const res = [];
        for (let i = 0; i < newdata.length; i++) {
            res.push({
                date: newdata[i],
                cases: data[newdata[i]]
            });
            setResult(res);
        }
    }, [data]);





    return (
        <div className="container">
            <h1 className="text-center">Covidcases</h1>
            <div className="card mt-5">
                <div className="card-body">
                    <div className="chart">
                        <AreaChart
                            width={600}
                            height={500}
                            data={result}
                            margin={{
                                top: 10,
                                right: 0,
                                left: 50,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis dataKey="cases" />
                            <Tooltip />
                            <Area type="monotone" dataKey="cases" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Chart