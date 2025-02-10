import React from "react";
import logo from "../../assets/ud.png";
import {useSelector} from "react-redux";
import logo2 from "../../assets/logo.png";

const Header = () => {
    const theme = useSelector((state) => state.theme.mode);

    return (
        <div className={`z-50`}>
            <header className="z-50">
                <div className=" mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className=" flex h-16 items-center justify-between">
                        <div className=" flex-1 md:flex md:items-center md:gap-12">
                            <a className=" block text-teal-600" href="/">
                                <span className="sr-only">Home</span>
                                <img
                                    src={theme === 1 ? logo2 : logo}
                                    alt=""
                                    className="h-8 rounded-full"
                                />
                            </a>
                        </div>

                        <div className="md:flex md:items-center md:gap-12">
                            <nav aria-label="Global" className="hidden md:block">
                                <ul className="flex items-center gap-6 text-sm">
                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-gray-500/75"
                                            href="/"
                                        >
                                            {" "}
                                            Work{" "}
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-gray-500/75"
                                            href="#"
                                        >
                                            {" "}
                                            Achievements{" "}
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-gray-500/75"
                                            href="#"
                                        >
                                            {" "}
                                            Services{" "}
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-gray-500/75"
                                            href="#"
                                        >
                                            {" "}
                                            About{" "}
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-gray-500/75"
                                            href="#"
                                        >
                                            {" "}
                                            Contact{" "}
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-gray-500/75"
                                            href="#"
                                        >
                                            {" "}
                                            Blog{" "}
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
