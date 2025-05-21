
import './App.css'
import { useState } from 'react'
import { Botton } from './components/Botton.jsx'
import images from './assets/images.jsx'

function App() {

  let habilidades = [
    {skil: "Desarrollador web y tecnólogo en electrónica, apasionado por crear soluciones digitales funcionales e intuitivas."},
    {skil: "💻 Enfocado en desarrollo:Frontend Developer con enfoque en HTML, CSS, JavaScript y React. Transformo ideas en interfaces dinámicas y atractivas."},
    {skil: "Fusiono tecnología y creatividad para construir experiencias digitales únicas. Siempre aprendiendo, siempre creando."},

    {skil: "Ingeniero Electronico"},
    {skil: "Desarrollador Web"},
    {skil: "Desarrollador Full Stack"},
    {skil: "Soy Batman"}

  ]

  const [skills, setskills] = useState(false);

  function handleToggle (){
    setskills(!skills);
  }


  return (
    <>
      {!skills ? (<> <img  id='foto' src={images.image1} alt="foto" /><h2 style={{fontStyle: 'italic', position: 'absolute', top: 205, left: 140,}}>William Alfonso Apache Caro</h2>
      <h3 style={{fontStyle: 'italic', position: 'absolute', top: 260, left: 199,}}>Ingeniero Electronico</h3>
      <h4 style={{fontStyle: 'italic', position: 'absolute', top: 305, left: 173,}}>William07apache@gmail.com</h4>
      <h4 style={{fontStyle: 'italic', position: 'absolute', top: 350, left: 230,}}>Cel: 3112456846</h4>
      <a href="https://www.facebook.com/" target='_blank'><img className='redes' src={images.image2} alt="facebok" /></a>
      <a href="https://github.com/" target='_blank'><img className='redes' src={images.image3} alt="github" /></a>
      <a href="https://www.linkedin.com/in/william-apache-desarrollador-web-fullstack/" target='_blank'><img className='redes' src={images.image4} alt="linkedin" /></a>
      
      <Botton func={handleToggle} text={"perfil"}></Botton>
      </>
      

    ) : (
       <> 
       
    
    
    <h2 style={{fontStyle: 'italic', position: 'absolute', top: 30, left: 235,}}>Habilidades</h2>

    <ul   style={{fontStyle: 'italic',position: 'absolute',top: 110,eft: 10,
    fontSize: '1.2rem',      // Tamaño de letra más grande (ajustable)
    fontWeight: 'bold',      // Letra en negrilla    
    maxWidth: '500px'        // Para que no se extienda demasiado
  }}>
      {
        habilidades.map((user) =>(
          <li >{user.skil}</li>
        ))
      }
    </ul>

    
    </>)}
    

    <Botton text={skills ? 'Perfil' : 'Habilidades'}  func={handleToggle}></Botton>
    </>



  )
}

export default App
