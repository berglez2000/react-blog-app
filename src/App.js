import { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Blog from './components/Blog'

const App = () => {
  const [popForm, setForm] = useState(false)
  const [uploadForm, setUploadForm] = useState(false)
  let [blogText, setBlogText] = useState("")

  return (
    <div className="container">
      <Header onClick={() => setForm(!popForm)} />
      {popForm ? <Form onSubmit={(value) => {
        setUploadForm(true)
        setBlogText(blogText = value.value)
        }} /> : ""}
      {uploadForm ? <Blog text={blogText} onClick={() => setUploadForm(false)} /> : ""}
    </div>
  )
}

export default App
