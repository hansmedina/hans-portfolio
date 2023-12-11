import React from 'react'

export const Menu = () => {
  return (
    <div className='fixed bg-ocean-600'>
        <ul className="flex text-sm [&>li>a]:inline-block [&>li>a]:px-6 [&>li>a]:sm:px-12 [&>li>a]:py-2 [&>li>a]:text-lg [&>li>a]:text-ocean-200 [&>li>a]:dark:text-ocean-50">
            <li className="hover:bg-ocean-500 "><a href="#">About</a></li>
            <li className="hover:bg-ocean-500 "><a href="#">Career</a></li>
            <li className="hover:bg-ocean-500 "><a href="#">Projects</a></li>
            <li className="hover:bg-ocean-500 "><a href="#">Social</a></li>
        </ul>
    </div>
  )
}
