import ApexCharts from "react-apexcharts";

const ChartBar = () => {
    const optionsBar = {
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
            },
        },
        title: {
            text: "Lorem ipsum",
            align: "left",
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: [
                "South Korea",
                "Canada",
                "United Kingdom",
                "Netherlands",
                "Italy",
                "France",
                "Japan",
                "United States",
                "China",
                "Germany",
            ],
        },
    };

    const seriesBar = [
        {
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
        },
    ];

    return (
        <ApexCharts
            options={optionsBar}
            series={seriesBar}
            type="bar"
            height={350}
        />
    );
};

export default ChartBar;
