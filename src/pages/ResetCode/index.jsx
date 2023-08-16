import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";

const loginBg = "./bg-login.png";

const ResetCode = () => {
    const startTime = 65; // Tempo em segundos

    const [seconds, setSeconds] = useState(startTime);
    const [code, setCode] = useState([]);
    const [restartTime, setRestartTime] = useState(false);
    const [codeError, setCodeError] = useState(false);

    const codeInputs = [
        {
            inputIndex: 0,
        },
        {
            inputIndex: 1,
        },
        {
            inputIndex: 2,
        },
        {
            inputIndex: 3,
        },
    ];

    const codeInputRefs = useRef([]);

    const navigate = useNavigate();

    useEffect(() => {
        localStorage.getItem("isLogged") === "true" && navigate("/dashboard");

        const interval = setInterval(() => {
            setSeconds((prevSeconds) => {
                if (prevSeconds <= 0) {
                    clearInterval(interval);
                    return 0;
                } else {
                    return prevSeconds - 1;
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [restartTime]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const formattedMinutes = String(minutes).padStart(2, "0");
        const formattedSeconds = String(seconds % 60).padStart(2, "0");
        return `${formattedMinutes}:${formattedSeconds}`;
    };

    const hanldeCodeChange = (number, index) => {
        code[index] = number;
        setCode([...code]);

        if (index < 3) {
            codeInputRefs.current[index + 1].focus();
        }
    };

    const handleCodeResend = (e) => {
        e.preventDefault();
        setSeconds(startTime);
        setRestartTime(true);
        setCodeError(false);
        setCode([]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (code.length > 0 && seconds > 0) {
            setCodeError(false);
            navigate("/new-password");
        } else {
            setCodeError(true);
        }
    };

    return (
        <div
            className="code"
            style={{
                backgroundImage: `url(${loginBg})`,
                backgroundSize: "cover",
            }}
        >
            <div className="code__box">
                <h2>Código de verificação</h2>
                <p>Insira o código de 4 digitios</p>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="code__items">
                        {codeInputs.map((input) => (
                            <input
                                className="code__input"
                                type="text"
                                name={input.inputIndex}
                                id={input.inputIndex}
                                key={input.inputIndex}
                                maxLength={1}
                                value={code[input.inputIndex]}
                                onChange={(e) =>
                                    hanldeCodeChange(
                                        e.target.value,
                                        input.inputIndex,
                                    )
                                }
                                ref={(ref) =>
                                    (codeInputRefs.current[input.inputIndex] =
                                        ref)
                                }
                            />
                        ))}
                    </div>
                    <div className="code__countdown">
                        <p>{formatTime(seconds)}</p>
                    </div>
                    {codeError && (
                        <div className="code__error">
                            <p>Tempo esgotado ou codigo inválido</p>
                        </div>
                    )}
                    <button className="code__submit" type="submit">
                        continue
                    </button>
                </form>
                <div className="code__resend">
                    <p>Se você não recebeu clique aqui!</p>
                    <button onClick={(e) => handleCodeResend(e)}>
                        Reenviar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResetCode;
