import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { motion, useScroll, useMotionValueEvent, type Variants } from 'framer-motion'
import type { FileRoutesByFullPath } from '../../routeTree.gen'



const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up")
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious()
        if (!previous) return
        latest > previous ? setScrollDirection("down") : setScrollDirection("up")
    })

    return { scrollDirection, setScrollDirection }
}

const listVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function NavigationMenu() {
    const { scrollDirection } = useScrollDirection()

    return (
        <motion.nav
            initial={{ y: -50 }}
            animate={{ y: scrollDirection == 'up' ? 0 : -50 }}
            transition={{ duration: .3 }}
            className={`fixed w-full h-16 px-3 py-2 bg-black `}
        >
            <div className='px-6 flex items-center justify-between'>
                <div className='w-1/2'>
                    <span className='select-none font-black text-[2rem]'>
                        <Link
                            to="/"
                            activeProps={{
                                className: 'pointer-events-none',
                                style: { pointerEvents: "none" }
                            }}
                            activeOptions={{ exact: false }}>
                            Only
                        </Link>
                    </span>
                </div>
                <div className='min-w-1/2 flex items-center justify-end 2xl:justify-between h-full'>
                    <motion.ul
                        variants={listVariants}
                        initial="hidden"
                        animate="visible"
                        className={`hidden 2xl:flex justify-center gap-8 pl-10`}>
                        <NavLink label='Проекты' to="/projects" variants={itemVariants} />
                        <NavLink label='Компания' to="/company" variants={itemVariants} />
                        <NavLink label='Направления' to="/fields" variants={itemVariants} />
                        <NavLink label='Карьера' to="/job" variants={itemVariants} />
                        <NavLink label='Блог' to="/blog" variants={itemVariants} />
                        <NavLink label='Контакты' to="/contacts" variants={itemVariants} />
                    </motion.ul>
                    <BurgerMenu />
                </div>

            </div>


        </motion.nav >)
}

interface NavLinkProps {
    label: string;
    to: keyof FileRoutesByFullPath;
    variants: Variants
}

const NavLink = ({ label, to, variants }: NavLinkProps) => {
    return (
        <motion.li
            initial={{ opacity: 0, y: -10 }}
            variants={variants}
            className="relative"
        >
            <Link
                to={to}
                className="group text-sm lowercase inline-block"
                activeProps={{ className: "active pointer-events-none" }}
                activeOptions={{ exact: false }}
            >
                {({ isActive }) => (
                    <>
                        <span>{label}</span>

                        <div
                            className={`
                  h-[0.5px] bg-white mt-0
                  origin-left
                  transition-transform duration-500 ease-in-out
                  ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                `}
                        />
                    </>
                )}
            </Link>
        </motion.li>
    )
}

const burgerTopStyles = new Map<boolean, string>()
    .set(true, "left-0")
    .set(false, "left-0 top-[9px] group-hover:scale-y-[0.6] group-hover:-translate-y-[2px]")


const burgerDownStyles = new Map<boolean, string>()
    .set(true, "left-0 top-[18px] -translate-y-[10px] scale-x-[0.74] scale-y-[0.6] -rotate-45")
    .set(false, "left-0 top-[18px] group-hover:scale-y-[0.6] group-hover:translate-y-[2px]")


const BurgerMenu = () => {
    const [open, setOpen] = useState(true)
    return (
        <button className={`group cursor-pointer w-[36px] h-[32px] border ${open ? 'scale-[.8]' : ''}`} onClick={() => setOpen(prev => !prev)}>
            <div className="relative w-full h-full">
                <span
                    className={`
        absolute h-[2.5px] w-full  bg-white
        transition-transform duration-200 ease-in-out origin-right
        ${burgerTopStyles.get(open)}
      `}
                />
                <span
                    className={`
        absolute h-[2.5px] w-full  bg-white
        transition-transform duration-200 ease-in-out origin-right
        ${burgerDownStyles.get(open)}
      `}
                />
            </div>
        </button>


    )
}

{/* <span
                    className={`
        absolute left-0 top-[9px] w-full h-[2.5px] bg-white
        transition-transform duration-200 ease-in-out
        group-hover:scale-y-[0.6] group-hover:-translate-y-[2px]
      `}
                />
                <span
                    className={`
        absolute left-0 top-[18px] w-full h-[2.5px] bg-white
        transition-transform duration-200 ease-in-out
        group-hover:scale-y-[0.6] group-hover:translate-y-[2px]
      `} */}