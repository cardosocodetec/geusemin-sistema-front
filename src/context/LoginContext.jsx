import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

const configurationList = [
    {
        title: "Push de notificação desktop",
        desc: "Receba notificação push sobre menções, comentários, alertas, alterações de edição, fornecimento e cumprimento de metas",
        active: true,
    },
    {
        title: "Notificações por email",
        desc: "Receba notificação push sobre menções, comentários, alertas, alterações de edição, fornecimento e cumprimento de metas",
        active: false,
    },
    {
        title: "Tema escuro",
        desc: "Use as configurações do sistema para ativar o tema escuro",
        active: false,
    },
    {
        title: "Notificação sonora",
        desc: "Use as configurações do sistema para ativar o tema escuro",
        active: true,
    },
];

export const LoginProvider = ({ children }) => {
    const [userLogged, setUserLogged] = useState(false);
    const [config, setConfig] = useState(configurationList);

    useEffect(() => {
        localStorage.getItem("isLogged") === "true" && setUserLogged(true);

        if (localStorage.getItem("configs")) {
            const dataConfig = JSON.parse(localStorage.getItem("configs"));

            setConfig(dataConfig)
            console.log(config)
        }
    }, []);

    return (
        <LoginContext.Provider
            value={{ userLogged, setUserLogged, config, setConfig }}
        >
            {children}
        </LoginContext.Provider>
    );
};
