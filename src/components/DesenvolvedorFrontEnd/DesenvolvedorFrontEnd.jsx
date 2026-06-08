import "./DesenvolvedorFrontEnd.css"

function DesenvolvedorFrontend({ children }) {
    return (
        <section>
            <div className="desenvolvedorFrontend">
                <h2>{children}</h2>
            </div>
        </section>
    )
}

export default DesenvolvedorFrontend