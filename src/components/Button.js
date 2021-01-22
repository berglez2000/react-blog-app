
const Button = ({ textContent, style, onClick }) => {
  return (
    <>
      <button onClick={onClick} className="btn" style={style} >{textContent}</button>
    </>
  )
}

export default Button
