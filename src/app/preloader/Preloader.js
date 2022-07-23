import { PRELOADER_URL } from '../../constants/index'

export const Preloader = () => {
  return(
    <img width={'50px'} src={PRELOADER_URL} alt='please_wait' />
  )
}