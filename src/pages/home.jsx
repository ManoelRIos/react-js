import '../styles/home.css'
import '../styles/global.css'

import illustrationImg from '../assets/images/hero-img.svg'



export function Home(){

  function login(){
    
  }

  return(
    <div id="home-login">
      <aside>
        <img src={illustrationImg} alt="Ilustração de atendimento do restaurante" />
        <div id="back-img"></div>
        <h2>Atendimento automatizado.</h2>
        <p>Sua experiência com atendimento como você nunca viu.</p>
      </aside>

      <main>
        <div className="main-content">
          <img src="" alt="Logo" />
          <form onSubmit={login}>
            <input 
            type="text"
            placeholder="Nome" 
            />
            <input type="text"
            placeholder="Mesa" 
            />
            <button>Entrar</button>
          </form>      
        </div>
      </main>
    </div>
  );
  
}