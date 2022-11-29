import { BsFillTelephoneFill } from "react-icons/bs"
import { Toaster } from "react-hot-toast"
import "animate.css"

import Form from "../../components/Form"
import Modal from "../../components/Modal"
import { HomeContainer } from "./styles"

const Home = () => {
  return (
    <HomeContainer>
      <Toaster
        position='top-right'
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
        }}
      />
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
