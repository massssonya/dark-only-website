import { motion, type Variants } from 'framer-motion'
import { LinkHrefWithoutUnderlineButton } from '../ui/link/link-button'
import { navigationConfig } from '../../config/navigation.config'

export function FooterBottom() {
    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    }

    const item: Variants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4, ease: "easeOut"
            }
        }
    }

    return (
        <div className="flex flex-col">
            <motion.span
                className='w-full overflow-hidden font-bold tracking-[-.02em] leading-[110%] text-[3.125rem] md:text-[5.85vw] xl:text-[6.04167vw]'
                variants={container}
                initial="hidden"
                whileInView="visible"
            >
                <motion.span
                    className='inline-block overflow-hidden text-start'
                    variants={item}>
                    creative&nbsp;
                </motion.span>
                <motion.span
                    className='inline-block overflow-hidden text-start'
                    variants={item}>
                    digital&nbsp;
                </motion.span>
                <motion.span
                    className='inline-block overflow-hidden text-start'
                    variants={item}>
                    production
                </motion.span>
            </motion.span>
            <div className='
                            xl:mt-[15px]
                            '>
                <LinkHrefWithoutUnderlineButton href={navigationConfig.confidentiality.href} >
                    Политика конфиденциальности
                </LinkHrefWithoutUnderlineButton>
            </div>

        </div>
    )
}
