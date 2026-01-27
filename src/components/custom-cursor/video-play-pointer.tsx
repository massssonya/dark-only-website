import { useMotionValue, useSpring, motion } from "framer-motion";
import { withMouseFollower, type WithMouseFollowerProps } from "../../hoc/with-mouse-follower";
import { useEffect } from "react";
import { VideoPlayIcon } from "../ui/icons";

export function VideoPlayPointer({ mousePosition }: WithMouseFollowerProps) {
    const mouseX = useMotionValue(mousePosition.x);
    const mouseY = useMotionValue(mousePosition.y);

    const springConfig = { damping: 25, stiffness: 150 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    useEffect(() => {
        mouseX.set(mousePosition.x);
        mouseY.set(mousePosition.y);
    }, [mousePosition, mouseX, mouseY]);

    return (
        <motion.div
            className='
                  fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2
                  pointer-events-none
                  bg-white rounded-full w-[48px] h-[48px] 
                  flex justify-center items-center 
                '
            initial={{
                opacity: 0,
                scale: 0
            }}
            animate={{
                opacity: 1,
                scale: 2
            }}
            exit={{
                opacity: 0,
                scale: 0
            }}
            style={{
                x: smoothX,
                y: smoothY
            }}
        >
            <motion.div
                initial={{
                    scale: .5
                }}>
                <VideoPlayIcon />
            </motion.div>
        </motion.div>
    )
}

export const VideoPlayPointerAsMouseFollower = withMouseFollower(VideoPlayPointer)