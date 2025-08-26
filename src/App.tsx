import { useState } from 'react'
import './App.css'

function App() {
  return(
    <>
      <header>
        <h1>Gerador de Curriculos AI</h1>
        <p>Gerador inteligente de Currículos com IA</p>
      </header>

      <main>
        {/* card da esquerda no qual o usuário preenche os dados */}
        <div>
          <section>
            <h2>Informações do Currículo</h2>
            <p>Preencha os dados e veja o previwe em tempo real</p>
          </section>

          <section>

            <h3>Dados pessoais</h3>
            <p>Informações básicas para contato</p>

            <form action="">
              <div>
                <label htmlFor="fullName">Nome Completo</label>
                <br />
                <input type="text" name="fullName" id="fullName" placeholder='Seu nome completo'/>
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <br />
                <input type="email" name="email" id="email" placeholder='seu.email@exemplo.com' />
              </div>

              <div>
                <label htmlFor="phone">Telefone</label>
                <br />
                <input type="tel" name="phone" id="phone" placeholder='(11) 99999-9999' />
              </div>

              <div>
                <label htmlFor="linkedin">LinkedIn</label>
                <br />
                <input type="text" name="linkedin" id="linkedin" placeholder='linkedin.com/in/seuperfil' />
              </div>

            </form>

          </section>          
          
        </div>

        {/* card da direita no qual o usuário visualiza o preview */}
        <div>
          <h2>Preview do Curriculo</h2>
          <p>Visualização em tempo real</p>
        </div>


      </main>
    </>
  )  
}

export default App
