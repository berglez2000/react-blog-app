import { useState } from 'react'
import Button from './Button'

const Form = ({ onSubmit }) => {

  let [value, setValue] = useState("")

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      if (!value){
        alert("Please write your blog")
        return
      }

      onSubmit({ value })
    }}>
      <textarea onChange={(e) => {
          setValue(value = e.target.value)
        }}
        className="post-blog" 
        cols="50" rows="5" 
        placeholder="Write your blog here..." >   
      </textarea>
      <Button textContent="Upload" style={{backgroundColor: "green"}} />
    </form>
  )
}

export default Form
