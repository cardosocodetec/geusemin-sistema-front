import { useContext, useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";

import "./index.css";

const loginBg = "./bg-login.png";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState(false);

    const { setUserLogged } = useContext(LoginContext);

    const navigate = useNavigate();

    useEffect(() => {
        localStorage.getItem("isLogged") === "true" && navigate("/dashboard");
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === "teste@codelinetec.com.br" && password === "123") {
            setUserLogged(true);
            setLoginError(false);
            localStorage.setItem("isLogged", true);
            navigate("/dashboard");
        } else {
            setUserLogged(false);
            setLoginError(true);
        }
    };

    const handleShowPassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };

    return (
        <div
            className="login"
            style={{
                backgroundImage: `url(${loginBg})`,
                backgroundSize: "cover",
            }}
        >
            <div className="login__box">
                <div className="login__logo">
                    <img src="./logotipo-geusemin.png" alt="" />
                </div>
                <h2>Bem vindo de volta</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="login__field">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="login__field">
                        <label htmlFor="password">Senha</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            onClick={(e) => handleShowPassword(e)}
                            className="login__show"
                        >
                            {showPassword ? (
                                <AiOutlineEyeInvisible
                                    size={24}
                                    color="#001A72"
                                />
                            ) : (
                                <AiOutlineEye size={24} color="#001A72" />
                            )}
                        </button>
                    </div>
                    {loginError && (
                        <div className="login__error">
                            <p>Email ou senha inválidos</p>
                        </div>
                    )}
                    <div className="login__checkbox">
                        <label htmlFor="remember">
                            <input
                                type="checkbox"
                                name="remember"
                                id="remember"
                                checked={isChecked}
                                onChange={() => setIsChecked(!isChecked)}
                            />
                            <span className="checkbox-custom"></span>
                            Lembrar-me
                        </label>
                    </div>
                    <button className="login__submit" type="submit">
                        Login
                    </button>
                </form>
                <Link to="/forgot" className="login__forgot">
                    Esqueceu sua senha?
                </Link>
            </div>
        </div>
    );
};

export default Login;
