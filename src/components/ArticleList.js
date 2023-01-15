import React from 'react'
import Article from './Article'
// import blogData from '../data/blog'

function ArticleList({posts}) {

  // JS code to loop through blogData and display it in form of articles 
  // when using map to loop we must pass in an id, coz that is the syntax .
    const  article = posts.map((post) => (
      <Article 
      key = {post.id} 
      title = {post.title} 
      date = {post.date} 
      minutes = {post.minutes}
      preview = {post.preview} 
      />
  ))

  return (
    <div>
        <main > {article}</main>
    </div>
  )
}

export default ArticleList