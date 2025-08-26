import { useState } from 'react'
import './components/preview/CVPreview'
import './components/form/PersonalInfo'
import './components/preview/PersonalHeader'
import './App.css'
import PersolnalInfo from './components/form/PersonalInfo'
import PersonalHeader from './components/preview/PersonalHeader'
import CVPreview from './components/preview/CVPreview'

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
          <PersonalHeader />
          <PersolnalInfo />       
        </div>

        {/* card da direita no qual o usuário visualiza o preview */}
        <div>
          <CVPreview />
        </div>


      </main>
    </>
  )  
}

export default App
