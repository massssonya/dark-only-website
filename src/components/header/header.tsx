import { motion } from 'framer-motion'
import { useScrollDirection } from '../../hooks/use-scroll-direction'
import { BurgerMenu } from './header-burger-menu'
import { HeaderLogo } from './header-logo'
import { navigationConfig } from '../../config/navigation.config'
import { createHeaderListVariants, headerVariants, headerLinkVariants } from './animation/header.animation'
import { useHeaderAnimationState } from './model/header-animation.state'
import { LinkUnderline, SimpleLink } from '../ui/link'
import { List } from '../ui/list'

interface HeaderMenuProps {
    isOpenBurgerMenu: boolean,
    toggleBurgerMenu: () => void
}

export function Header({ isOpenBurgerMenu, toggleBurgerMenu }: HeaderMenuProps) {
    const { scrollDirection } = useScrollDirection()
    const { hasAnimatedOnce, markAnimated } = useHeaderAnimationState()

    const listVariants = createHeaderListVariants(hasAnimatedOnce)

    return (
        <motion.header
            variants={headerVariants}
            initial="visible"
            animate={scrollDirection === 'up' ? 'visible' : 'hidden'}
            className='fixed top-0 left-0 w-full bg-neutral-800 z-[1000]'>
            <nav className={`h-16 px-3 py-2 border-b border-white/50`}>
                <div className='px-4 flex items-center justify-between'>
                    <div className='w-1/2'>
                        <HeaderLogo />
                    </div>
                    <div className='min-w-1/2 flex items-center xl:justify-between justify-end h-full'>
                        <List
                            isOpen={isOpenBurgerMenu}
                            variants={listVariants}
                            className="hidden xl:flex justify-center gap-8 pl-10">
                            {navigationConfig.menu.map((item) => (
                                <motion.li
                                    key={item.to}
                                    variants={headerLinkVariants}
                                    onAnimationComplete={markAnimated}
                                    className="relative"
                                >
                                    <SimpleLink to={item.to}>
                                        {({ isActive }) => (
                                            <LinkUnderline label={item.label} isActive={isActive} />
                                        )}
                                    </SimpleLink>
                                </motion.li>
                            ))}
                        </List>
                        <BurgerMenu
                            isOpen={isOpenBurgerMenu}
                            onClick={toggleBurgerMenu} />
                    </div>
                </div>
            </nav>
        </motion.header>
    )
}