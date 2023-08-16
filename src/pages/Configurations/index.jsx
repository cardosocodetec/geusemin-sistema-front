import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";

import "./index.css";

const Configurations = () => {
    const { config, setConfig } = useContext(LoginContext);

    const handleToggle = (index) => {
        config[index].active = !config[index].active;
        setConfig([...config]);

        localStorage.setItem("configs", JSON.stringify(config));
    };

    return (
        <div className="configurations">
            <h2>Configurações</h2>
            <div className="configurations__items">
                {config.map((item, index) => (
                    <div key={index} className="configurations__item">
                        <div className="configurations__info">
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                        <div
                            className={`configurations__toggle ${
                                item.active ? "active" : ""
                            }`}
                            onClick={() => handleToggle(index)}
                        >
                            <span
                                className={`configurations__circle ${
                                    item.active ? "active" : ""
                                }`}
                            ></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Configurations;
