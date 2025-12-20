import { useState } from 'react'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'framer-motion'

import { Header } from '../components/header'
import { useLockBodyScroll } from '../hooks/use-lock-body-scroll'
import { NavigationMenu } from '../components/navigation-menu'

const RootLayout = () => {
  const [isOpenBurgerMenu, setOpenBurgerMenu] = useState(false)

  const toggleBurgerMenu = () => setOpenBurgerMenu(p => !p)

  useLockBodyScroll(isOpenBurgerMenu)

  return (
    <div className='m-0 mx-auto p-0 flex-col min-h-[100vh] no-scrollbar'>
      <Header
        isOpenBurgerMenu={isOpenBurgerMenu}
        toggleBurgerMenu={toggleBurgerMenu} />
      <AnimatePresence>
        {isOpenBurgerMenu &&
          <NavigationMenu />
        }
      </AnimatePresence>
      <main className='relative py-[70px] mx-3 overflow-y-hidden no-scrollbar'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isOpenBurgerMenu ? { opacity: 1, transition: { duration: 1 } } : { opacity: 0, transition: { duration: 1 } }}
          className='absolute top-0 left-0 w-full h-full bg-black/30 backdrop-blur z-[20] no-scrollbar' />
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>
    </div >
  )
}

export const Route = createRootRoute({ component: RootLayout })

{/* <AnimatePresence mode="wait">
          <motion.div
            className='absolute top-0 left-0 w-full h-[150vh] bg-white'
            key={location.pathname}
            initial={{ y: -1000 }}
            animate={{ y: 1000 }}
            transition={{ duration: 3 }}
          >
          </motion.div>
        </AnimatePresence> */}