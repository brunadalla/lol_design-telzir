import { useContext } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { Context } from "../../contexts"
import { ModalContainer } from "./styles"
import "animate.css"

const Modal = () => {
  const { isModalVisible, setIsModalVisible, callInfo } = useContext(Context)
  const { forHowLong, fromWhere, toWhere, withPlan, withoutPlan } = callInfo

  function closeModal() {
    setIsModalVisible(false)
  }

  return (
    <ModalContainer isModalVisible={isModalVisible}>
      <div className='modal animate__animated animate__fadeInDown'>
        <header>
          <h1>PRICES</h1>
          <button onClick={() => closeModal()}>
            <AiOutlineClose />
          </button>
        </header>

        <ul>
          <li>
            <span>Origin:</span> {fromWhere}
          </li>
          <li>
            <span>Destination:</span> {toWhere}
          </li>
          <li>
            <span>Time:</span> {forHowLong} minutes
          </li>
        </ul>

        <section>
          <div className='div-withPlan'>
            <span>$ {withPlan}</span>
            <span>with FaleMais</span>
          </div>
          <div className='div-withoutPlan'>
            <span>$ {withoutPlan}</span>
            <span>without FaleMais</span>
          </div>
        </section>
      </div>
    </ModalContainer>
  )
}

export default Modal
