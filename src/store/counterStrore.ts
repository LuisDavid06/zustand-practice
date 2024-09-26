import {create} from 'zustand'

interface Post{
    userId:number,
    id:number,
    title:string,
    body:string
}

interface CounterState{
    count: number,
    title:string,
    post: Post[]
    increment: (value:number) => void,
    getPost: () => Promise<void>,
    clearStore: () => void,
    multiply: (value:number) => void
}

export const useCounterStore = create<CounterState>((set, get)=>({

    count:20,
    title:'some title',
    increment:(value:number) => set(state =>({
        count: state.count + value
    })),
    post: [],
     
    getPost: async () => {
      const res =  await fetch('https://jsonplaceholder.typicode.com/posts')
      const post = await res.json()
      console.log(post)

      set(state => ({
        ...state, post
      }))
    },

    clearStore: () =>{
        set({count:0, title:'', post:[]})
    },

    multiply: (value:number) =>{
        const {count} = get()
        set({count:count*value})
    }

}))