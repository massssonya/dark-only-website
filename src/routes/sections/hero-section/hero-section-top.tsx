import { motion, MotionValue, type Variants } from "framer-motion"
import { LinkButton } from "../../../components/ui/link"
import { AwwwardsIcon, CSSDAIcon, MixxRussiaIcon, RatingRunetIcon, GoldSiteIcon } from "../../../components/ui/icons"
import { CreativeDigitalProduction } from "./creative-digital-production"
import { type ReactNode } from "react"

const containerVariants: Variants = {
  "initial": {},
  "animate": {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.11
    }
  }
}

const buttonsVariants: Variants = {
  "initial": {
    opacity: 0,
    y: -20
  },
  "animate": {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}


export function HeroSectionTop({ translateY }: { translateY: MotionValue<string> | string }) {

  return (
    <motion.div
      className='relative z-1 flex items-start justify-between'
      style={{
        translateY
      }}
    >
      <CreativeDigitalProduction />
      {/* buttons */}
      <motion.div
        className='hidden xl:flex flex-col gap-3'
        initial="initial"
        animate="animate"
        variants={containerVariants}
      >
        {
          Buttons.map(button => (
            <motion.div
              key={button.to}
              variants={buttonsVariants}
            >
              <LinkButton
                to={button.to}
                leftText={button.number}
                className='hover:scale-[1.15]'
              >
                {button.icon}
              </LinkButton>
            </motion.div>
          ))
        }
      </motion.div>
    </motion.div>)
}

interface ButtonProps {
  to: string,
  icon: ReactNode,
  number: number
}



const Buttons: ButtonProps[] = [
  {
    to: "/company?award=AWWWARDS",
    icon: <AwwwardsIcon />,
    number: 25
  },
  {
    to: "/company?award=CSSDA",
    icon: <CSSDAIcon />,
    number: 31
  },
  {
    to: "/company?award=Mixxrussia",
    icon: <MixxRussiaIcon />,
    number: 5
  },
  {
    to: "/company?award=РейтингРунета",
    icon: <RatingRunetIcon />,
    number: 27
  },
  {
    to: "/company?award=ЗолотойСайт",
    icon: <GoldSiteIcon />,
    number: 41
  },
]