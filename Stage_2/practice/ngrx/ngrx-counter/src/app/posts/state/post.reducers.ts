import { createReducer } from "@ngrx/store";
import { initialState, PostState } from "./post.state";


const _postReducer = createReducer<PostState>(initialState);

export function postsReducer(state:any, action:any){
    return _postReducer(state, action);
}