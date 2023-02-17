import * as React from "react"

const Ro = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={5}
    viewBox="0 0 3 2"
    {...props}
  >
    <path fill="#002B7F" d="M0 0h3v2H0z" />
    <path fill="#FCD116" d="M1 0h2v2H1z" />
    <path fill="#CE1126" d="M2 0h1v2H2z" />
  </svg>
)

export default Ro
