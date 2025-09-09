import React from 'react'
import { Link } from 'react-router-dom'
import {ArrowUpRightIcon} from '@heroicons/react/24/solid'

export const Homepage = () => {
  return (
    <div className="flex flex-col gap-4 mt-4">

      {/* breadcrumbs */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>.</span>
        <span className='text-blue-800'>Blogs and Articles</span>
      </div>

      {/* introduction */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-5xl lg:text-6xl  font-bold text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className="mt-8 text-md md:text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi iste amet beatae adipisci.</p>
        </div>

        <Link to="/write" className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            // className="text-lg tracking-widest animate-spin animatedButton"
            className="text-lg tracking-widest"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your story •
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your idea •
              </textPath>
            </text>
          </svg>
          <button className="absolute top-0 left-0 bottom-0 right-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
            <ArrowUpRightIcon className="size-6 text-white" />
          </button>
        </Link>
      </div>

      {/* feature posts */}
      {/* posts list */}
    </div>
  )
}
