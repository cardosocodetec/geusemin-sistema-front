import { useContext, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { BsBuildings } from "react-icons/bs";
import { PiNotePencilBold, PiBell } from "react-icons/pi";
import { HiOutlineUserGroup, HiOutlineCog } from "react-icons/hi";
import { TbTie, TbGavel, TbLogin, TbLogout, TbUserCog } from "react-icons/tb";
import { RiUserSearchLine } from "react-icons/ri";
import { AiOutlineDollar, AiOutlineUser } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import InputMask from "react-input-mask";
import { LoginContext } from "../../context/LoginContext";

import "./index.css";

const logo = "./logotipo-geusemin.png";
const userImage = "./user.png";

const Menu = () => {
    const [submenuActive, setSubmenuActive] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const [modalOperator, setModalOperator] = useState("");
    const [modalClient, setModalClient] = useState("");
    const [modalAnalysis, setModalAnalysis] = useState("");
    const [nameOperator, setNameOperator] = useState("");
    const [emailOperator, setEmailOperator] = useState("");
    const [cpfOperator, setCpfOperator] = useState("");
    const [doc, setDoc] = useState("");
    const [type, setType] = useState("");
    const [observation, setObservation] = useState("");
    const [nameClient, setNameClient] = useState("");
    const [emailClient, setEmailClient] = useState("");
    const [passwordClient, setPasswordClient] = useState("");
    const [confirmPasswordClient, setConfirmPasswordClient] = useState("");
    const [nameAnalysis, setNameAnalysis] = useState("");
    const [birthAnalysis, setBirthAnalysis] = useState("");
    const [motherAnalysis, setMotherAnalysis] = useState("");
    const [docAnalysis, setDocAnalysis] = useState("");
    const [cpfAnalisys, setCpfAnalisys] = useState("");

    const { config } = useContext(LoginContext);

    const handleSubmenu = () => {
        setSubmenuActive(!submenuActive);
    };

    const handleMenu = () => {
        setMenuActive(!menuActive);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleModalOperator = (e) => {
        e.preventDefault();
        setModalAnalysis(false);
        setModalClient(false);
        setModalOperator(!modalOperator);
    };

    const handleModalClient = (e) => {
        e.preventDefault();
        setModalAnalysis(false);
        setModalOperator(false);
        setModalClient(!modalClient);
    };

    const handleModalAnalysis = (e) => {
        e.preventDefault();
        setModalClient(false);
        setModalOperator(false);
        setModalAnalysis(!modalAnalysis);
    };

    return (
        <div className="menu">
            <div className="menu__head">
                <div
                    className={`menu__burger ${menuActive ? "active" : ""}`}
                    onClick={handleMenu}
                >
                    <span className="top-line"></span>
                    <span className="center-line"></span>
                    <span className="bottom-line"></span>
                </div>
                <div className="menu__logo">
                    <img src={logo} alt="" />
                </div>
                <Link to="/profile" className="menu__user">
                    <div className="menu__perfil">
                        <img src={userImage} alt="" />
                    </div>
                    <div className="menu__profile">
                        <h3>Matheus Cardoso</h3>
                        <p>matheuscardoso@geusemin.com</p>
                    </div>
                </Link>
            </div>
            <div className={`sidebar ${menuActive ? "active" : ""}`}>
                <div className="sidebar__items">
                    <div className="sidebar__group">
                        <NavLink to="/dashboard">
                            {({ isActive }) => (
                                <>
                                    <IoHomeOutline
                                        size={30}
                                        color={isActive || config[2].active ? "#fff" : "#5A5A5F"}
                                    />
                                    <p>Dashboard</p>
                                </>
                            )}
                        </NavLink>
                        <NavLink to="/condominiums">
                            {({ isActive }) => (
                                <>
                                    <BsBuildings
                                        size={30}
                                        color={isActive || config[2].active ? "#fff" : "#5A5A5F"}
                                    />
                                    <p>Condominios</p>
                                </>
                            )}
                        </NavLink>
                        <NavLink to="/units">
                            {({ isActive }) => (
                                <>
                                    <PiNotePencilBold
                                        size={30}
                                        color={isActive || config[2].active ? "#fff" : "#5A5A5F"}
                                    />
                                    <p>Unidades</p>
                                </>
                            )}
                        </NavLink>
                        <NavLink to="/residents">
                            {({ isActive }) => (
                                <>
                                    <HiOutlineUserGroup
                                        size={30}
                                        color={isActive || config[2].active ? "#fff" : "#5A5A5F"}
                                    />
                                    <p>Moradores</p>
                                </>
                            )}
                        </NavLink>
                        <NavLink to="/manager">
                            {({ isActive }) => (
                                <>
                                    <TbUserCog
                                        size={30}
                                        color={isActive || config[2].active ? "#fff" : "#5A5A5F"}
                                    />
                                    <p>Administradora</p>
                                </>
                            )}
                        </NavLink>
                        <NavLink to="/trustees">
                            {({ isActive }) => (
                                <>
                                    <TbTie
                                        size={30}
                                        color={isActive || config[2].active ? "#fff" : "#5A5A5F"}
                                    />
                                    <p>Síndicos</p>
                                </>
                            )}
                        </NavLink>
                        <NavLink to="/legal">
                            {({ isActive }) => (
                                <>
                                    <TbGavel
                                        size={30}
                                        color={isActive || config[2].active ? "#fff" : "#5A5A5F"}
                                    />
                                    <p>Assessoria Jurídica</p>
                                </>
                            )}
                        </NavLink>
                        <div className="submenu">
                            <div
                                className={`submenu__head ${
                                    submenuActive ? "active" : ""
                                }`}
                                onClick={handleSubmenu}
                            >
                                <RiUserSearchLine size={30} color={config[2].active ? "#fff" : "#5A5A5F"} />
                                <p>Investigação Social</p>
                            </div>
                            <div
                                className={`submenu__content ${
                                    submenuActive ? "active" : ""
                                }`}
                            >
                                <div
                                    className="submenu__item"
                                    onClick={(e) => handleModalOperator(e)}
                                >
                                    <p>Operador</p>
                                </div>
                                <div
                                    className="submenu__item"
                                    onClick={(e) => handleModalClient(e)}
                                >
                                    <p>Cliente</p>
                                </div>
                                <div
                                    className="submenu__item"
                                    onClick={(e) => handleModalAnalysis(e)}
                                >
                                    <p>Análise</p>
                                </div>
                            </div>
                        </div>
                        <NavLink to="/charge">
                            {({ isActive }) => (
                                <>
                                    <AiOutlineDollar
                                        size={30}
                                        color={isActive || config[2].active ? "#fff" : "#5A5A5F"}
                                    />
                                    <p>Cobranças</p>
                                </>
                            )}
                        </NavLink>
                        <NavLink to="/entries">
                            {({ isActive }) => (
                                <>
                                    <TbLogin
                                        size={30}
                                        color={isActive || config[2].active ? "#fff" : "#5A5A5F"}
                                    />
                                    <p>Entradas</p>
                                </>
                            )}
                        </NavLink>
                        <NavLink to="/outcomes">
                            {({ isActive }) => (
                                <>
                                    <TbLogout
                                        size={30}
                                        color={isActive || config[2].active ? "#fff" : "#5A5A5F"}
                                    />
                                    <p>Despesas</p>
                                </>
                            )}
                        </NavLink>
                    </div>
                    <div className="sidebar__group">
                        <NavLink to="/notifications">
                            {({ isActive }) => (
                                <>
                                    <PiBell
                                        size={30}
                                        color={isActive || config[2].active ? "#fff" : "#5A5A5F"}
                                    />
                                    <p>Notificaticações</p>
                                    <span>2</span>
                                </>
                            )}
                        </NavLink>
                        <NavLink to="/profile">
                            {({ isActive }) => (
                                <>
                                    <AiOutlineUser
                                        size={30}
                                        color={isActive || config[2].active ? "#fff" : "#5A5A5F"}
                                    />
                                    <p>Perfil</p>
                                </>
                            )}
                        </NavLink>
                        <NavLink to="/configurations">
                            {({ isActive }) => (
                                <>
                                    <HiOutlineCog
                                        size={30}
                                        color={isActive || config[2].active ? "#fff" : "#5A5A5F"}
                                    />
                                    <p>Configurações</p>
                                </>
                            )}
                        </NavLink>
                    </div>
                </div>
            </div>
            {modalOperator && (
                <div className="modal">
                    <div
                        className="modal__out"
                        onClick={(e) => handleModalOperator(e)}
                    ></div>
                    <div className="modal__content">
                        <div className="modal__title">
                            <RiUserSearchLine size={50} color={config[2].active ? "#fff" : "#000"} />
                            <h2>Operador</h2>
                        </div>
                        <div className="modal__form">
                            <form onSubmit={handleSubmit}>
                                <div className="modal__row">
                                    <div className="modal__field">
                                        <label htmlFor="nameOperator">
                                            Nome completo
                                        </label>
                                        <input
                                            type="text"
                                            name="nameOperator"
                                            id="nameOperator"
                                            value={nameOperator}
                                            onChange={(e) =>
                                                setNameOperator(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="modal__row">
                                    <div className="modal__field">
                                        <label htmlFor="emailOperator">
                                            Email
                                        </label>
                                        <input
                                            type="text"
                                            name="emailOperator"
                                            id="emailOperator"
                                            value={emailOperator}
                                            onChange={(e) =>
                                                setEmailOperator(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="modal__row grid-1-1">
                                    <div className="modal__field">
                                        <label htmlFor="cpfOperator">CPF</label>
                                        <InputMask
                                            type="text"
                                            name="cpfOperator"
                                            id="cpfOperator"
                                            mask="999.999.999-99"
                                            value={cpfOperator}
                                            onChange={(e) =>
                                                setCpfOperator(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="modal__field">
                                        <label htmlFor="doc">
                                            Documento de identificação
                                        </label>
                                        <input
                                            type="text"
                                            name="doc"
                                            id="doc"
                                            value={doc}
                                            onChange={(e) =>
                                                setDoc(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="modal__row">
                                    <div className="modal__field">
                                        <label htmlFor="type">Tipo</label>
                                        <input
                                            type="text"
                                            name="type"
                                            id="type"
                                            value={type}
                                            onChange={(e) =>
                                                setType(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="modal__row">
                                    <div className="modal__field">
                                        <label htmlFor="observation">
                                            Observação
                                        </label>
                                        <textarea
                                            type="text"
                                            name="observation"
                                            id="observation"
                                            value={observation}
                                            onChange={(e) =>
                                                setObservation(e.target.value)
                                            }
                                        ></textarea>
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
            {modalClient && (
                <div className="modal">
                    <div
                        className="modal__out"
                        onClick={(e) => handleModalClient(e)}
                    ></div>
                    <div className="modal__content">
                        <div className="modal__title">
                            <RiUserSearchLine size={50} color={config[2].active ? "#fff" : "#000"} />
                            <h2>Cliente</h2>
                        </div>
                        <div className="modal__form">
                            <form onSubmit={handleSubmit}>
                                <div className="modal__row">
                                    <div className="modal__field">
                                        <label htmlFor="nameClient">
                                            Nome completo
                                        </label>
                                        <input
                                            type="text"
                                            name="nameClient"
                                            id="nameClient"
                                            value={nameClient}
                                            onChange={(e) =>
                                                setNameClient(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="modal__row">
                                    <div className="modal__field">
                                        <label htmlFor="emailClient">
                                            Email
                                        </label>
                                        <input
                                            type="text"
                                            name="emailClient"
                                            id="emailClient"
                                            value={emailClient}
                                            onChange={(e) =>
                                                setEmailClient(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="modal__row grid-1-1">
                                    <div className="modal__field">
                                        <label htmlFor="passwordClient">
                                            Senha
                                        </label>
                                        <input
                                            type="password"
                                            name="passwordClient"
                                            id="passwordClient"
                                            value={passwordClient}
                                            onChange={(e) =>
                                                setPasswordClient(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="modal__field">
                                        <label htmlFor="confirmPasswordClient">
                                            Confirmar senha
                                        </label>
                                        <input
                                            type="password"
                                            name="confirmPasswordClient"
                                            id="confirmPasswordClient"
                                            value={confirmPasswordClient}
                                            onChange={(e) =>
                                                setConfirmPasswordClient(
                                                    e.target.value
                                                )
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
            {modalAnalysis && (
                <div className="modal">
                    <div
                        className="modal__out"
                        onClick={(e) => handleModalAnalysis(e)}
                    ></div>
                    <div className="modal__content">
                        <div className="modal__title">
                            <RiUserSearchLine size={50} color={config[2].active ? "#fff" : "#000"} />
                            <h2>Análise</h2>
                        </div>
                        <div className="modal__form">
                            <form onSubmit={handleSubmit}>
                                <div className="modal__row">
                                    <div className="modal__field">
                                        <label htmlFor="nameAnalysis">
                                            Nome completo
                                        </label>
                                        <input
                                            type="text"
                                            name="nameAnalysis"
                                            id="nameAnalysis"
                                            value={nameAnalysis}
                                            onChange={(e) =>
                                                setNameAnalysis(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="modal__row grid-1-3">
                                    <div className="modal__field">
                                        <label htmlFor="birthAnalysis">
                                            Data de nascimento
                                        </label>
                                        <InputMask
                                            type="text"
                                            name="birthAnalysis"
                                            id="birthAnalysis"
                                            mask="99/99/9999"
                                            value={birthAnalysis}
                                            onChange={(e) =>
                                                setBirthAnalysis(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="modal__field">
                                        <label htmlFor="motherAnalysis">
                                            Nome da mãe
                                        </label>
                                        <input
                                            type="text"
                                            name="motherAnalysis"
                                            id="motherAnalysis"
                                            value={motherAnalysis}
                                            onChange={(e) =>
                                                setMotherAnalysis(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="modal__row grid-1-1">
                                    <div className="modal__field">
                                        <label htmlFor="docAnalysis">
                                            Documento de identidade
                                        </label>
                                        <InputMask
                                            type="text"
                                            name="docAnalysis"
                                            id="docAnalysis"
                                            mask="9999999999-9"
                                            value={docAnalysis}
                                            onChange={(e) =>
                                                setDocAnalysis(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="modal__field">
                                        <label htmlFor="cpfAnalisys">CPF</label>
                                        <InputMask
                                            type="text"
                                            name="cpfAnalisys"
                                            id="cpfAnalisys"
                                            mask="999.999.999-99"
                                            value={cpfAnalisys}
                                            onChange={(e) =>
                                                setCpfAnalisys(e.target.value)
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

export default Menu;
