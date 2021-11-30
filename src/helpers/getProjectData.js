import axios from "axios";

export const getProjectData = async (project, startDate, endDate) => {
	const projectData = await axios.get(`https://api.npmjs.org/downloads/range/${startDate}:${endDate}/${project}`);
	return projectData.data.downloads;
}