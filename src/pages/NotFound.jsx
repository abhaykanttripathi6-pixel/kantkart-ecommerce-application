import NotFoundImg from '../assets/images/page_notfound.png';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

  const navigate = useNavigate();

  const handleGoToHomeBtn = () => {
    navigate('/');
  }

  return (
    <div className='h-screen flex flex-col justify-center items-center gap-5'>
      <div className='w-90 md:w-100 lg:w-120'>
        <figure>
          <img src={NotFoundImg} alt="not_found" className='w-full h-full object-cover' />
        </figure>
      </div>

      <p className='text-2xl font-semibold text-center'>Oops! Page Not Found</p>

      <button
        onClick={handleGoToHomeBtn}
        className='text-sm font-semibold p-3 bg-indigo-800 text-white rounded-lg active:scale-97 transition-all transtion-duration-200 cursor-pointer'>GO TO HOME</button>
    </div>
  )
}

export default NotFound
