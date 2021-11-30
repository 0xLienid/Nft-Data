export const weeklyFromDaily = (dailyData) => {
  console.log(dailyData.length % 7);
  console.log(dailyData);
  dailyData.splice(0, (dailyData.length % 7));
  console.log(dailyData);
	let weeklyData = [];
	let currData = {
		downloads: 0,
		day: dailyData[0].day,
	};
	for (let i = 0; i < dailyData.length; i++) {
    if (i % 7 == 0) {
      if (i != 0) {
        weeklyData.push(currData);
        currData = {
          downloads: 0,
          day: dailyData[i].day,
        };
      }
    }
    currData.downloads += dailyData[i].downloads;
	}
  weeklyData.push(currData);
  return weeklyData;
}