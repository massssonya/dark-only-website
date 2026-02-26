import { CoffeeIcon } from "../../../components/ui/icons";
import { type Variants } from "framer-motion"
import { MotionSpanComponent, SpanComponent } from "../../../components/ui/text";

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
            <MotionSpanComponent
                $variant="word"
                initial="creative-initial"
                animate="creative-animate"
                transition={{
                    duration: 0.6
                }}
                variants={variants}
            >
                Creative
            </MotionSpanComponent>
            <MotionSpanComponent
                $variant="icon"
                initial="icon-initial"
                animate="icon-animate"
                transition={{
                    duration: 0.8,
                    delay: 0.2
                }}
                variants={variants}
            >
                <CoffeeIcon />
            </MotionSpanComponent>
            <MotionSpanComponent
                $variant="word"
                initial="digital-initial"
                animate="digital-animate"
                transition={{
                    duration: 0.8,
                    delay: 0.2
                }}
                variants={variants}
            >
                digital&nbsp;
            </MotionSpanComponent>
            <SpanComponent $variant="line-break" />
            <MotionSpanComponent
                $variant="word"
                initial="production-initial"
                animate="production-animate"
                transition={{
                    duration: 0.6,
                    delay: 0.1
                }}
                variants={variants}
            >
                production&nbsp;
            </MotionSpanComponent>
        </div>
    )
}