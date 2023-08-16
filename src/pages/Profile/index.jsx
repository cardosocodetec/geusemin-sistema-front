import { useState } from "react";
import InputMask from "react-input-mask";

import "./index.css";

const userImage = "./user.png";

const Profile = () => {
    const [photo, setPhoto] = useState(userImage);
    const [photoUrl, setPhotoUrl] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [newPassword, setNewPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [oldPassword, setOldPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleEditPhoto = (e) => {
        const file = e.target.files[0];
        setPhotoUrl(file);
        setPhoto(URL.createObjectURL(file));
    };

    return (
        <div className="profile">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="profile__infos">
                    <div className="profile__image">
                        <img src={photo} alt="" />
                    </div>
                    <div className="profile__name">
                        <h3>Matheus Cardoso</h3>
                    </div>
                    <div className="profile__file">
                        <label className="button-outline" htmlFor="photo">
                            Editar perfil
                        </label>
                        <input
                            type="file"
                            name="photo"
                            id="photo"
                            onChange={(e) => handleEditPhoto(e)}
                        />
                    </div>
                </div>
                <div className="profile__edit">
                    <div className="profile__field">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="profile__field">
                        <label htmlFor="phone">Número de contato</label>
                        <InputMask
                            type="text"
                            name="phone"
                            id="phone"
                            mask="(99) 99999-9999"
                            placeholder="Insira seu número + DDD"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="profile__field">
                        <label htmlFor="new-password">Nova senha</label>
                        <input
                            type="password"
                            name="new-password"
                            id="new-password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </div>
                    <div className="profile__field">
                        <label htmlFor="confirm-password">
                            Repita nova senha
                        </label>
                        <input
                            type="password"
                            name="confirm-password"
                            id="confirm-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className="profile__field">
                        <label htmlFor="old-password">
                            Insira sua senha antiga
                        </label>
                        <input
                            type="password"
                            name="old-password"
                            id="old-password"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Atualizar</button>
                </div>
            </form>
        </div>
    );
};

export default Profile;
