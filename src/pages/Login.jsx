import { SignIn, useUser } from '@clerk/react';
import Loading from '../components/Loading';

const Login = () => {

  const { isLoaded } = useUser();

  return (
    <div className='h-170 mt-18 flex justify-center items-center'>
      {
        isLoaded ?
          <SignIn fallbackRedirectUrl={'/'} />
          :
          <Loading />
      }
    </div>
  )
}

export default Login
