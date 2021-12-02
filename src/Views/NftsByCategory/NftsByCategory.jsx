import { Grid } from "@material-ui/core";
import { Chart } from "../../components/Chart";
import { StackedBar } from "../../components/StackedBar";
import { chainVolByWeek } from "../../helpers/chainVolByWeek";
import { useState, useEffect } from "react";
import "./NftsByCategory.css";

export const NftsByCategory = ({ projectsData, category }) => {
  const [totalVolByWeek, setTotalVolByWeek] = useState();
  const [projects, setProjects] = useState();

  useEffect(() => {
    if (projectsData) {
      setTotalVolByWeek(chainVolByWeek(category, projectsData));

      let listOfProjects = projectsData.map(project => {
        return project.project;
      });
      setProjects(listOfProjects);
    }
  }, [projectsData]);

	return (
    <div className="charts-body">
      <h2 className="dash-title">NFT Volume Dashboard</h2>
      {projectsData ? (
        <Grid container spacing={2}>
          <StackedBar data={totalVolByWeek} projects={projects} chain={category} />
          {projectsData.filter(project => project.chain == category).map(project => {
            return (
              <Chart key={project.project} project={project.project} chain={project.chain} data={project.data} />
            );
          })}
        </Grid>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
}
