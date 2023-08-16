import { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import "./index.css";

const loginBg = "./bg-login.png";

const NewPassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [errorEquality, setErrorEquality] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        localStorage.getItem("isLogged") === "true" && navigate("/dashboard");
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (newPassword !== "") {
            setPasswordError(false);
        } else {
            setPasswordError(true);
            return;
        }

        if (confirmPassword === newPassword) {
            setErrorEquality(false);
            navigate("/success");
        } else {
            setErrorEquality(true);
        }
    };

    const handleShowPassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };

    const handleShowConfirmPassword = (e) => {
        e.preventDefault();
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div
            className="password"
            style={{
                backgroundImage: `url(${loginBg})`,
                backgroundSize: "cover",
            }}
        >
            <div className="password__box">
                <h2>Nova Senha</h2>
                <p>
                    Insira uma nova senha para sua conta então vocês poderá
                    acessar e utilizar a plataforma.
                </p>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="password__field">
                        <label htmlFor="password">Nova senha</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <button
                            onClick={(e) => handleShowPassword(e)}
                            className="password__show"
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
                    <div className="password__field">
                        <label htmlFor="password">Repita sua nova senha</label>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button
                            onClick={(e) => handleShowConfirmPassword(e)}
                            className="password__show"
                        >
                            {showConfirmPassword ? (
                                <AiOutlineEyeInvisible
                                    size={24}
                                    color="#001A72"
                                />
                            ) : (
                                <AiOutlineEye size={24} color="#001A72" />
                            )}
                        </button>
                    </div>
                    {passwordError && (
                        <div className="password__error">
                            <p>Senha inválida</p>
                        </div>
                    )}
                    {errorEquality && (
                        <div className="password__error">
                            <p>Senhas não correspondem</p>
                        </div>
                    )}
                    <button className="password__submit" type="submit">
                        Atualizar a senha
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewPassword;
