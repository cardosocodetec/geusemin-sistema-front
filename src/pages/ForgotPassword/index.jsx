import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";

const loginBg = "./bg-login.png";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        localStorage.getItem("isLogged") === "true" && navigate("/dashboard");
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email !== "") {
            setEmailError(false);
            navigate("/reset-code");
        } else {
            setEmailError(true);
        }
    };

    return (
        <div
            className="forgot"
            style={{
                backgroundImage: `url(${loginBg})`,
                backgroundSize: "cover",
            }}
        >
            <div className="forgot__box">
                <h2>Esqueci minha senha</h2>
                <p>
                    Enviaremos um código de 4 digitos para o seu e-mail para
                    continuarmos o processo
                </p>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="forgot__field">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {emailError && (
                        <div className="forgot__error">
                            <p>Email inválido</p>
                        </div>
                    )}
                    <button className="forgot__submit" type="submit">
                        continue
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
