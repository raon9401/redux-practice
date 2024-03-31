import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';
import GrandSonBox from './component/GrandSonBox';
import { useState } from 'react';

const selectNumArr = [1,2,4,8,16];

function App() {
  // useSelector 은 함수를 매개변수로 받는다.
  const count = useSelector(state=>state.count)
  const dispatch = useDispatch()

  const [stateNum, setStateNum] = useState(1);

  const increase = () => {
    // type은 action의 이름
    dispatch({type:"INCREMENT", payload: {num:stateNum}});
  }

  const decrease = () => {
    // type은 action의 이름
    dispatch({type:"DECREMENT", payload: {num:stateNum}});
  }

  const handleSelectNum = (num) =>{
    setStateNum(num);
  }

  return (
    <div className="App">
      <h2>{count}</h2>
      <div className='content-wrap'>
        <div className='select-num-wrap'>
        {selectNumArr.map((item, index) => (
          <button className='num-button' onClick={() => handleSelectNum(item)} key={index}>{item}</button>
        ))}
        </div>
        <div className='state-button-wrap'>
          <button onClick={increase}>Increase Button!</button>
          <button onClick={decrease}>Decrease Button!</button>
        </div>
        <Box/>
        <GrandSonBox/>
      </div>
    </div>
  );
}

export default App;

