import { motion } from 'framer-motion'
import { BurgerMenu } from './header-burger-menu'
import { HeaderLogo } from './header-logo'
import { navigationConfig } from '../../config/navigation.config'
import { createHeaderListVariants, headerVariants, headerLinkVariants } from './animation/header.animation'
import { useHeaderAnimationState } from './model/header-animation.state'
import { LinkUnderline, SimpleLink } from '../ui/link'
import { List } from '../ui/list'
import { useSharedScrollState } from '../../providers/scroll-provider'
import { useMediaQueryState } from '../../providers/media-query-provider'
import { Container } from '../ui/layout'

interface HeaderMenuProps {
    isOpenBurgerMenu: boolean,
    toggleBurgerMenu: () => void
}

export function Header({ isOpenBurgerMenu, toggleBurgerMenu }: HeaderMenuProps) {
    const { isTablet, isMobile } = useMediaQueryState()
    const isDisableAnimation = isTablet || isMobile
    const { scrollDirection } = useSharedScrollState()
    const { hasAnimatedOnce, markAnimated } = useHeaderAnimationState()

    const listVariants = isDisableAnimation
        ? undefined
        : createHeaderListVariants(hasAnimatedOnce)

    return (
        <motion.header
            variants={isDisableAnimation ? undefined : headerVariants}
            initial={isDisableAnimation ? false : "visible"}
            animate={isDisableAnimation
                ? false
                : scrollDirection === 'up'
                    ? 'visible'
                    : 'hidden'
            }
            className='fixed top-0 left-0 w-full bg-neutral-800 z-[1000]'>
            <nav className={`h-16 py-2 border-b border-white/50`}>
                <Container>
                    <div className='flex items-center justify-between'>
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
                </Container>
            </nav>
        </motion.header>
    )
}