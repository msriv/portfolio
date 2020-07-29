import navbar from '../styles/navbar.module.css'

const Navbar = ({page}: any) => {
    console.log(page);
    return (
        <nav className="flex items-center justify-between flex-wrap p-6 container mx-auto">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                {/* <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> */}
                <img className="h-4 w-4 lg:h-5 lg:w-5" src={"/images/logo.png"}></img>
                <span className="font-semibold text-sm lg:text-xl tracking-tight lg:ml-5 ml-2 text-black">Mihir Srivastava</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className="w-full block lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                <a href="/projects"  className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-700 mx-4">
                    Projects
                </a>
                <a href="/blogs" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-700 mx-4">
                    Blog
                </a>
                <a href="/cv" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-700 ml-4">
                    Curriculum Vitae
                </a>
                </div>
                {/* <div>
                <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
                </div> */}
            </div>
        </nav>
    )
}

export default Navbar;