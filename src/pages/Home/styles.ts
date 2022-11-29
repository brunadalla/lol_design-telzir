import styled from "styled-components"

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  min-width: 320px;
  min-height: 625px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--dark-grey);

  main {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    animation-duration: 2s;

    section {
      width: 100%;
      padding: 20px;
    }

    .section-info {
      height: 40%;
     

      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: space-between;

      background-color: var(--green-blue);

      div {
        height: max-content;

        gap: 10px;
        display: flex;
        align-items: center;

        h1 {
          color: var(--white);

          font-size: 2rem;
          font-style: italic;
          font-weight: 800;
        }
      }

      h3 {
        color: var(--white);

        font-size: 1.1rem;
        font-weight: 600;
        text-align: left;
      }

      p {
        color: var(--white);
        font-size: 1rem;
        font-weight: 500;

        span {
          font-weight: 600;
        }
      }
    }

    .section-form {
      height: 60%;
      max-height: 400px;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: var(--light-blue);
    }
  }

  @media (min-width: 768px) {
    main {
      width: 80%;
      height: 60%;
      min-height: 407px;
      max-width: 750px;
      max-height: 600px;

      flex-direction: row;

      section {
        padding: 40px;
      }

      .section-info {
        width: 45%;
        height: 100%;
        max-height: none;

        gap: 30px;
        justify-content: flex-start;
        
        border-radius: 8px 0 0 8px;
      }

      .section-form {
        width: 55%;
        height: 100%;
        max-height: none;

        border-radius: 0 8px 8px 0;
      }
    }
  }
`
