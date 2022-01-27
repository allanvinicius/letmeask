import ilustra from '../assets/illustration.svg';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export function NewRoom() {
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

                    <h2>Crie uma nova sala</h2>

                    <form action="">
                        <input type="text" placeholder="Nome da sala" />

                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>

                    <p>Quer entrar em uma sala já existente? 
                        <Link to="/">Clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    );
}