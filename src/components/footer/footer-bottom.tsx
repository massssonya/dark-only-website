import { LinkHrefWithoutUnderlineButton } from '../ui/link/link-button'
import { navigationConfig } from '../../config/navigation.config'
import { MotionSpanComponent } from '../ui/text'
import { VARIANTS } from '../../shared/lib/animations'

export function FooterBottom() {
    return (
        <div className="flex flex-col">
            <MotionSpanComponent 
                $variant='container'
                className='w-full overflow-hidden font-bold tracking-[-.02em] leading-[110%] text-[3.125rem] md:text-[5.85vw] xl:text-[6.04167vw]'
                variants={VARIANTS.STAGGER_CONTAINER}
                initial="hidden"
                whileInView="visible"
            >
                <MotionSpanComponent $variant='word'
                    className='inline-block overflow-hidden text-start'
                    variants={VARIANTS.FADE_UP_ITEM}
                >
                    creative&nbsp;
                </MotionSpanComponent>
                <MotionSpanComponent $variant='word'
                    className='inline-block overflow-hidden text-start'
                    variants={VARIANTS.FADE_UP_ITEM}
                >
                    digital&nbsp;
                </MotionSpanComponent>
                <MotionSpanComponent $variant='word'
                    className='inline-block overflow-hidden text-start'
                    variants={VARIANTS.FADE_UP_ITEM}
                >
                    production
                </MotionSpanComponent>
            </MotionSpanComponent>
            <div className='xl:mt-[15px]'>
                <LinkHrefWithoutUnderlineButton href={navigationConfig.confidentiality.href} >
                    Политика конфиденциальности
                </LinkHrefWithoutUnderlineButton>
            </div>
        </div>
    )
}
