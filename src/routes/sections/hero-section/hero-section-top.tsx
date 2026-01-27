import { motion, MotionValue } from "framer-motion"
import { LinkButton } from "../../../components/ui/link"
import { AwwwardsIcon, CSSDAIcon, MixxRussiaIcon, RatingRunetIcon, GoldSiteIcon } from "../../../components/ui/icons"
import { CreativeDigitalProduction } from "./creative-digital-production"
import type { ReactNode } from "react"


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
      <div className='hidden xl:flex flex-col gap-3'>
        {
          Buttons.map(button => (
            <LinkButton
              key={button.to}
              to={button.to}
              leftText={button.number}
              className='hover:scale-[1.15]'
            >
              {button.icon}
            </LinkButton>
          ))
        }
      </div>
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