import Logo from '../../assets/images/logo-s.png'
import "../Home/index.scss"
import { Link } from 'react-router-dom';
const Home =()=>{
return(
    <div className="container home-page">
<div className="text-zone">
    <h1>Hi,<br/> I'm 
    <img src={Logo} alt="developer" />
    Naman
    <br />
    Web Designer
    </h1>
    <h2>Frontend Developer / UX/UI Designer</h2>
    <Link to="/contact" className="flat-button">Contact Me</Link>
</div>
    </div>
);

}
export default Home


