import { Grid } from "@material-ui/core";
import { projects } from "./projects";
import { Chart } from "./components/Chart";
import "./App.css";

export const App = () => {

  return (
    <div className="App" style={{ backgroundColor: "#3D4875" }}>
      <div className="charts-body">
        <h2 className="dash-title">NPM Downloads Dashboard</h2>
        <Grid container spacing={2}>
          {projects.map(project => {
            return (
              <Chart project={project} />
            );
          })}
        </Grid>
      </div>
    </div>
  );
}
