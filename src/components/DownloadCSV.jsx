export const DownloadCSV = (data, project) => {
	const downloadCSVClick = () => {
		var csv = 'Downloads,Week\n';
		data.data.forEach((row) => {
			csv += [row.downloads, row.day, ','];
			csv += "\n";
		});

    console.log(csv);
		var hiddenElement = document.createElement('a');
		hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
		hiddenElement.target = "_blank";
		hiddenElement.download = `${data.project}.csv`;
		hiddenElement.click();
	}

	return (
		<button onClick={downloadCSVClick}>Download CSV</button>
	);
}
