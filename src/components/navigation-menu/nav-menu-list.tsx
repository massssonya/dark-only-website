import { motion } from 'framer-motion'
import { navigationConfig } from "../../config/navigation.config"
import { List } from "../ui/list"
import { listVariants, navLinkVariants } from "./animation/navigation-menu.animation"
import { SimpleLink } from '../ui/link'
import { NavigationMenuLink } from './nav-menu-link'

interface Props {
    changeHoveredLink: (link: string) => void
}

export const NavigationMenuList = ({ changeHoveredLink }: Props) => {
    return (
        <List
            isOpen={false}
            variants={listVariants}
            className='h-fit flex flex-col gap-1'>
            {navigationConfig.menu.map((item) => (
                <motion.li
                    key={`${item.to}_mobile`}
                    variants={navLinkVariants}
                    className="relative w-fit"
                    onHoverStart={() => changeHoveredLink(item.to)}
                >
                    <SimpleLink
                        className="text-white text-[calc(1.4rem+0.5vw)] font-bold transition duration-300 hover:text-gray-400"
                        to={item.to}>
                        {({ isActive }) => (
                            <NavigationMenuLink
                                label={item.label}
                                isActive={isActive} />
                        )}
                    </SimpleLink>
                </motion.li>
            ))}
        </List>
    )
}