import { Grid } from "@material-ui/core";
import { Chart } from "../../components/Chart";
import "./NftsByCategory.css";

export const NftsByCategory = ({ projectsData, category }) => {
	return (
    <div className="charts-body">
      <h2 className="dash-title">NFT Volume Dashboard</h2>
      {projectsData ? (
        <Grid container spacing={2}>
          {projectsData.filter(project => project.chain == category).map(project => {
            return (
              <Chart project={project.project} chain={project.chain} data={project.data} />
            );
          })}
        </Grid>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
}