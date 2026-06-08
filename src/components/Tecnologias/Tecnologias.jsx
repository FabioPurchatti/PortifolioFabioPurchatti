import './Tecnologias.css'

function Tecnologias({ tecnologias }) {
    return (
        <section className="tecnologias-container">
            <div className="icones">

                {tecnologias.map((tech) => (
                    <div className="card" key={tech.id}>
                        <img src={tech.imagem}
                            alt={`Logo ${tech.nome}`}
                        />
                        <p>{tech.nome}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Tecnologias