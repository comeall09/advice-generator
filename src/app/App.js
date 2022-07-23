import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {adviceAPI} from '../service/adviceAPI';
import './App.css';
import { setAdvice, setAdviceNum, setIsFetching } from '../redux/store';
import { Preloader } from './preloader/Preloader';
import { BTN_URL } from '../constants';

export function App() {
  const advice = useSelector(state => state.advice.text)
  const adviceId = useSelector(state => state.advice.id)
  const isFetching = useSelector(state => state.advice.isFetching)
  const dispatch = useDispatch()

  const fetchAdvice = () => {
    dispatch(setIsFetching(true))
    adviceAPI.getAdvice()
    .then(resp => {
      dispatch(setAdvice(resp.advice))
      dispatch(setAdviceNum(resp.id))
    })
    .then(() => dispatch(setIsFetching(false)))
  }

  useEffect(() => {
    fetchAdvice()
  }, [])

  return (
    <div className="adviceWrap">
      <div className='adviceCard'>
        <h1 className='adviceNum'>ADVICE #{adviceId}</h1>
        <p className='adviceText'>
            {isFetching ? <Preloader /> : `"${advice}"`}
          </p>
        <div className='adviceLine'>| |</div>
        <button className='adviceBtn' onClick={fetchAdvice}>
          <img src={BTN_URL} alt="next_advice" />
        </button>
      </div>
    </div>
  );
}

export default App;
