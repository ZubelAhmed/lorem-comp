import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import './App.css'

import Content from './components/Content'

function App() {
  const [count, setCount] = useState(0)

  return ( <>

  <Content title={"Lorem"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est iste debitis perferendis laudantium consequatur optio ipsam pariatur, necessitatibus quam voluptatum labore dicta architecto mollitia, fuga, quod quas dolore doloribus eveniet."}/>
  <Content title={"Ipsum"} description={"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ullam aliquam quo quis sint accusamus deserunt incidunt. Tenetur, voluptates cum architecto consequuntur accusantium in blanditiis quas? Modi totam ea distinctio, corrupti vero reprehenderit? Id, ipsum consequuntur aspernatur hic nemo, aliquid suscipit dolor quis, recusandae iure quasi incidunt! Dolor rerum expedita iusto suscipit veniam? Iure quos tenetur, quas ex nesciunt laboriosam."} />

  </>)
 
}

export default App
