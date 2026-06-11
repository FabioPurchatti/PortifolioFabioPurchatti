
import Cabecalho from './components/Cabecalho/Cabecalho.jsx'
import NomeCentral from './components/NomeCentral/NomeCentral.jsx'
import DesenvolvedorFrontend from './components/DesenvolvedorFrontEnd/DesenvolvedorFrontEnd.jsx'
import Projetos from './components/Projetos/Projetos.jsx'
import SobreMimTexto from './components/SobreMimTexto/SobreMimTexto.jsx'
import Contato from './components/Contato/Contato.jsx'
import Tecnologias from './components/Tecnologias/Tecnologias.jsx'
import Titulos from './components/Titulos/Titulos.jsx'


import './App.css'

function App() {
  const temas = [
    {
      id: 1,
      capa: "/telaportifolio.png",
      nome: "Portifólio",
      link: "https://example.com/projeto1"
    },
    {
      id: 2,
      capa: "/projetopastelimagem.png",
      nome: "Cardápio Digital Pastel Regina",
      link: "https://qr-code-cardapio-pastel.vercel.app/"
    },
    {
      id: 3,
      capa: "/apasfap.png",
      nome: "Apasfap",
      link: "https://apasfap-kappa.vercel.app/"
    },

  ];

  const contato = [
    {
      id: 1,
      capa: "/iconelinkedincolorido.png",
      nome: "Linkedin",
      pagina: "https://www.linkedin.com/in/fabiopurchatti",
    },
    {
      id: 2,
      capa: "/iconegithub120.png",
      nome: "GitHub",
      pagina: "https://github.com/FabioPurchatti",
    },


  ];

  const tecnologias = [
    {
      id: 1,
      nome: "CSS",
      imagem: "/logocss144.png",
    },
    {
      id: 2,
      nome: "HTML",
      imagem: "/logohtml144.png",
    },
    {
      id: 3,
      nome: "JavaScript",
      imagem: "/iconejs144.png",
    },
    {
      id: 4,
      nome: "React",
      imagem: "/logoreact144.png",
    },
    {
      id: 5,
      nome: "Git",
      imagem: "/logogit144.png",
    },
    {
      id: 6,
      nome: "GitHub",
      imagem: "/iconegithub120.png",
    },
    {
      id: 7,
      nome: "CSS",
      imagem: "/logocss144.png",
    },
    {
      id: 8,
      nome: "HTML",
      imagem: "/logohtml144.png",
    },
    {
      id: 9,
      nome: "JavaScript",
      imagem: "/iconejs144.png",
    },
    {
      id: 10,
      nome: "React",
      imagem: "/logoreact144.png",
    },
    {
      id: 11,
      nome: "Git",
      imagem: "/logogit144.png",
    },
    {
      id: 12,
      nome: "Git Hub",
      imagem: "/iconegithub120.png",
    },
  ];

  return (

    <>
      <Cabecalho />
      <main>
        <NomeCentral>
          Fábio Purchatti
        </NomeCentral>

        <DesenvolvedorFrontend>
          Tecnologias que utilizo
        </DesenvolvedorFrontend>
        <Tecnologias tecnologias={tecnologias} />

        < Titulos id="projetos" >
          Projetos
        </Titulos>

        <section className="container-projetos">
          {temas.map((item) => {
            return (
              <section key={item.id} >
                <Projetos tema={item} />
              </section>
            )
          })}
        </section>

        <section>
          <Titulos id="sobre">
            Sobre Mim
          </Titulos>
          <SobreMimTexto>
            <p>Olá, sou o Fábio.</p>
            <p>Sou fomado em Análise e Desenvolvimento de Sistemas e venho consolidando minha atuação como Desenvolvedor Web, com foco em Front-End. Gosto de transformar um design em código e criar interfaces que sejam não apenas funcionais, mas também seguras, inclusivas e intuitivas sempre com o objetivo de tornar a navegação mais fluida e acessível para as pessoas.</p>
            <p><strong>Acredito que a tecnologia deve ser uma aliada na construção de um mundo digital mais confiável, participativo e inclusivo.</strong></p>
            <p>Minha trajetória profissional começou no campo do Serviço Social, onde atuei por sete anos. Essa experiência me trouxe habilidades fundamentais que levo para a tecnologia: colaboração, visão sistêmica, empatia, organização de processos e gestão de dados.</p>
            <p>Em busca de evolução profissional e pessoal, resgatei um interesse que nasceu cedo aos 12 anos, quando fiz meus primeiros cursos de programação. Hoje, estou transformando essa paixão em carreira, desenvolvendo projetos que unem técnica, criatividade e um olhar atento à experiência do usuário.
              Sigo em constante aprendizado e aberto a oportunidades que me permitam contribuir com times de tecnologia que valorizem colaboração e desenvolvimento contínuo.</p>
          </SobreMimTexto>
        </section>

        <Titulos id="contato">
          Contato
        </Titulos>

        <section className="linkedin">
          {contato.map((items) => {
            return (
              <section key={items.id}>
                <Contato contato={items} />
              </section>
            )
          })}
        </section>

      </main >
    </>
  )
}

export default App
