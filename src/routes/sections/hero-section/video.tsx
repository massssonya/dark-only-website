import { AnimatePresence, motion, MotionValue, type Variants } from "framer-motion"
import { VideoPlayPointerAsMouseFollower } from "../../../components/custom-cursor"

const variants: Variants = {
  "initial": {
      opacity: 0,
      scale: 0
  },
  "animate": {
      opacity: 1,
      scale: 1
  }
}

interface Props {
  videoWidth: MotionValue<string> | string,
  videoHeight: MotionValue<string> | string,
  isVisibleCursor: boolean
  setVisibleCursor: (value: boolean) => void,
  handleScroll: () => void
}

export function Video({ handleScroll, isVisibleCursor, setVisibleCursor, videoHeight, videoWidth }: Props) {
  return (
    <motion.div
      className='relative z-100 rounded-xl overflow-hidden cursor-none w-full bg-red-200'
      initial="initial"
      animate="animate"
      transition={{
        duration: 1.3,
        delay: 0.3
      }}
      style={{
        width: videoWidth,
        height: videoHeight,
      }}
      onHoverStart={() => setVisibleCursor(true)}
      onHoverEnd={() => setVisibleCursor(false)}
      variants={variants}
    >
      <AnimatePresence >
        {isVisibleCursor && <VideoPlayPointerAsMouseFollower />}
      </AnimatePresence>
      <img
        className='
                    object-cover w-full h-full pointer-events-none
                    xl:pointer-events-auto
                  '
        src='https://cdn.twocontinents.com/hfpqy_V7_B_IMG_Dubai_UAE_1200x800_e1936b3330.jpg'
        onClick={handleScroll}
      />
    </motion.div>
  )
}