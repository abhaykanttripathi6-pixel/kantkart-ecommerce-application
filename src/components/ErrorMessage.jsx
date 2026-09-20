import { MdOutlineRefresh } from "react-icons/md";

const ErrorMessage = () => {

    const retry = ()=>{
        window.location.reload();
    }

    return (
        <div className='h-screen flex flex-col justify-center items-center gap-5'>
            <div>
                <h1 className='text-xl font-semibold text-center'>Something went wrong!</h1>
                <p className='text-sm text-gray-400 text-center'>Unable to load products. Please try again later.</p>
            </div>
            <button
                onClick={retry}
                className='py-2 px-3 bg-indigo-800 text-sm text-white font-semibold rounded-lg flex items-center gap-1'
            >
                Retry 
                <MdOutlineRefresh className="text-xl"/>
            </button>
        </div>
    )
}

export default ErrorMessage;
