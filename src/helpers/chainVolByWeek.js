export const chainVolByWeek = (chain, projectsData) => {
	const chainData = projectsData.filter(project => project.chain == chain);
	let minLength = 999999;
	for (let i = 0; i < chainData.length; i++) {
		if (chainData[i].data.length < minLength) {
			minLength = chainData[i].data.length;
		}
	}

	for (let i = 0; i < chainData.length; i++) {
		chainData[i].data = chainData[i].data.slice(-1 * minLength)
	}

	let flattenedData = [];
	let currData = {};
	for (let i = 1; i < minLength; i++) {
		for (let j = 0; j < chainData.length; j++) {
			currData[chainData[j].project] = chainData[j].data[i].volume;
		}
		currData["day"] = chainData[0].data[i].day;
		flattenedData.push(currData);
		currData = {};
	}
	return(flattenedData);
}
