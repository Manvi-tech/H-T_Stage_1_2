
import { Post } from "src/app/models/post.model"

export interface PostState{
    posts: Post[]
}

export const initialState : PostState = {
    posts:[
        {id:1, title:'title1', description: 'description 1'},
        {id:2, title:'title2', description: 'description 2'}
    ]
}