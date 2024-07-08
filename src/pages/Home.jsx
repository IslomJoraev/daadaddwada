import Profile from "../images/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
import "../css/home.css"
const Home = () => {
  return (
    <main className="container">

<div className="padding">
  <div className="flex">

      <div className="main_img">
        <img src={Profile} alt="" />
      </div>


      <div className='heva'>
        <h1>Bahadirov Abdurahmon</h1>
        <h2>Sof Dastur Muhandisi</h2>
        
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-js"></i>
        <i className="fa-brands fa-react"></i>
        <i className="fa-brands fa-html5"></i>
      </div>
  </div>

  
    

</div>


    </main>
  )
}

export default Home