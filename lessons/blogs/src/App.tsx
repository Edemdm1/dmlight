import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Hello, {formatDate, Calc} from './components/Hello'

// function Welcome() {
//   return <h1>Hello Component</h1>
// }

function Welcome(props: any) {
  return <h1>Hello, {props.name}</h1>
}


// function formatDate(date) {
//   return new Intl.DateTimeFormat(
//     'en-US', {weekday: 'long'}
//   ).format(date)
// }

// function Calc(props:any){
//   const sum = props.a + props.b;

//   const today = new Date()
//   return (
//     <>
//       <h2>It`s today: {formatDate(today)}</h2>
//       <p>Hi, I am {props.name}!</p>
//       <p>The sum of the numerics props I received is {sum}</p>
//     </>
//   )
// }


function Header(props) {
  console.log(props)
  return <h1>Hello component</h1>;
}
// const jsxEl = <h1>I am a JSX element</h1>;


// const H1 = <h1>Hello world</h1>;
// const H2 = <h2>Hi there</h2>;

// const data = {
//   H1: <h1>Hello world</h1>,
//   H2: <h2>Hi there</h2>
// }
// const Header = (
//   <header>
//   {data.H1}
//   {data.H2}
//   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta quasi blanditiis cum at, itaque recusandae expedita corrupti qui obcaecati saepe beatae? Veniam voluptate delectus adipisci laboriosam molestiae minus magnam accusamus.</p>
//   </header>
// )

const today = new Date();

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      {/* {jsxEl}

      {Header} */}

      {/* {<Welcome></Welcome>} */}
      <Welcome name="World"/>

      <Welcome name="me"/>

      <Welcome name="Component"/>

      <Calc name="Smart Calc" a={2} b={2}/>



      <Header />

      <Hello name="Hello component" />
      <h3 style={{ backgroundColor: 'blue', color: 'gold' }}>It`s today: {today.toLocaleDateString()}</h3>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
