import { motion } from 'framer-motion'
import { navigationConfig } from '../../config/navigation.config'
import { navMenuVariants } from './animation/navigation-menu.animation'
import { NavigationMenuList } from './nav-menu-list'
import { useHoveredLink } from './model/use-hovered-link'
import { NavigationMenuFavorite } from './nav-menu-favorite'
import { NavigationMenuLocale } from './nav-menu-locale'
import { NavigationMenuSocials } from './nav-menu-socials'
import { Button } from '../ui/button'
import { NavigationMenuGallery } from './nav-menu-gallery'
import { PresentationDocuments, TelegramInfo } from '../common'
import { ContactsInfo } from '../common/contacts'

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
                                w-[100vw] h-screen no-scrollbar
                                grid grid-cols-[max-content_min-content_auto_25%_25%] grid-rows-[auto_auto_min-content_min-content_max-content]
                                [grid-template-areas:'video_video_video_list_list'_'video_video_video_._icon'_'video_video_video_telegram_gallery'_'locale_locale_._contacts_gallery'_'copyright_documents_favorite_socials_button']
                                ">
                    <div className='hidden xl:flex absolute left-1/2 bg-white/50 w-[1px] h-[10.9375vw]' />
                    {/* video */}
                    <div className='hidden absolute mt-8 xl:flex xl:[grid-area:video]'>
                        {displayedLink}
                    </div>

                    {/* navigation list links */}
                    <NavigationMenuList changeHoveredLink={changeHoveredLink} />

                    {/* telegram */}
                    <div className='[grid-area:telegram] mt-12 mb-12'>
                        <TelegramInfo />
                    </div>
                    {/* contacts */}
                    <div className="[grid-area:contacts] mb-18">
                        <ContactsInfo />
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
                        <PresentationDocuments />
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


