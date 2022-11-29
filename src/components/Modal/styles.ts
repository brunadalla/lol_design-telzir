import styled from "styled-components"

interface IModalProps {
  isModalVisible: boolean
}

export const ModalContainer = styled.div<IModalProps>`
  width: 100%;
  height: 100%;
  min-width: 320px;

  display: ${({ isModalVisible }) =>
    isModalVisible === true ? "flex" : "none"};
  align-items: center;
  justify-content: center;

  z-index: 9999;
  position: absolute;

  background-color: rgba(0, 0, 0, 0.8);

  .animate__animated.animate__fadeInDown {
    --animate-duration: 0.6s;
  }

  .modal {
    width: 100%;
    height: 40%;
    max-width: 405px;
    min-height: 333px;

    margin: 0 20px;
    padding: 20px;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;

    border-radius: 8px;

    background-color: var(--green-blue);

    header {
      width: 100%;
      min-height: 32px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      h1 {
        color: var(--white);
        font-size: 1.5rem;
        font-weight: 600;
      }

      button {
        width: 2rem;
        height: 2rem;

        border: none;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;
      }

      button:hover {
        scale: 1.1;
        cursor: pointer;
      }
    }

    ul {
      width: 100%;
      min-height: 80px;

      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: space-between;

      li {
        color: var(--white);
        font-size: 1rem;
      }

      span {
        font-weight: 600;
      }
    }

    section {
      width: 100%;
      height: 40%;
      min-height: 90px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      div {
        height: 45%;
        padding: 5px 12px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        border-radius: 8px;

        background-color: var(--dark-blue);

        span {
          color: var(--white);
          font-size: 1rem;
          font-weight: 500;
        }
      }

      .div-withoutPlan {
        background-color: var(--grey);

        span {
          color: var(--dark-blue);
        }
      }
    }
  }

  @media (min-width: 768px) {
    .modal {
      width: 20%;
      min-width: 405px;
      max-width: 500px;
      max-height: 400px;
    }
  }
`
