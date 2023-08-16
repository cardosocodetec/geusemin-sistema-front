import { useState } from "react";
import { IoWarningOutline } from "react-icons/io5";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import "./index.css";

const notificationData = [
    {
        title: "Notificação não lida",
        time: "hh:mm AM/PM",
        desc: "Esta seção fornecerá a descrição do erro em detalhes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.",
    },
    {
        title: "Notificação não lida",
        time: "hh:mm AM/PM",
        desc: "Esta seção fornecerá a descrição do erro em detalhes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.",
    },
    {
        title: "Notificação não lida",
        time: "hh:mm AM/PM",
        desc: "Esta seção fornecerá a descrição do erro em detalhes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.",
    },
    {
        title: "Notificação não lida 2",
        time: "hh:mm AM/PM",
        desc: "Esta seção fornecerá a descrição do erro em detalhes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.",
    },
    {
        title: "Notificação não lida",
        time: "hh:mm AM/PM",
        desc: "Esta seção fornecerá a descrição do erro em detalhes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.",
    },
    {
        title: "Notificação não lida",
        time: "hh:mm AM/PM",
        desc: "Esta seção fornecerá a descrição do erro em detalhes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.",
    },
    {
        title: "Notificação não lida 2",
        time: "hh:mm AM/PM",
        desc: "Esta seção fornecerá a descrição do erro em detalhes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.",
    },
    {
        title: "Notificação não lida",
        time: "hh:mm AM/PM",
        desc: "Esta seção fornecerá a descrição do erro em detalhes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.",
    },
    {
        title: "Notificação não lida",
        time: "hh:mm AM/PM",
        desc: "Esta seção fornecerá a descrição do erro em detalhes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.",
    },
    {
        title: "Notificação não lida 2",
        time: "hh:mm AM/PM",
        desc: "Esta seção fornecerá a descrição do erro em detalhes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.",
    },
    {
        title: "Notificação não lida",
        time: "hh:mm AM/PM",
        desc: "Esta seção fornecerá a descrição do erro em detalhes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.",
    },
    {
        title: "Notificação não lida",
        time: "hh:mm AM/PM",
        desc: "Esta seção fornecerá a descrição do erro em detalhes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.",
    },
    {
        title: "Notificação não lida 2",
        time: "hh:mm AM/PM",
        desc: "Esta seção fornecerá a descrição do erro em detalhes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.",
    },
    {
        title: "Notificação não lida",
        time: "hh:mm AM/PM",
        desc: "Esta seção fornecerá a descrição do erro em detalhes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.",
    },
    {
        title: "Notificação não lida",
        time: "hh:mm AM/PM",
        desc: "Esta seção fornecerá a descrição do erro em detalhes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.",
    },
    {
        title: "Notificação não lida 2",
        time: "hh:mm AM/PM",
        desc: "Esta seção fornecerá a descrição do erro em detalhes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.",
    },
    {
        title: "Notificação não lida",
        time: "hh:mm AM/PM",
        desc: "Esta seção fornecerá a descrição do erro em detalhes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.",
    },
    {
        title: "Notificação não lida",
        time: "hh:mm AM/PM",
        desc: "Esta seção fornecerá a descrição do erro em detalhes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.",
    },
    {
        title: "Notificação não lida 2",
        time: "hh:mm AM/PM",
        desc: "Esta seção fornecerá a descrição do erro em detalhes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non mollis lacus.",
    },
];

const Notifications = () => {
    const itemsPerPage = 4;
    const [notifications, setNotifications] = useState(notificationData);
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const itemsToShow = notifications.slice(startIndex, endIndex);

    const changePage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const nextPage = () => {
        if (currentPage < Math.ceil(notifications.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleRemoveNotification = (e, removeItem) => {
        e.preventDefault();
        setNotifications((prevNotifications) =>
            prevNotifications.filter((item) => item !== removeItem)
        );
    };

    const handleClearAll = (e) => {
        e.preventDefault();
        setNotifications([]);
    };

    return (
        <div className="notifications">
            <div className="notifications__head">
                <h2>Notificações</h2>
                <button
                    className="button-outline"
                    onClick={(e) => handleClearAll(e)}
                >
                    Limpar notificações
                </button>
            </div>
            <div className="notifications__items">
                {itemsToShow.map((notification, index) => (
                    <div key={index} className="notification">
                        <div className="notification__head">
                            <div className="notification__title">
                                <IoWarningOutline size={24} color="#004EDA" />
                                <h3>{notification.title}</h3>
                            </div>
                            <div className="notification__time">
                                <p>{notification.time}</p>
                            </div>
                        </div>
                        <div className="notification__description">
                            <p>{notification.desc}</p>
                        </div>
                        <div className="notification__buttons">
                            <button
                                className="button-outline"
                                onClick={(e) =>
                                    handleRemoveNotification(e, notification)
                                }
                            >
                                Limpar
                            </button>
                            <button className="button-full">Visualizar</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button className="pagination__arrow" onClick={prevPage}>
                    <BiChevronLeft size={20} color="#5A5A5F" />
                </button>
                {Array.from(
                    { length: Math.ceil(notifications.length / itemsPerPage) },
                    (_, index) => (
                        <button
                            key={index}
                            className={`pagination__page ${
                                currentPage === index + 1 ? "active" : ""
                            }`}
                            onClick={() => changePage(index + 1)}
                        >
                            {index + 1}
                        </button>
                    )
                )}
                <button className="pagination__arrow" onClick={nextPage}>
                    <BiChevronRight size={20} color="#5A5A5F" />
                </button>
            </div>
        </div>
    );
};

export default Notifications;
