import { useEffect } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import "./index.css";

const loginBg = "./bg-login.png";

const Success = () => {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.getItem("isLogged") === "true" && navigate("/dashboard");
    }, []);

    const handleContinue = (e) => {
        e.preventDefault();
        navigate("/");
    };

    return (
        <div
            className="success"
            style={{
                backgroundImage: `url(${loginBg})`,
                backgroundSize: "cover",
            }}
        >
            <div className="success__box">
                <AiOutlineCheckCircle size={164} color="#1E4178" />
                <h2>Sucesso</h2>
                <p>Sua senha foi atualizada com sucesso!</p>
                <button
                    className="success__button"
                    onClick={(e) => handleContinue(e)}
                >
                    continue
                </button>
            </div>
        </div>
    );
};

export default Success;
