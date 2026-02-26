import styled from "@emotion/styled"
import { motion } from "framer-motion"

export const Banner = styled(motion.div)`
  height: 100%;
  padding-top: 5.46875vw;
  position: relative;
  width: 100%;

  background-color: black;

  @media (min-width: 1280px) {
      padding-left: 2.34375vw;
      padding-top: 9.375vw;
  }

  @media (min-width: 768px) {
        padding-left: 25px;
  }
}
`

export const BannerMain = styled(motion.div)`
    position: relative;
`

export const BannerHeading = styled(motion.div)`
    text-transform: lowercase;
`

export const BannerTitle = styled(motion.div)`
    margin-top: 24px;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    justify-items: center;
    align-items: center;
`

export const BannerText = styled(motion.p)`
    margin-top: 24px;
`

export const BannerImagesContainer = styled.div`
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;

    @media (min-width: 768px) {
        width: 386px;
    }

    @media (min-width: 1280px) {
        width: 59.6875vw;
    }
`

export const BannerImage = styled(motion.div)`
  position: absolute;
  top: 0px;
  right: 0px;
  height: 100%;

  @media (min-width: 768px) {
        width: 386px;
  }
  
  @media (min-width: 1280px) {
        width: 59.6875vw;
  }
`


