import ApexCharts from "react-apexcharts";

const ChartLine = () => {
    const optionsLine = {
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "straight",
        },
        title: {
            text: "Total users",
            align: "left",
        },
        grid: {
            row: {
                colors: ["#f3f3f3", "transparent"],
                opacity: 0.5,
            },
        },
        xaxis: {
            categories: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"],
        },
    };

    const seriesLine = [
        {
            name: "users",
            data: [10, 41, 35, 51, 49, 62, 69],
        },
        {
            name: "other",
            data: [20, 31, 85, 31, 19, 82, 75],
        },
    ];

    return (
        <ApexCharts
            options={optionsLine}
            series={seriesLine}
            type="line"
            height={350}
        />
    );
};

export default ChartLine;
