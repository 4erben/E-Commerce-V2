import React from 'react'
import Spinner from '../Spinner/Spinner';

const ErrorBoundary = React.memo(({children,isLoading,isError,error}) => {
    if(isLoading){
        return ( 
        <Spinner />
        )}
    if(isError){
        return <div className='text-center my-10 font-bold'>{error.message}</div>
    }
    return <>{children}</>;
})


export default ErrorBoundary;