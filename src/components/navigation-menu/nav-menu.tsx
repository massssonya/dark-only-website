import { motion } from 'framer-motion'
import { navigationConfig } from '../../config/navigation.config'
import { navMenuVariants } from './animation/navigation-menu.animation'
import { NavigationMenuList } from './nav-menu-list'
import { useHoveredLink } from './model/use-hovered-link'
import { NavigationMenuFavorite } from './nav-menu-favorite'
import { NavigationMenuLocale } from './nav-menu-locale'
import { NavigationMenuSocials } from './nav-menu-socials'
import { NavigationMenuVideo } from "./nav-menu-video"
import { Button } from '../ui/button'
import { NavigationMenuGallery } from './nav-menu-gallery'
import { PresentationDocuments, TelegramInfo } from '../common'
import { ContactsInfo } from '../common/contacts'
import { Grid, GridItem, type GridProps } from '../ui/layout'

// video, telegram, contacts, socials, locale, documents, copyright, favorite, gallery, button, list

const configGrid: GridProps = {
    base: {
        rows: "auto repeat(7, min-content)",
        areas: [
            'list list',
            'favorite .',
            'documents documents',
            'contacts .',
            'telegram .',
            'button button',
            'socials .',
            'copyright locale'
        ]
    },
    md: {
        columns: "50%",
        rows: "auto max-content max-content max-content max-content max-content max-content",
        areas: [
            "list socials",
            "favorite .",
            "telegram .",
            "contacts .",
            "documents gallery",
            "locale gallery",
            "copyright button"
        ],
    },
    xl: {
        columns: 'max-content min-content auto 25% 25%',
        rows: "auto auto min-content min-content max-content",
        areas: [
            'video video video list list',
            'video video video . gallery',
            'video video video telegram gallery',
            'locale locale . contacts gallery',
            'copyright documents favorite socials button'
        ],
    }
}

export const NavigationMenu = () => {
    const { changeHoveredLink, displayedLink } = useHoveredLink()

    return (
        <motion.div
            variants={navMenuVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className='fixed w-full h-screen bg-neutral-800 z-[900]'
        >
            <div className='relative w-full h-full'>
                <Grid {...configGrid} className='
                                                absolute top-[52px] left-0 w-[100vw] h-[calc(100dvh-52px)]
                                                overflow-y-auto overflow-x-hidden 
                                                no-scrollbar
                                                px-[15px] pb-[15px]
                                                md:px-[25px] md:pb-[25px]
                                                xl:h-screen xl:w-[100vw] xl:top-0 xl:pt-[4.0625vw] xl:px-[1.5625vw]
                                                '>
                    <div className='hidden xl:flex absolute left-1/2 bg-white/50 w-[1px] h-[10.9375vw]' />
                    {/* video */}
                    <GridItem area='video' className='hidden absolute xl:flex'>
                        <NavigationMenuVideo displayedLink={displayedLink} />
                    </GridItem>
                    {/* navigation list links */}
                    <GridItem area='list' className='mt-[40px] mb-[60px] md:mb-[80px] md:mt-[50px] xl:mt-[3.90625vw] xl:mb-0 xl:pl-[2.34375vw] 2xl:mt-[.4722222222vw]'>
                        <NavigationMenuList changeHoveredLink={changeHoveredLink} />
                    </GridItem>
                    {/* telegram */}
                    <GridItem area='telegram' className='mt-[40px] md:mt-[0px] md:mb-[24px] xl:mt-12 xl:pl-[2.34375vw]'>
                        <TelegramInfo isLabel />
                    </GridItem>
                    {/* contacts */}
                    <GridItem area='contacts' className='mt-[40px] md:mt-[0px] md:mb-[40px] xl:mb-[1.796875vw] xl:pl-[2.34375vw]'>
                        <ContactsInfo />
                    </GridItem>
                    {/* socials */}
                    <GridItem area='socials' className='mt-[24px] md:mt-[50px] xl:mt-0 xl:pl-[2.34375vw] xl:flex'>
                        <NavigationMenuSocials />
                    </GridItem>
                    {/* locale */}
                    <GridItem area='locale' className='flex justify-end items-end md:items-start md:justify-start xl:flex-start xl:w-[218px]'>
                        <NavigationMenuLocale />
                    </GridItem>
                    {/* documents */}
                    <GridItem area='documents' className='flex items-end md:mb-[60px] xl:mb-0 xl:ml-[5.46875vw] xl:pt-[15px]'>
                        <PresentationDocuments />
                    </GridItem>
                    {/* copyright */}
                    <GridItem area='copyright' className='relative mt-[40px] pt-[15px] flex flex-col justify-end xl:mt-0 xl:pt-0'>
                        <p className='h5'>{navigationConfig.copyright.company}</p>
                        <p className='h5'>{navigationConfig.copyright.years}</p>
                        <hr className='absolute top-0 left-[calc(15px*-1)] w-[100vw] h-[1px] bg-white md:hidden' />
                    </GridItem>
                    {/* favorite */}
                    <GridItem area='favorite' className='mb-[34px] md:mb-[40px] xl:mb-0 xl:ml-44 xl:flex xl:items-end'>
                        <NavigationMenuFavorite />
                    </GridItem>
                    {/* gallery */}
                    <GridItem area='gallery' className='hidden xl:flex xl:justify-end xl:items-end'>
                        <NavigationMenuGallery />
                    </GridItem>
                    {/* button */}
                    <GridItem area='button' className='mt-[32px] flex justify-end md:items-end md:mt-[15px] xl:mt-[1.171875vw]'>
                        <Button $width='fit' className='buttons'>начать проект</Button>
                    </GridItem>
                </Grid>
            </div>
        </motion.div >
    )
}


