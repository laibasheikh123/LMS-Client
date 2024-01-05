// import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div className="relative w-full bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">

          <div className="inline-flex items-center space-x-2">
            <span>

              <img
                src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/429/8765313429_b15828ba-09d0-465a-95a7-e6f7aae9e2b7.png?cb=1703964061"
                alt="FREECHAMPS"
                width={30}
                height={30}
              />
            </span>
            <span className="font-bold">FREECHAMPS</span>
          </div>


          {/* <div className="hidden grow items-start lg:flex">
            <ul className="ml-12 inline-flex space-x-8">
              <li>
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Home
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-4 w-4"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  About
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-4 w-4"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Contact
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-4 w-4"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </a>
              </li>
            </ul>
          </div> */}
          

          <div className="hidden space-x-2 lg:block">


            
            <button
              type="button"
              className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <Link className="text-black-500" to={'/signup'}>
              Signup
              </Link>
            </button>
            


            <button
              type="button"
              className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <Link className="text-black-500" to={'/login'}>
                Log In
              </Link>
            </button>





          </div>

          {/* <div className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 cursor-pointer"
            >
              <line x1={4} y1={12} x2={20} y2={12} />
              <line x1={4} y1={6} x2={20} y2={6} />
              <line x1={4} y1={18} x2={20} y2={18} />
            </svg>
          </div> */}
        
        
        
        </div>
      </div>

    </>
  )
}
