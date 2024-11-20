import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import postService from '../appwrite/postService'

function AllPosts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        postService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex gap-4 flex-wrap items-stretch'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4 rounded-xl'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts