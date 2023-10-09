import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className=" w-1/2 mx-auto flex justify-center items-center lg:mt-20">

         <div>
            <h1 className="text-center text-2xl font-bold">Oops!!</h1>
            <p className="text-center text-base font-medium">Sorry, an unexpected error has occurred.</p>
            <p className="text-center text-base font-medium">
                {error.statusText || error.message}
            </p>
         </div>
      
        </div>
    )
};

export default ErrorPage;