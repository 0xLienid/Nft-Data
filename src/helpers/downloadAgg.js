export const weeklyFromDaily = (dailyData) => {
  dailyData.splice(0, (dailyData.length % 7));
	let weeklyData = [];
	let currData = {
		volume: 0,
		day: dailyData[0].day,
	};
	for (let i = 0; i < dailyData.length; i++) {
    if (i % 7 == 0) {
      if (i != 0) {
        weeklyData.push(currData);
        currData = {
          volume: 0,
          day: dailyData[i].day,
        };
      }
    }
    currData.volume += dailyData[i].volume;
	}
  weeklyData.push(currData);
  return weeklyData;
}