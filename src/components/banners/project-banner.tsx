import { AnimatePresence, type MotionProps } from "framer-motion"
import type { ProjectBannersProps } from "./types";
import { getBannerImageItem } from "./helpers";
import type { VariantSpanComponent } from "../ui/text/span-component";
import { Banner, BannerHeading, BannerImage, BannerImagesContainer, BannerMain, BannerText, BannerTitle } from "../ui/banner";
import { MotionLink } from "../ui/link";
import { MotionSpanComponent } from "../ui/text";
import { useMediaQueryState } from "../../providers/media-query-provider";
import { PRESETS } from "../../shared/lib/animations";

const SpanAnimations: Partial<Record<VariantSpanComponent, MotionProps>> = {
    icon: PRESETS.scaleInLeft(0.4),
    word: PRESETS.fadeUp(),
};

export function ProjectBanner({ heading, href, imagesConfig, text, title }: ProjectBannersProps) {
    const { isDesktop } = useMediaQueryState()
    return (
        <AnimatePresence mode="wait">
            <Banner key={heading} className="hidden md:block">
                <BannerMain>
                    <BannerHeading
                        {...PRESETS.fadeIn()}
                        className="buttons">
                        {heading}
                    </BannerHeading>
                    <BannerTitle className="h1">
                        {title.map(({ element, id, children }) => (
                            <MotionSpanComponent
                                key={id}
                                $variant={element}
                                {...SpanAnimations[element]}
                            >
                                {children}
                            </MotionSpanComponent>)
                        )}
                    </BannerTitle>
                    <BannerText
                        {...PRESETS.fadeUp(.5)}
                        className="text2"
                    >
                        {text}
                    </BannerText>
                    <MotionLink
                        {...PRESETS.fadeUp(.7)}
                        $variant="asBaseButton"
                        className="buttons mt-[20px]"
                        href={href}
                    >
                        подробнее
                    </MotionLink>
                </BannerMain>
                <BannerImagesContainer>
                    {getBannerImageItem(imagesConfig, isDesktop).map(({ id, node }, index) => {
                        return (
                            <BannerImage
                                key={id}
                                {...PRESETS.scaleFlyUp(.1 * index)}
                            >
                                {node}
                            </BannerImage>
                        )
                    })}
                </BannerImagesContainer>
            </Banner >
        </AnimatePresence>
    )
}




