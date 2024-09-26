import { useEffect } from 'react'
import {useCounterStore} from './store/counterStrore'


const App = () => {

  const count = useCounterStore((state) => state.count)
  const title = useCounterStore((state) => state.title)
  

  // const values = useCounterStore((state) =>({
  //   count: state.count,
  //   title: state.title
  // }))
  // console.log(values)

  const {increment, getPost, post, clearStore, multiply} = useCounterStore()


  useEffect(()=>{
    getPost()
  }, [])

  return ( 
    <div>
      <h1>{title}: {count}</h1>

      <button
        onClick={()=>{
          increment(10)
        }}
      > Increment by 10</button>


      <button onClick={()=> clearStore()}>Clear</button>
      <button onClick={()=> multiply(2)}>Multiply X2</button>
      <hr />

      {JSON.stringify(post)}
    </div>
   );
}
 
export default App;