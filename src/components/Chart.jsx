import { useEffect, useState } from "react";
import "./chart.css";

import { getProjectData } from "../helpers/getProjectData";
import { weeklyFromDaily } from "../helpers/downloadAgg";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { Grid } from "@material-ui/core";
import { DownloadCSV } from "./DownloadCSV";

export const Chart = (project) => {
  const [projectData, setProjectData] = useState();

  useEffect(() => {
    (async () => {
      let currentDate = new Date().toISOString().slice(0, 10);
      const data = await getProjectData(project.project, "2014-01-01", currentDate);
      const weeklyData = weeklyFromDaily(data);
      setProjectData(weeklyData);
    })()
  }, []);

  return (
    <Grid item xs={6}>
      <div className="chart">
        <div className="chart-head">
          <h2 className="title">{project.project}</h2>
          <DownloadCSV data={projectData} project={project.project} />
        </div>
        <ResponsiveContainer width="50%" height={200}>
          <LineChart
            data={projectData}
          >
            <Line
              type="monotone"
              dataKey="downloads"
              stroke="#C49662"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 8 }}
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
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Grid>
  );
}
