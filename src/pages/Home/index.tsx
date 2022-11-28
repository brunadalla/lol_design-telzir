import { HomeContainer } from "./styles"
import { BsFillTelephoneFill } from "react-icons/bs"
import Form from "../../components/Form"
import Modal from "../../components/Modal"
import "animate.css"

const Home = () => {
  return (
    <HomeContainer>
      <Modal />
      <main className='animate__animated animate__fadeIn'>
        <section className='section-info'>
          <div>
            <BsFillTelephoneFill color='white' size={"1.7rem"} />
            <h1>TELZIR</h1>
          </div>
          <h3>
            With TELZIR, you can talk as long as you like at the lowest possible
            rates!
          </h3>
          <p>
            Calculate now the value of your phone call with the{" "}
            <span>FaleMais</span> plans!
          </p>
        </section>

        <section className='section-form'>
          <Form />
        </section>
      </main>
    </HomeContainer>
  )
}

export default Home
