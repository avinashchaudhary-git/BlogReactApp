import React from 'react'

const App = () => {
  return (
    <>
    <div>AIBLog</div>
    {/* create a ordered list */}
    <ol>
      <li>RAG</li>
      <li>LLM</li>
      <li>frontend</li>
    </ol>
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" /><br></br>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" /><br></br>
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message"></textarea> <br></br>
      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default App