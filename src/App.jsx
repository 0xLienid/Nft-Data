import { projects } from "./projects";
import { Chart } from "./components/Chart";

export const App = () => {

  return (
    <div className="App">
      {projects.map(project => {
        return (
          <Chart project={project} />
        );
      })}
    </div>
  );
}
