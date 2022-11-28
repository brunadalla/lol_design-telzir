import { HomeContainer } from "./styles"
import { BsFillTelephoneFill } from "react-icons/bs"
import Form from "../../components/Form"
import { useContext } from "react"
import { Context } from "../../contexts"
import Modal from "../../components/Modal"

const Home = () => {
  const { isModalVisible } = useContext(Context)

  return (
    <HomeContainer>
      <Modal />
      <main>
        <section>
          <div>
            <BsFillTelephoneFill />
            <h1>TELZIR</h1>
          </div>
          <h3>
            With TELZIR, you can talk as long as you like at the lowest possible
            rates!
          </h3>
          <p>
            Calculate now the value of your phone call with the FaleMais plans!
          </p>
        </section>

        <section>
          <Form />
        </section>
      </main>
    </HomeContainer>
  )
}

export default Home
