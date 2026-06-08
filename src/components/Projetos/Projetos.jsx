import "./Projetos.css";

export function Projetos({ tema }) {
    return (
        <section className="container-de-projetos">
            <div className="projetos-container">
                <div>
                    <h4>{tema.nome}</h4>
                    <a href={tema.link} target="_blank" rel="noopener noreferrer">
                        <img src={tema.capa} alt={tema.nome} className="projetos__capa" /></a>
                </div>
            </div >
        </section>
    )
}

export default Projetos