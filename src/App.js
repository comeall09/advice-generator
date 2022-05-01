import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {adviceAPI} from './API/adviceAPI';
import './App.css';
import { setAdvice, setIsFetching } from './redux/store';

const Preloader = () => {
  return(
    <img width={'50px'} src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" />
  )
}

function App() {
  const advice = useSelector(state => state.advice.text)
  const isFetching = useSelector(state => state.advice.isFetching)
  const dispatch = useDispatch()

  const fetchAdvice = () => {
    dispatch(setIsFetching(true))
    adviceAPI.getAdvice()
    .then(text => dispatch(setAdvice(text)))
    .then(() => dispatch(setIsFetching(false)))
  }

  useEffect(() => {
    fetchAdvice()
  }, [])

  return (
    <div className="wrapper">
      <div className='advices'>
        {isFetching
        ? <Preloader />
        : advice}
        <div style={{position:'fixed', bottom: '-30px'}} width={'30px'} heigth={'30px'}><button disabled={isFetching} onClick={fetchAdvice} style={{padding:'10px'}} >new</button></div>
      </div>
    </div>
  );
}

export default App;
