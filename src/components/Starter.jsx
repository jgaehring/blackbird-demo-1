import { useState } from 'react'
import { WiredButton } from 'wired-elements-react'
import reactLogo from '../assets/react.svg'
import './Starter.css'

function App() {
  const [count, setCount] = useState(0)
  const onClick = () => setCount((count) => count + 1)

  return (
    <div className="Starter">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <WiredButton onClick={onClick} elevation={5}>
          count is {count}
        </WiredButton>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
