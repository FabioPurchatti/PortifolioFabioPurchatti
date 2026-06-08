import './Titulos.css'

function Titulos({ id, children }) {
    return (
        <div id={id} className="titulo">
            <h2>{children}</h2>
        </div>
    )

}

export default Titulos