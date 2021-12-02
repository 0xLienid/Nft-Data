import "./chart.css";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { Grid } from "@material-ui/core";
import { DownloadCSV } from "./DownloadCSV";

const toPercent = (decimal, fixed=0) => {
  return `${(decimal * 100).toFixed(fixed)}%`;
};

export const StackedBar = ({ data, projects, chain }) => {
  return (
    <Grid item s={12} md={6}>
      <div className="chart">
        <div className="chart-head">
          <h2 className="title">{chain} % Vol</h2>
          <h2 className="chain">{chain}</h2>
          <DownloadCSV data={data} project={chain} />
        </div>
        <ResponsiveContainer width="75%" height={300}>
          <BarChart
            data={data}
          >
            {projects.map(project => {
              return (
                <Bar
                  type="montone"
                  dataKey={project}
                />
              );
            })}
            <XAxis
              dataKey="day"
              tick={{ fill: "#B6B8C0" }}
              stroke="#B6B8C0"
            />
            <YAxis
              tick={{ fill: "#B6B8C0" }}
              tickFormatter={toPercent}
              stroke="#B6B8C0"
            />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Grid>
  );
}
