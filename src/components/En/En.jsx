import * as React from "react"

const En = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 30"
    width={32}
    height={6}
    {...props}
  >
    <clipPath id="a">
      <path d="M25 15h25v15zv15H0zH0V0zV0h25z" />
    </clipPath>
    <path d="M0 0v30h50V0z" fill="#012169" />
    <path d="m0 0 50 30m0-30L0 30" stroke="#fff" strokeWidth={6} />
    <path
      d="m0 0 50 30m0-30L0 30"
      clipPath="url(#a)"
      stroke="#C8102E"
      strokeWidth={4}
    />
    <path
      d="M-1 11h22V-1h8v12h22v8H29v12h-8V19H-1z"
      fill="#C8102E"
      stroke="#FFF"
      strokeWidth={2}
    />
  </svg>
)

export default En
