import { useAuth } from "../../context/auth-context"

export const AuthLogin = () => {

    const { userName, password, authDispatch } = useAuth()
    console.log({ userName, password });

    const onUserNameChange = (e) => {
        authDispatch({
            type: "USERNAME",
            payload: e.target.value
        })
    }

    const onPasswordChange = (e) => {
        authDispatch({
            type: "PASSWORD",
            payload: e.target.value
        })
    }


    return (
        <div className="flex justify-center items-center text-center min-h-screen">
            <div className="text-white rounded-2xl p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-white">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-lg font-medium mb-1">Username</label>
                        <input
                            className="w-full px-4 py-2 border-none rounded-md focus:outline-none mx-auto text-center"
                            type="text"
                            placeholder="Enter your username"
                            onChange={onUserNameChange}
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-lg font-medium mb-1">Password</label>
                        <input
                            className="w-full px-4 py-2 border-none rounded-md focus:outline-none  mx-auto text-center"
                            type="password"
                            placeholder="*********"
                            onChange={onPasswordChange}
                        />
                    </div>

                    <button
                        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-md transition-colors"
                    >
                        Login
                    </button>

                </form>
            </div>
        </div>
    );
};
