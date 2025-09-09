import { useState } from "react"
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid"
import { images } from "@/assets"
import { createClassNames } from "@/tool"
import { Image } from "../image"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"
import { Link } from "react-router-dom"

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const handleOpenMenu = () => {
    setOpenMenu(prev => !prev)
  }

  const renderMenu = ({ isMobile = false }) => {
    const mobileClass = "flex flex-col items-center gap-8 font-medium text-xl";
    const desktopClass = 'flex items-center justify-center gap-8 xl:gap-12 font-medium '
    return (
      <div className={isMobile ? mobileClass : desktopClass}>
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login 👋</button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    )
  }

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* logo */}
      <div className="flex items-center gap-4 text-2xl font-bold">
        <Image src={images.logo} alt="logo" width={32} height={32} className="w-8 h-8" />
        Blogst.
      </div>
      {/* mobile menu */}
      {/* menu button */}
      <div className="md:hidden cursor-pointer text-2xl" onClick={handleOpenMenu}>
        {openMenu ? <XMarkIcon className="size-6" /> : <Bars3Icon className="size-6" />}
      </div>
      {/* menu modal */}
      <div className={
        createClassNames("w-full h-screen flex flex-col items-center justify-center absolute top-16 bg-red-300 transition-all ease-in-out",
          openMenu ? '-right-0 block' : "-right-[100%] hidden"
        )
      }>
        {renderMenu({ isMobile: true })}
      </div>
      {/* desktop menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        {renderMenu({ isMobile: false })}
      </div>



    </div>
  )
}

