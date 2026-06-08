import './Cabecalho.css'
import fotoPerfil from '../../assets/Foto Fábio sem fundo.png'

function Cabecalho() {
    return (
        <header className="cabecalho">
            <nav className="links">
                <a href="#desenvolvedor">Home</a>
                <a href="#projetos">Projetos</a>
                <a href="#sobre">Sobre</a>
                <a href="#contato">Contato</a>
            </nav>
            <img src={fotoPerfil} alt="Imagem de um homem com um notebook" className="cabecalho__imagem" />
        </header>
    )
}


export default Cabecalho
