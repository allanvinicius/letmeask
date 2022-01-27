import ilustra from '../assets/illustration.svg';
import logo from '../assets/logo.svg';
import iconGoogle from '../assets/google-icon.svg';
import login from '../assets/log-in.svg';
import { useNavigate } from 'react-router-dom';
import '../styles/auth.scss';

import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';


export function Home() {
    const navigate = useNavigate();
    const { user, signInWithGoogle } = useAuth();

    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle();
        }
        navigate("/rooms/new");
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={ilustra} alt="ilustração" />
                <h1>Crie salas de Q&amp;A ao vivo</h1>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>

            <main>
                <div className="main-content">
                    <img src={logo} alt="Letmeask" />

                    <button onClick={handleCreateRoom} className="btn-sala">
                        <img src={iconGoogle} alt="icone-google" />
                        Crie sua sala com o Google
                    </button>

                    <div className="separador">
                        ou entre em uma sala
                    </div>

                    <form action="">
                        <input type="text" placeholder="Digite o código da sala" />

                        <Button type="submit">
                            <img src={login} alt="login" />
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    );
}