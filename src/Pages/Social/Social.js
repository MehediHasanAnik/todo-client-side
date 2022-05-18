import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.int';



const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='text-center py-5'>
            <button type="button" class="btn btn-success py-2" onClick={() => signInWithGoogle()}>Google Sign In</button>
        </div>
    );
};

export default Social;