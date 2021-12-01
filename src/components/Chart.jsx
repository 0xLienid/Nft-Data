import { useEffect, useState } from "react";
import "./chart.css";

import { getProjectData } from "../helpers/getProjectData";
import { weeklyFromDaily } from "../helpers/downloadAgg";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { Grid } from "@material-ui/core";
import { DownloadCSV } from "./DownloadCSV";

export const Chart = ({ project, chain, data }) => {
  return (
    <Grid item s={12} md={6}>
      <div className="chart">
        <div className="chart-head">
          <h2 className="title">{project}</h2>
          <h2 className="chain">{chain}</h2>
          <DownloadCSV data={data} project={project} />
        </div>
        <ResponsiveContainer width="75%" height={300}>
          <BarChart
            data={data}
          >
            <Bar
              type="monotone"
              dataKey="volume"
              stroke="#C49662"
              fill="#C49662"
            />
            <XAxis
              dataKey="day"
              tick={{ fill: "#B6B8C0" }}
              stroke="#B6B8C0"
            />
            <YAxis
              tick={{ fill: "#B6B8C0" }}
              stroke="#B6B8C0"
            />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Grid>
  );
}
