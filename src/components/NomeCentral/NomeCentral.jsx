import "./NomeCentral.css"

function NomeCentral({ children }) {
    return (
        <div id="desenvolvedor" className="nomeCentral">
            <h1>{children}</h1>
        </div>
    )
}

export default NomeCentral