import axios from "axios";
import { weeklyFromDaily } from "./downloadAgg";

axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export const getProjectData = async (chain, marketplace) => {
	let marketplaceData = await axios.get(`https://dappradar.com/v2/api/dapp/${chain}/marketplaces/${marketplace}/chart/all?currency=USD`)
	let formattedData = [];
	for (let i = 0; i < marketplaceData.data.series[1].data.length; i++) {
		formattedData.unshift({volume: marketplaceData.data.series[1].data[i], day: new Date(marketplaceData.data.xaxis[i]).toLocaleDateString("en-US")});
	}
	return weeklyFromDaily(formattedData.slice(-365));
}

export const getAllProjectData = async (projects) => {
	const allData = [];
	for (let i = 0; i < projects.length; i++) {
		const projectData = await getProjectData(projects[i].chain, projects[i].project);
		allData.push({project: projects[i].project, chain: projects[i].chain, data: projectData});
	}
	return allData;
}