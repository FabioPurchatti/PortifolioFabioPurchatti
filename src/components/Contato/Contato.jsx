import './Contato.css'

function Contato({ contato }) {
    return (
        <section className="containerdois">
            <div className="linkedin">
                <a href={contato.pagina} target="_blank" rel="noopener noreferrer">
                    <img src={contato.capa} alt={contato.nome} ></img></a>
            </div>

        </section >
    )
}

export default Contato 