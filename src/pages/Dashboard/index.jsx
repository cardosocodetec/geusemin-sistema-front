import { useContext, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { HiArrowTrendingUp, HiArrowTrendingDown } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import ChartLine from "../../components/ChartLine";
import ChartBar from "../../components/ChartBar";
import ChartDonut from "../../components/ChartDonut";
import ChartColumn from "../../components/ChartColumn";
import { LoginContext } from "../../context/LoginContext";

import "swiper/css";
import "./index.css";

const infoCards = [
    {
        title: "Condomínios",
        number: "721K",
        positive: true,
        percent: "+11.01%",
    },
    {
        title: "Unidades",
        number: "367K",
        positive: true,
        percent: "+9.15%",
    },
    {
        title: "Moradores",
        number: "1,156",
        positive: false,
        percent: "-0.56%",
    },
    {
        title: "Asessoria Jurídica",
        number: "239K",
        positive: false,
        percent: "-1.48%",
    },
    {
        title: "Lorem Impsum",
        number: "1,156",
        positive: false,
        percent: "-0.56%",
    },
    {
        title: "Lorem Impsum",
        number: "239K",
        positive: true,
        percent: "+0.16%",
    },
];

const Dashboard = () => {
    const [accordion, setAccordion] = useState(true);
    const [cards, setCards] = useState(infoCards);

    const { config } = useContext(LoginContext);

    return (
        <div className="dashboard">
            <div className="dashboard__accordion">
                <div
                    className="dashboard__head"
                    onClick={() => setAccordion(!accordion)}
                >
                    <h3>Hoje</h3>
                    {accordion ? (
                        <BiChevronUp size={20} color={config[2].active ? "#fff" : "#00000066"} />
                    ) : (
                        <BiChevronDown size={20} color={config[2].active ? "#fff" : "#00000066"} />
                    )}
                </div>
                <div
                    className={`dashboard__content ${
                        accordion ? "active" : ""
                    }`}
                >
                    <div className="dashboard__caroulsel">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={1.5}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 4.5,
                                    spaceBetween: 50,
                                },
                            }}
                        >
                            {cards.map((card, index) => (
                                <SwiperSlide key={index}>
                                    <div className="dashboard__card">
                                        <h3>{card.title}</h3>
                                        <div className="dashboard__data">
                                            <div className="dashboard__number">
                                                <p>{card.number}</p>
                                            </div>
                                            <div className="dashboard__percent">
                                                <p>{card.percent}</p>
                                                {card.positive ? (
                                                    <HiArrowTrendingUp
                                                        size={16}
                                                    />
                                                ) : (
                                                    <HiArrowTrendingDown
                                                        size={16}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="dashboard__charts">
                        <div className="dashboard__item">
                            <ChartLine />
                        </div>
                        <div className="dashboard__item">
                            <ChartBar />
                        </div>
                        <div className="dashboard__item">
                            <ChartDonut />
                        </div>
                        <div className="dashboard__item">
                            <ChartColumn />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
