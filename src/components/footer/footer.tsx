import { Button } from '../ui/button'
import { PresentationDocuments, TelegramInfo } from '../common'
import { ContactsInfo } from '../common/contacts'
import { OnlyDigitalIcon } from '../ui/icons'
import { FooterBottom } from "./footer-bottom"
import { Socials } from '../common/socials'
import { Container, Grid, GridItem, type GridProps } from '../ui/layout'

const configGrid: GridProps = {
    base: {
        areas: [
            "button",
            "contacts",
            "telegram",
            "socials",
            "year"
        ]
    },
    md: {
        columns: "1fr 1fr",
        areas: [
            'logo text',
            'button contacts',
            'socials telegram',
            'year documents',
        ],
    },
    xl: {
        columns: 'calc(50% + 2.79vw) 2fr 1fr',
        areas: [
            'button text logo',
            '. contacts .',
            'socials telegram .',
            'year documents .',
        ],
    }
}

export function Footer() {
    return (
        <footer className='pb-[24px]  xl:px-0 xl:pb-[2.22vw]'>
            <Container className='flex flex-col gap-[10px] md:gap-[15px] xl:gap-[1.5625vw]'>
                <Grid {...configGrid} className='pt-[24px] border-t md:pt-[min(2.6041666667vw,2.6041666667vw)]'>
                    <GridItem area='logo' className='hidden md:block xl:justify-self-end'>
                        <OnlyDigitalIcon className='w-[154px] xl:w-[13.3333333333vw]' />
                    </GridItem>
                    <GridItem area='text' className='hidden md:block md:mb-[24px]'>
                        <p className='text2'>
                            Создаем digital-продукт на базе
                            <br />
                            стратегии, креатива и технологий
                        </p>
                    </GridItem>
                    <GridItem area='button' className='flex'>
                        <Button className='buttons'>начать проект</Button>
                    </GridItem>
                    <GridItem area='contacts' className='mt-[40px] mb-[24px] md:mt-0 xl:mb-[min(1.5625vw,1.5625vw)]'>
                        <ContactsInfo className='gap-[15px]' />
                    </GridItem>
                    <GridItem area='socials'>
                        <div className='flex gap-1'>
                            <Socials />
                        </div>
                    </GridItem>
                    <GridItem area='telegram' className='flex items-center gap-1 mb-[5.2084vw]'>
                        <TelegramInfo isIconLeft />
                    </GridItem>
                    <GridItem area='year' className='flex items-end mt-[70px] xl:mt-[0px]'>
                        <p className='h4'>© 2014 - 2025</p>
                    </GridItem>
                    <GridItem area='documents' className='hidden md:block'>
                        <PresentationDocuments />
                    </GridItem>
                </Grid>
                <FooterBottom />
            </Container>
        </footer>
    )
}

