'use client';

import { useEffect, useState } from 'react';

import PromptCard from './PromptCard.jsx';


const PromptCardList = ({ data, handleTagClick }) => {
  <div className="prompt_layout mt-16">
    {data.map((prompt) => (
      <PromptCard
        key={post._id}
        post={post}
        handleTagClick={handleTagClick}

       
      />
    ))}
  </div>
}

const Feed = () => {

  const [ searchText, setSearchText ] = useState('')
  const [ posts, setPosts ] = useState([])

  const handleSearchChange = (e) => {

  }
  const handleTagClick = (e) => {

  }

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/prompt')
      const data = await res.json()
      console.log(data)
      setPosts(data)
    }
    fetchPosts()

  }, [])

  return (
    <section className="feed">
      <form action="" className="relative w-full flex-center">
        <input 
          type="text" 
          placeholder='Search for prompts' 
          value={searchText} 
          onChange={handleSearchChange} 
          required  
        />
      </form>
      <PromptCardList
        data={posts}
        handleTagClick={handleTagClick}
      />
    </section>
  )
}

export default Feed