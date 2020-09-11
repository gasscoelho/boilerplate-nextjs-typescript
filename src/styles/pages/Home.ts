import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  text-align: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 150px;
      height: auto;
      fill: ${props => props.theme.colors.text};
    }
  }

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }

  p {
    margin-top: 20px;
    font-size: 24px;
  }
`
