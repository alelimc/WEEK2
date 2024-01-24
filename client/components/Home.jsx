import anmArmoj from '../src/assets/anmArmoj.jpg';
import hire from '../src/assets/hire.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'

export default function Home() {
     return <>
     
     <section id="intro">
          <div className="introContent">
          <span className="hello">Hello!</span><br/>
          <span className="introText">I'm <span className="introName">Aleli Macapagal</span> 
          <img src={anmArmoj} alt="profile" className="bbg" width="450" height="450" align="right" />
          <br/>Website Designer</span>
          <p className="introPara">I am a skilled web designer with experience in creating visually appealing user friendly websites.</p>
          <Link><button className="btn"><img src={hire} alt="Hire me" width="100px" height="100px"/></button></Link>
          
          </div>
          
     </section>
    

     </>
     }
    