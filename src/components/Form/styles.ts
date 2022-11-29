import styled from "styled-components"

export const FormContainer = styled.form`
  width: 100%;
  height: 100%;
  max-width: 570px;
  max-height: 400px;

  gap: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    width: 100%;
    height: 15%;
    min-height: 70px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    label {
      color: var(--dark-blue);
      font-size: 1rem;
      font-weight: 600;
    }

    select,
    input {
      width: 100%;
      height: 30%;
      min-height: 26px;

      padding: 0 5px;

      border: unset;
      outline: unset;
      border-radius: 8px;

      color: var(--dark-blue);
      background-color: var(--white);
    }

    input {
      padding: 10px;
    }

    select > option {
      color: var(--dark-blue);
    }

    p {
      min-height: 14.5px;
      
      color: var(--green-blue);
      font-size: 0.8rem;
      font-weight: 600;
    }
  }

  button {
    width: 80%;
    height: 40px;
    margin-top: 5px;

    font-size: 1.1rem;
    font-weight: 500;

    align-self: center;

    border: none;
    border-radius: 8px;

    color: var(--white);
    background-color: var(--dark-blue);
  }

  button:hover,
  button:focus {
    cursor: pointer;
    background-color: var(--green-blue);
  }

  @media (min-width: 768px) {
    button {
      width: 100%;
      margin: 0;
    }
  }
`
