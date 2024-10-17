import "./Navbar.scss";
const Navbar = () => {
    const menuItems = (
        <>
            <li>
                <a>Item 1</a>
            </li>
            <li>
                <details>
                    <summary>Parent</summary>
                    <ul className="p-2">
                        <li>
                            <a>Submenu 1</a>
                        </li>
                        <li>
                            <a>Submenu 2</a>
                        </li>
                    </ul>
                </details>
            </li>
            <li>
                <a>Item 3</a>
            </li>
        </>
    );
    return (
        <header className="header mb-144">
            <div className="header-inner">
                <div className="navbar container mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost lg:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                            >
                                {menuItems}
                            </ul>
                        </div>
                        <a href="#" className="text-xl">
                            Tech Zone
                        </a>
                    </div>

                    <div className="nav-center w-full">
                        <details className="dropdown nav-categories ghost min-w-48">
                            <summary className="btn w-full">All Categories</summary>
                            <ul className="menu dropdown-content w-full bg-blue z-[1]  ">
                                
                                <div className="collapse collapse-arrow bg-blue">
                                    <input type="radio" name="accordion" /> 
                                    <div className="collapse-title text-lg border-2 font-medium py-2">
                                        Laptop
                                    </div>
                                    <div className="collapse-content">
                                        <a href="#" className="link link-hover">Asus</a> <br />
                                        <a href="#" className="link link-hover">Dell</a> <br />
                                        <a href="#" className="link link-hover">HP</a> <br />
                                        <a href="#" className="link link-hover">Lenovo</a> <br />
                                        <a href="#" className="link link-hover">Macbook</a> <br />
                                        <a href="#" className="link link-hover">Others</a> <br />
                                    </div>
                                </div>
                                <div className="collapse collapse-arrow bg-blue">
                                    <input type="radio" name="accordion" />
                                    <div className="collapse-title text-xl font-medium"> Tablet </div>
                                    <div className="collapse-content">
                                    <a href="#" className="link link-hover">Asus</a> <br />
                                        <a href="#" className="link link-hover">Dell</a> <br />
                                        <a href="#" className="link link-hover">HP</a> <br />
                                        <a href="#" className="link link-hover">Lenovo</a> <br />
                                        <a href="#" className="link link-hover">Macbook</a> <br />
                                        <a href="#" className="link link-hover">Others</a> <br />
                                    </div>
                                </div>
                                <div className="collapse collapse-arrow bg-base-200">
                                    <input type="radio" name="accordion" />
                                    <div className="collapse-title text-xl font-medium"> Desktop </div>
                                    <div className="collapse-content">
                                    <a href="#" className="link link-hover">Asus</a> <br />
                                        <a href="#" className="link link-hover">Dell</a> <br />
                                        <a href="#" className="link link-hover">HP</a> <br />
                                        <a href="#" className="link link-hover">Lenovo</a> <br />
                                        <a href="#" className="link link-hover">Macbook</a> <br />
                                        <a href="#" className="link link-hover">Others</a> <br />
                                    </div>
                                </div>
                                <div className="collapse collapse-arrow bg-base-200">
                                    <input type="radio" name="accordion" />
                                    <div className="collapse-title text-xl font-medium"> Camera </div>
                                    <div className="collapse-content">
                                    <a href="#" className="link link-hover">Asus</a> <br />
                                        <a href="#" className="link link-hover">Dell</a> <br />
                                        <a href="#" className="link link-hover">HP</a> <br />
                                        <a href="#" className="link link-hover">Lenovo</a> <br />
                                        <a href="#" className="link link-hover">Macbook</a> <br />
                                        <a href="#" className="link link-hover">Others</a> <br />
                                    </div>
                                </div>
                            </ul>
                            
                        </details>

                        {/* <select className="nav-select select select-ghost w-4/12">
                            <option disabled selected>All categories</option>
                            <option>Smart Phones</option>
                            <option>Laptop</option>
                            <option>Tablet</option>
                            <option>Speakers</option>
                            <option>Mouse</option>
                            <option>Keyboard</option>
                            <option>Monitor</option>
                            <option>Camera</option>
                            <option>Headset</option>
                            <option>Mousepad</option>
                            <option>Powerbank</option>
                            <option>Charger</option>
                            <option>Headphones</option>
                            <option>Watch</option>
                            <option>Others</option>
                        </select> */}
                        <div className="nav-search-area w-full flex">
                            <form className="nav-input form-control w-full">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="input input-ghost"
                                />
                            </form>
                            <button className="search-btn btn btn-ghost ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {" "}
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="flex">
                            <div className="dropdown dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost btn-circle"
                                >
                                    <div className="indicator">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                        <span className="badge badge-sm indicator-item">8</span>
                                    </div>
                                </div>
                                <div
                                    tabIndex={0}
                                    className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
                                >
                                    <div className="card-body">
                                        <span className="text-lg font-bold">8 Items</span>
                                        <span className="text-info">Subtotal: $999</span>
                                        <div className="card-actions">
                                            <button className="btn btn-primary btn-block">
                                                View cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost btn-circle avatar"
                                >
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                        />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                                >
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>Settings</a>
                                    </li>
                                    <li>
                                        <a>Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
