import { motion } from 'framer-motion'
import { navigationConfig } from '../../config/navigation.config'
import { navMenuVariants } from './animation/navigation-menu.animation'
import { LinkHrefButton } from '../ui/link'
import { NavigationMenuList } from './nav-menu-list'
import { useHoveredLink } from './model/use-hovered-link'
import { NavigationMenuFavorite } from './nav-menu-favorite'
import { NavigationMenuDocuments } from './nav-menu-documents'
import { NavigationMenuLocale } from './nav-menu-locale'
import { NavigationMenuSocials } from './nav-menu-socials'
import { Button } from '../ui/button'
import { NavigationMenuGallery } from './nav-menu-gallery'

export const NavigationMenu = () => {
    const { changeHoveredLink, displayedLink } = useHoveredLink()

    return (
        <motion.div
            variants={navMenuVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className='fixed w-full h-screen bg-neutral-800 z-[900]'>
            <div className='relative w-full h-full'>
                <div className="
                                absolute top-0 left-0 [contain:content] overflow-y-auto overflow-x-hidden pt-[1.5625vw] pb-[1.5625vw] px-6
                                h-screen no-scrollbar
                                w-full h-full grid grid-cols-[max-content_min-content_auto_25%_25%] grid-rows-[auto_auto_min-content_min-content_max-content]
                                [grid-template-areas:'video_video_video_list_list'_'video_video_video_._icon'_'video_video_video_telegram_gallery'_'locale_locale_._contacts_gallery'_'copyright_documents_favorite_socials_button']
                                ">
                    <div className='hidden xl:flex absolute left-1/2 bg-white/50 w-[1px] h-[10.9375vw]' />
                    {/* video */}
                    <div className='hidden mt-8 xl:flex [grid-area:video]'>
                        {displayedLink}
                    </div>

                    {/* navigation list links */}
                    <NavigationMenuList changeHoveredLink={changeHoveredLink} />

                    {/* telegram */}
                    <div className='flex flex-col [grid-area:telegram] mt-12 mb-12 pl-12'>
                        <span className='text-[calc(0.28rem+0.5vw)] text-gray-300'>telegram для связи</span>
                        <LinkHrefButton href={navigationConfig.telegram.href} className='border-b border-white w-fit text-[calc(0.6rem+0.5vw)] transition duration-300 hover:text-gray-400 hover:border-gray-400'>{navigationConfig.telegram.label}</LinkHrefButton>
                    </div>

                    {/* contacts */}
                    <div className='flex flex-col gap-3 [grid-area:contacts] mb-18 pl-12'>
                        <LinkHrefButton href={navigationConfig.email.href} className='border-b border-white w-fit text-[calc(0.6rem+0.5vw)] transition duration-300 hover:text-gray-400 hover:border-gray-400'>{navigationConfig.email.label}</LinkHrefButton>
                        <LinkHrefButton href={navigationConfig.phone.href} className='border-b border-white w-fit text-[calc(0.6rem+0.5vw)] transition duration-300 hover:text-gray-400 hover:border-gray-400' >{navigationConfig.phone.label}</LinkHrefButton>
                    </div>

                    {/* socials */}
                    <div className='[grid-area:socials] pl-12'>
                        <NavigationMenuSocials />
                    </div>

                    {/* locale */}
                    <div className='[grid-area:locale] flex flex-start'>
                        <NavigationMenuLocale />
                    </div>

                    {/* documents */}
                    <div className='[grid-area:documents] ml-44 flex items-end '>
                        <NavigationMenuDocuments />
                    </div>

                    {/* copyright */}
                    <div className='[grid-area:copyright] flex flex-col justify-end text-lg'>
                        <p>{navigationConfig.copyright.company}</p>
                        <p>{navigationConfig.copyright.years}</p>
                    </div>

                    {/* favorite */}
                    <div className='[grid-area:favorite] ml-44 flex items-center gap-3'>
                        <NavigationMenuFavorite />
                    </div>

                    {/* gallery */}
                    <div className='[grid-area:gallery] flex justify-end items-end text-nowrap'>
                        <NavigationMenuGallery />
                    </div>

                    {/* button */}
                    <div className='[grid-area:button] flex justify-end mt-[1.171875vw]'>
                        <Button>начать проект</Button>
                    </div>
                </div>

            </div>
        </motion.div>
    )
}


