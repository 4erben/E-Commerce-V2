import React from 'react'

const ErrorBoundary = React.memo(({children,isLoading,isError,error}) => {
    if(isLoading){
        return ( 
        <div className="flex items-center justify-center py-10">
            <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>)}
    if(isError){
        return <div className='text-center my-10 font-bold'>{error.message}</div>
    }
    return <>{children}</>;
})


export default ErrorBoundary;