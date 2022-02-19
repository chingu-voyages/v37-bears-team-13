type ButtonProps = {
    btnText: string
}

const Button = ({ btnText }: ButtonProps): JSX.Element => {
  return (
    <button>{btnText}</button>
  )
}

export default Button