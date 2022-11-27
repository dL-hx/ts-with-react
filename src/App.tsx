import React, { useState } from 'react';
import logo from './logo.svg';
import Hello from './components/Hello';
import HelloTheme from './components/HelloTheme';
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
import useMousePosition from './hooks/useMousePosition';
import withLoader from './hocs/withLoader';


import './App.css';
import useURLLoader from './hooks/useURLLoader';
import LikeButtonRefDemo from './components/LikeButtonRefDemo'

import { ThemeContext, themes } from './context/theme'

interface IShowResult {
  message: string,
  status: string,
}


const DogShow: React.FC<{ data: IShowResult }> = ({ data }) => {
  return (
    <>
      <h2>Dog show:{data.status}</h2>
      <img src={data.message} />
    </>
  )
}

function App() {
  const [show, setShow] = useState(true)

  // const position = useMousePosition()
  // const WrappedDogShow = withLoader(DogShow, 'https://dog.ceo/api/breeds/image/random')
  const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show])

  const dataResult = data as IShowResult // 断言 data 的类型 为  IShowResult

  return (
    <div className="App">
      <ThemeContext.Provider value={themes.green}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p>
          <button onClick={()=>setShow(!show)}>Toggle MouseTracker</button>
        </p> */}
          <Hello />
          <HelloTheme/>


          {/* {
          loading?'🎁...':<img src={dataResult && dataResult.message}/>
        }
         */}
          {/* <WrappedDogShow /> */}
          {/* X :{position.x} {` `} Y :{position.y} */}

          {/* <LikeButton /> */}
          <LikeButtonRefDemo />

          {/* {show&&<MouseTracker />} */}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </ThemeContext.Provider>

    </div>
  );
}

export default App;
