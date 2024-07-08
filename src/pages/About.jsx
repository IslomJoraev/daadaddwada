
import '../css/about.css'

const About = () => {
  return (
      <div className="about">
          <h1>Abdurahmon Bahadirov</h1>
          <p>Mening ismim Bahodirov Abdurahmon men 12 yoshdaman 2012 chi yilman va men 11 oylik oqish davomida men online js , figma , html , css ,  javascript , react js , men shu dasturlash tilaridan proectlar qilganman.</p>
          <div className="skills">

            <div className="skill">
                  <h3>HTMl</h3>
                  <hr style={{width:'70%'}}/>
            </div>

            <div className="skill">
                  <h3>CSS</h3>
                  <hr style={{width:'60%'}}/>
            </div>

            <div className="skill">
                  <h3>JavaScript</h3>
                  <hr style={{width:'40%'}}/>
            </div>

            <div className="skill">
                  <h3>React JS</h3>
                  <hr style={{width:'60%'}}/>
            </div>

            <div className="skill">
                  <h3>Figma</h3>
                  <hr style={{width:'70%'}}/>
            </div>

          </div>

          <div className='fikirlarrim'>
            <h1>Bular Nima ?</h1>
            <p>
                  Kopchilikda savol tugiladi bular nima deb 11 oylik oqish davomida mening organgan va olgan bilimlarim va bular mening shukungacha otgan mavzularimizni necha foyiz bilishimni tushun tirishning qisqacha yoli .
            </p>
            <h2>HTML ; 70%</h2>
            <br />
            <h2>css ; 60%</h2>
            <br />
            <h2>JavaScript ; 40%</h2>
            <br />
            <h2>React ; 60%</h2>
            <br />
            <h2>Figma ; 90%</h2>
            
            
          </div>
      </div>
  )
}

export default About