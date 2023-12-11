import React from 'react'

export const Menu = () => {
  return (
    <div className=''>
        <ul className="flex text-sm [&>li>a]:inline-block [&>li>a]:px-2 [&>li>a]:sm:px-12 [&>li>a]:py-2 [&>li>a]:text-lg [&>li>a]:text-ocean-50">
            <li className="hover:bg-ocean-500 "><a href="#">About</a></li>
            <li className="hover:bg-ocean-500 "><a href="#">Career</a></li>
            {/*<li className="hover:bg-ocean-500 "><a href="#">Projects</a></li>*/}
            <li className="hover:bg-ocean-500 "><a href="#">Social</a></li>
        </ul>
    </div>
  )
}
