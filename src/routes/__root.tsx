import { useState } from 'react'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'framer-motion'

import { Header } from '../components/header'
import { useLockBodyScroll } from '../hooks/use-lock-body-scroll'
import { NavigationMenu } from '../components/navigation-menu'
import { Footer } from '../components/footer'

const RootLayout = () => {
  const [isOpenBurgerMenu, setOpenBurgerMenu] = useState(false)

  const toggleBurgerMenu = () => setOpenBurgerMenu(p => !p)

  useLockBodyScroll(isOpenBurgerMenu)

  return (
    <div className='relative m-0 mx-auto p-0 flex flex-col no-scrollbar'>
      <Header
        isOpenBurgerMenu={isOpenBurgerMenu}
        toggleBurgerMenu={toggleBurgerMenu} />
      <AnimatePresence>
        {isOpenBurgerMenu &&
          <NavigationMenu />
        }
      </AnimatePresence>
      <main className='
                      relative flex-1 px-[15px] 
                      md:px-[25px]
                      xl:px-7'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isOpenBurgerMenu
            ? { opacity: 1, transition: { duration: 1 } }
            : { display: 'none', opacity: 0, transition: { duration: 1 } }
          }
          className='absolute top-0 left-0 w-full h-full bg-black/30 backdrop-blur z-[20]' />
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
        <Footer />
      </main>
    </div >
  )
}

export const Route = createRootRoute({ component: RootLayout })