import { useUser } from '@clerk/react';
import Loading from './Loading';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {

    const { isSignedIn, isLoaded } = useUser();

    if (!isLoaded) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <Loading />
            </div>
        );
    }

    if (!isSignedIn) {
        return <Navigate to='/signIn' replace />
    }

    return children;
}

export default ProtectedRoute
