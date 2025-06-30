import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <header className="bg-blue-950 shadow-md">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                <div className="flex items-center space-x-3">
                    <span class="material-symbols-outlined text-amber-50">
                        crossword
                    </span>
                    <h1 className="text-xl font-bold text-yellow-50">
                        <Link to="/">Quiz Master</Link>
                    </h1>
                </div>

                <nav>
                    <ul className="flex space-x-6 text-amber-50 font-medium">
                        <li>
                            <Link to="/" className="hover:text-blue-600">Home</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
