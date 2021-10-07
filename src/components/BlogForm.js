import React from 'react'

const BlogForm = ({ addBlog, title, author, url, setTitle, setAuthor, setUrl }) => {
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addBlog}>
        title: <input type='text' value={title} onChange={({ target }) => setTitle(target.value)} /><br />
        author: <input type='text' value={author} onChange={({ target }) => setAuthor(target.value)} /><br />
        url: <input type='text' value={url} onChange={({ target }) => setUrl(target.value)} /><br />
        <button>create</button>
      </form>
    </div>
  )
}

export default BlogForm