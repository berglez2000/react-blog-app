import Button from './Button'

const Blog = ({ text, onClick }) => {
  return (
    <div className="blog">
      <div className="blog-text">
        {text}
      </div>
      <Button onClick={onClick} textContent="Delete" style={{backgroundColor: "red"}} />
    </div>
  )
}

export default Blog
