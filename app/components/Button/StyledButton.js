import styled from 'styled-components'

export default styled.div`
  button,
  a {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 0.05em;
    line-height: 1.5;
    padding: 7px 25px;
    box-shadow: none !important;
    display: inline-block;
    margin: 15px 0;
    text-decoration: none;
    border-radius: 0;
    border: none !important;
    -webkit-font-smoothing: antialiased;
    -webkit-touch-callout: none;
    user-select: none;
    color: #222222 !important;
    cursor: pointer;
    outline: 0;
    background: #111111
      linear-gradient(
        60deg,
        #dddddd,
        #dddddd 25%,
        rgba(255, 210, 101, 0.9) 30%,
        rgba(255, 49, 175, 0.7) 45%,
        rgba(61, 225, 255, 0.7) 60%,
        rgba(0, 51, 128, 0.7) 75%,
        #111111 90%,
        #111111
      );
    background-color: #090909 !important;
    background-size: auto auto;
    background-size: 505% 100%;
    background-position-x: 0%;
    transition: transform 0.8s, color 0.3s, background-position-x 0.7s;
    transition-delay: 0s, 0.2s, 0s;

    &:hover,
    &:active {
      color: #dddddd !important;
      background-position-x: 90%;
    }

    &:disabled {
      cursor: not-allowed !important;
      background: #303030 !important;
      color: #505050 !important;
    }
  }
`
