import ApexCharts from "react-apexcharts";

const ChartDonut = () => {
    const optionsDonut = {
        title: {
            text: "Lorem ipsum",
            align: "left",
        },
        labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    };

    const seriesDonut = [44, 55, 41, 17, 15];

    return (
        <ApexCharts
            options={optionsDonut}
            series={seriesDonut}
            type="donut"
            height={350}
        />
    );
};

export default ChartDonut;
