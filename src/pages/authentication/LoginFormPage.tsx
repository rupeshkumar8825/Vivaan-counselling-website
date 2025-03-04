// this is the login form for the users 
// this page will only be rendered when the user has not logged in and want to login

interface ILoginFormPage {
    buttonHandler : () => void
}


const LoginFormPage = (props : ILoginFormPage) => {
    return (
        <div className=" w-full flex items-center justify-center pt-10">
            <button
                    onClick={props.buttonHandler}
                    className=" absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                    style={{ position: 'absolute', top: '10px', right: '10px' }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            <div className="w-full max-w-sm p-4  rounded-lg shadow sm:p-6 md:p-8 bg-blue-forComponentBg border-gray-700">
                <form className="space-y-6" action="#">
                    <h5 className="text-xl font-medium text-white">Sign in to our platform</h5>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-300">Remember me</label>
                        </div>
                        <a href="#" className="ms-auto text-sm text-blue-700 hover:underline">Forgot Password?</a>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="/register" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                    </div>
                </form>
            </div>
        </div>
    )
}


// say everything went fine 
export default LoginFormPage    