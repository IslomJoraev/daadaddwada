
import '../css/works.css'
import Card from 'react-bootstrap/Card';



const Works = () => {
  return (
    <div className='Header_9'>
      <div className='big_box'>
        <div className='cards_7'>


          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://camo.githubusercontent.com/3795e5487dfe7c70b09b3e40c9d7a170bbb61aaec2b8bc35a2b4d0b5af1205ca/68747470733a2f2f7777772e69696d2e66722f65636f6c652d7765622f77702d636f6e74656e742f75706c6f6164732f323031372f30312f48544d4c352e6a7067" />
            <Card.Body>
              <Card.Title>HTML, css</Card.Title>
              <Card.Text>
                Men HTML, va css da qilgan saytlarim
                bu Max way, va partfolio
                va har-hil praktialar.
              </Card.Text>

            </Card.Body>



          </Card>   <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://habrastorage.org/webt/nt/sn/p0/ntsnp0tdw5g9f-dowf8toer5smc.png " />
            <Card.Body>
              <Card.Title>Javascript</Card.Title>
              <Card.Text>
                Men js yani Javascript da asosan
                sayt yoq lekin har-hil praktikalar qilganman.
              </Card.Text>

            </Card.Body>



          </Card>   <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://papode.dev/assets/img/1_fxa6ojfh2lrd7enaczicqg-1-780x439.png" />
            <Card.Body>
              <Card.Title>React </Card.Title>
              <Card.Text>
                Men Reactda asosan Partfolo va
                boshqa praektlar qilganman .
              </Card.Text>

            </Card.Body>
          </Card>

        </div>
        <div className='Works_3'>
          <h1>Works</h1>

          <div className='proektlar'>

            {

              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://maxway.uz/images/maxway_cover.png" />
                <Card.Body>
                  <Card.Title>Max Way</Card.Title>
                  <Card.Text>
                  Men HTML, va css da qilgan saytlarim
                bu Max way, va partfolio
                va har-hil praktialar.
                  </Card.Text>
                 

                </Card.Body>
              </Card>

            }



{

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src=" https://images.cnscdn.com/5/4/1/5/541510749ba4e4c2875c1043b158a51d/original.jpg" />
  <Card.Body>
    <Card.Title>praktika</Card.Title>
    <Card.Text>
    Men js yani Javascript da asosan
    sayt yoq lekin har-hil praktikalar qilganman.
    </Card.Text>
  

  </Card.Body>
</Card>

}


{

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://designnotes.blog.gov.uk/wp-content/uploads/sites/53/2020/06/Portfolio-Desk.jpg" />
  <Card.Body>
    <Card.Title>partfolio</Card.Title>
    <Card.Text>
    Men Reactda asosan Partfolo va
    boshqa praektlar qilganman .
    </Card.Text>


  </Card.Body>
</Card>


}






          </div>

        </div>
      </div>


    </div>
  )
}

export default Works