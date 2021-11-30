import { useEffect, useState } from "react";

import { getProjectData } from "../helpers/getProjectData";
import { weeklyFromDaily } from "../helpers/downloadAgg";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { DownloadCSV } from "./DownloadCSV";

export const Chart = (project) => {
  const [projectData, setProjectData] = useState();

  useEffect(() => {
    (async () => {
      let currentDate = new Date().toISOString().slice(0, 10);
      const data = await getProjectData(project.project, "2010-01-01", currentDate);
      const weeklyData = weeklyFromDaily(data);
      setProjectData(weeklyData);
    })()
  }, []);

  return (
    <div className="chart">
      <div className="chart-head">
        <h6>{project.project}</h6>
        <DownloadCSV data={projectData} project={project.project} />
      </div>
      <LineChart
        width={500}
        height={500}
        data={projectData}
      >
        <Line
          type="monotone"
          dataKey="downloads"
          stroke="#8884d8"
          strokeWidth={3}
          dot={false}
          activeDot={{ r: 8 }}
        />
        <XAxis
          dataKey="day"
        />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
}
