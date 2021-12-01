import { Grid } from "@material-ui/core";
import { Chart } from "../../components/Chart";
import "./AllNfts.css";

export const AllNfts = ({ projectsData }) => {
	return (
    <div className="charts-body">
      <h2 className="dash-title">NFT Volume Dashboard</h2>
      {projectsData ? (
        <Grid container spacing={2}>
          {projectsData.map(project => {
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