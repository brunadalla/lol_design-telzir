import styled from "styled-components"

interface IModalProps {
  isModalVisible: boolean
}

export const ModalContainer = styled.div<IModalProps>`
  width: 100%;
  height: 100%;

  display: ${({ isModalVisible }) =>
    isModalVisible === true ? "flex" : "none"};
  justify-content: center;

  position: absolute;
  z-index: 9999;

  background-color: rgba(0, 0, 0, 0.8);
`
