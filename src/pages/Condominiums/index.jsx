import { useContext, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { BsBuildings } from "react-icons/bs";
import {
    FiChevronLeft,
    FiChevronRight,
    FiChevronDown,
    FiChevronUp,
} from "react-icons/fi";
import {
    HiOutlineDesktopComputer,
    HiOutlinePhone,
    HiOutlineDotsVertical,
} from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineClockCircle } from "react-icons/ai";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import InputMask from "react-input-mask";
import { LoginContext } from "../../context/LoginContext";

import "./index.css";

const Condominiums = () => {
    const [calendarActive, setCalendarActive] = useState(false);
    const [selectedDate, setSelectedDate] = useState("Jun 24, 2022");
    const [calendarValue, setCalendarValue] = useState();
    const [modalActive, setModalActive] = useState(false);
    const [adm, setAdm] = useState("");
    const [reference, setReference] = useState("");
    const [name, setName] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [social, setSocial] = useState("");
    const [cep, setCep] = useState("");
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [complement, setComplement] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const { config } = useContext(LoginContext);

    const columns = [
        { field: "time", headerName: "Tempo", width: 150 },
        { field: "col2", headerName: "Lorem ipsum", width: 150 },
        { field: "col3", headerName: "Lorem ipsum", width: 150 },
        { field: "col4", headerName: "Lorem ipsum", width: 150 },
        { field: "col5", headerName: "Lorem ipsum", width: 250 },
        { field: "col6", headerName: "Lorem ipsum", width: 250 },
        {
            field: "icon",
            headerName: "Lorem ipsum",
            width: 120,
            renderCell: (params) => {
                if (params.value === "desktop") {
                    return (
                        <HiOutlineDesktopComputer
                            size={24}
                            color="#666E7D"
                            style={{ margin: "0 auto" }}
                        />
                    );
                } else if (params.value === "phone") {
                    return (
                        <HiOutlinePhone
                            size={24}
                            color="#666E7D"
                            style={{ margin: "0 auto" }}
                        />
                    );
                }
            },
        },
        {
            field: "status",
            headerName: "Lorem ipsum",
            width: 250,
            renderCell: (params) => {
                if (params.value === "status-orange") {
                    return (
                        <div className="status orange">
                            <div className="status__title">
                                <AiOutlineClockCircle
                                    size={20}
                                    color="#F24E1E"
                                />
                                <p>Lorem</p>
                            </div>
                            <span>05:54</span>
                        </div>
                    );
                } else if (params.value === "status-green") {
                    return (
                        <div className="status green">
                            <div className="status__title">
                                <AiOutlineClockCircle
                                    size={20}
                                    color="#02A443"
                                />
                                <p>Lorem</p>
                            </div>
                        </div>
                    );
                } else if (params.value === "status-grey") {
                    return (
                        <div className="status grey">
                            <div className="status__title">
                                <AiOutlineClockCircle
                                    size={20}
                                    color="#00000066"
                                />
                                <p>Lorem</p>
                            </div>
                        </div>
                    );
                }
            },
        },
        {
            field: "options",
            headerName: "",
            width: 80,
            renderCell: (params) => {
                return (
                    params.value && (
                        <div className="options">
                            <HiOutlineDotsVertical size={24} color="#6774BD" />
                            <div className="options__items">
                                <div className="options__item" onClick={handleModal}>
                                    <p>Editar</p>
                                </div>
                                <div className="options__item" onClick={handleModal}>
                                    <p>Visualizar</p>
                                </div>
                            </div>
                        </div>
                    )
                );
            },
        },
    ];

    const rows = [
        {
            id: 1,
            time: "17:30",
            col2: "Lorem ipsum",
            col3: "Lorem ipsum",
            col4: "Lorem ipsum",
            col5: "Lorem ipsum",
            col6: "Lorem ipsum",
            icon: "desktop",
            status: "status-orange",
            options: true,
        },
        {
            id: 2,
            time: "17:00 - 17:30",
            col2: "Lorem ipsum",
            col3: "Lorem ipsum",
            col4: "Lorem ipsum",
            col5: "Lorem ipsum",
            col6: "Lorem ipsum",
            icon: "phone",
            status: "status-green",
            options: true,
        },
        {
            id: 3,
            time: "15:30 - 17:00",
            col2: "Lorem ipsum",
            col3: "Lorem ipsum",
            col4: "Lorem ipsum",
            col5: "Lorem ipsum",
            col6: "Lorem ipsum",
            icon: "desktop",
            status: "status-grey",
            options: true,
        },
        {
            id: 4,
            time: "17:30",
            col2: "Lorem ipsum",
            col3: "Lorem ipsum",
            col4: "Lorem ipsum",
            col5: "Lorem ipsum",
            col6: "Lorem ipsum",
            icon: "desktop",
            status: "status-orange",
            options: true,
        },
        {
            id: 5,
            time: "17:00 - 17:30",
            col2: "Lorem ipsum",
            col3: "Lorem ipsum",
            col4: "Lorem ipsum",
            col5: "Lorem ipsum",
            col6: "Lorem ipsum",
            icon: "phone",
            status: "status-green",
            options: true,
        },
        {
            id: 6,
            time: "15:30 - 17:00",
            col2: "Lorem ipsum",
            col3: "Lorem ipsum",
            col4: "Lorem ipsum",
            col5: "Lorem ipsum",
            col6: "Lorem ipsum",
            icon: "desktop",
            status: "status-grey",
            options: true,
        },
        {
            id: 7,
            time: "17:30",
            col2: "Lorem ipsum",
            col3: "Lorem ipsum",
            col4: "Lorem ipsum",
            col5: "Lorem ipsum",
            col6: "Lorem ipsum",
            icon: "desktop",
            status: "status-orange",
            options: true,
        },
        {
            id: 8,
            time: "17:00 - 17:30",
            col2: "Lorem ipsum",
            col3: "Lorem ipsum",
            col4: "Lorem ipsum",
            col5: "Lorem ipsum",
            col6: "Lorem ipsum",
            icon: "phone",
            status: "status-green",
            options: true,
        },
        {
            id: 9,
            time: "15:30 - 17:00",
            col2: "Lorem ipsum",
            col3: "Lorem ipsum",
            col4: "Lorem ipsum",
            col5: "Lorem ipsum",
            col6: "Lorem ipsum",
            icon: "desktop",
            status: "status-grey",
            options: true,
        },
        {
            id: 10,
            time: "17:30",
            col2: "Lorem ipsum",
            col3: "Lorem ipsum",
            col4: "Lorem ipsum",
            col5: "Lorem ipsum",
            col6: "Lorem ipsum",
            icon: "desktop",
            status: "status-orange",
            options: true,
        },
        {
            id: 11,
            time: "17:00 - 17:30",
            col2: "Lorem ipsum",
            col3: "Lorem ipsum",
            col4: "Lorem ipsum",
            col5: "Lorem ipsum",
            col6: "Lorem ipsum",
            icon: "phone",
            status: "status-green",
            options: true,
        },
        {
            id: 12,
            time: "15:30 - 17:00",
            col2: "Lorem ipsum",
            col3: "Lorem ipsum",
            col4: "Lorem ipsum",
            col5: "Lorem ipsum",
            col6: "Lorem ipsum",
            icon: "desktop",
            status: "status-grey",
            options: true,
        },
    ];

    const handleDateSelect = (date) => {
        setCalendarValue(date);
        setSelectedDate(
            new Intl.DateTimeFormat("pt-BR", { dateStyle: "medium" }).format(
                date
            )
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleModal = (e) => {
        e.preventDefault();
        setModalActive(!modalActive);
    };

    return (
        <div className="table">
            <div className="table__title">
                <h2>Condomínios</h2>
                <div className="table__buttons">
                    <div className="table__date">
                        <div className="table__arrow">
                            <FiChevronLeft size={20} color="#666E7D" />
                        </div>
                        <div
                            className="table__day"
                            onClick={() => setCalendarActive(!calendarActive)}
                        >
                            <p>{selectedDate}</p>
                            <span>
                                Hoje
                                {calendarActive ? (
                                    <FiChevronUp size={16} color="#666E7D" />
                                ) : (
                                    <FiChevronDown size={16} color="#666E7D" />
                                )}
                            </span>
                        </div>
                        <div className="table__arrow">
                            <FiChevronRight size={20} color="#666E7D" />
                        </div>
                    </div>
                    <div
                        className={`table__calendar ${
                            calendarActive ? "active" : ""
                        }`}
                    >
                        <Calendar
                            onChange={handleDateSelect}
                            value={calendarValue}
                        />
                    </div>
                    <button
                        className="table__button"
                        onClick={(e) => handleModal(e)}
                    >
                        <FaPlus size={18} color="#fff" />
                        Novo cadastro
                    </button>
                </div>
            </div>
            <div className="table__content">
                <DataGrid
                    checkboxSelection
                    rows={rows}
                    columns={columns}
                    headerClassName="table-header"
                />
            </div>
            {modalActive && (
                <div className="modal">
                    <div
                        className="modal__out"
                        onClick={(e) => handleModal(e)}
                    ></div>
                    <div className="modal__content">
                        <div className="modal__title">
                            <BsBuildings size={50} color={config[2].active ? "#fff" : "#000"} />
                            <h2>Cadastro de condomínio</h2>
                        </div>
                        <div className="modal__form">
                            <form onSubmit={handleSubmit}>
                                <div className="modal__row">
                                    <div className="modal__field">
                                        <label htmlFor="adm">
                                            Administradora
                                        </label>
                                        <input
                                            type="text"
                                            name="adm"
                                            id="adm"
                                            value={adm}
                                            onChange={(e) =>
                                                setAdm(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="modal__row grid-1-3">
                                    <div className="modal__field">
                                        <label htmlFor="reference">
                                            Referência
                                        </label>
                                        <input
                                            type="text"
                                            name="reference"
                                            id="reference"
                                            value={reference}
                                            onChange={(e) =>
                                                setReference(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="modal__field">
                                        <label htmlFor="name">Nome</label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="modal__row grid-2-4">
                                    <div className="modal__field">
                                        <label htmlFor="cnpj">CNPJ</label>
                                        <InputMask
                                            type="text"
                                            name="cnpj"
                                            id="cnpj"
                                            mask="99.999.999/9999-99"
                                            value={cnpj}
                                            onChange={(e) =>
                                                setCnpj(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="modal__field">
                                        <label htmlFor="social">
                                            Razão Social
                                        </label>
                                        <input
                                            type="text"
                                            name="social"
                                            id="social"
                                            value={social}
                                            onChange={(e) =>
                                                setSocial(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="modal__row grid-1-3">
                                    <div className="modal__field">
                                        <label htmlFor="cep">CEP</label>
                                        <InputMask
                                            type="text"
                                            name="cep"
                                            id="cep"
                                            mask="99999-999"
                                            value={cep}
                                            onChange={(e) =>
                                                setCep(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="modal__field">
                                        <label htmlFor="address">
                                            Endereço
                                        </label>
                                        <input
                                            type="text"
                                            name="address"
                                            id="address"
                                            value={address}
                                            onChange={(e) =>
                                                setAddress(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="modal__row grid-1-2-3">
                                    <div className="modal__field">
                                        <label htmlFor="number">Número</label>
                                        <input
                                            type="text"
                                            name="number"
                                            id="number"
                                            value={number}
                                            onChange={(e) =>
                                                setNumber(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="modal__field">
                                        <label htmlFor="address">Bairro</label>
                                        <input
                                            type="text"
                                            name="address"
                                            id="address"
                                            value={address}
                                            onChange={(e) =>
                                                setAddress(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="modal__field">
                                        <label htmlFor="complement">
                                            Complemento
                                        </label>
                                        <input
                                            type="text"
                                            name="complement"
                                            id="complement"
                                            value={complement}
                                            onChange={(e) =>
                                                setComplement(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="modal__row grid-2-4">
                                    <div className="modal__field">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="modal__field">
                                        <label htmlFor="phone">Telefone</label>
                                        <InputMask
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            mask="(99) 99999-9999"
                                            value={phone}
                                            onChange={(e) =>
                                                setPhone(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="modal__button">
                                    Salvar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Condominiums;
