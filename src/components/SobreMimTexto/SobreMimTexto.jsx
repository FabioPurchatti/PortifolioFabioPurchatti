import "./SobreMimTexto.css"

function SobreMimTexto({ children }) {
    return (

        <section className="sobre-mim-texto-container">
            <div className="sobre-mim-texto">
                {children}
            </div>
        </section>
    )
}

export default SobreMimTexto 