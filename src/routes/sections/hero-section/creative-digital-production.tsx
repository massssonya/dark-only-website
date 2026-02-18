import { CoffeeIcon } from "../../../components/ui/icons";
import { motion, type Variants } from "framer-motion"

const variants: Variants = {
    "creative-initial": {
        opacity: 0,
        y: 100
    },
    "creative-animate": {
        opacity: 1,
        y: 0
    },
    "icon-initial": {
        scale: 0,
        x: -50
    },
    "icon-animate": {
        scale: 1,
        x: 0
    },
    "digital-initial": {
        opacity: 0,
        x: -50
    },
    "digital-animate": {
        opacity: 1,
        x: 0
    },
    "production-initial": {
        opacity: 0,
        y: 100
    },
    "production-animate": {
        opacity: 1,
        y: 0
    },

}

export function CreativeDigitalProduction() {
    return (
        <div className='
                        h0
                        max-w-[400px] 
                        flex flex-wrap justify-start items-center gap-x-2 gap-y-0 
                        sm:max-w-[65vw]
                        '>
            <motion.span
                className='word'
                initial="creative-initial"
                animate="creative-animate"
                transition={{
                    duration: 0.6
                }}
                variants={variants}
            >
                Creative
            </motion.span>
            <motion.span
                className='w-[calc(2rem+.78125vw)]'
                initial="icon-initial"
                animate="icon-animate"
                transition={{
                    duration: 0.8,
                    delay: 0.2
                }}
                variants={variants}
            >
                <CoffeeIcon className='w-full h-full cover' />
            </motion.span>
            <motion.span
                className="word"
                initial="digital-initial"
                animate="digital-animate"
                transition={{
                    duration: 0.8,
                    delay: 0.2
                }}
                variants={variants}
            >
                digital&nbsp;
            </motion.span>
            <span className='basis-full'></span>
            <motion.span
                className="word"
                initial="production-initial"
                animate="production-animate"
                transition={{
                    duration: 0.6,
                    delay: 0.1
                }}
                variants={variants}
            >
                production&nbsp;
            </motion.span>
        </div>
    )
}