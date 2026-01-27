import { Button } from '../ui/button'
import { PresentationDocuments, TelegramInfo } from '../common'
import { ContactsInfo } from '../common/contacts'
import { OnlyDigitalIcon } from '../ui/icons'
import { FooterBottom } from "./footer-bottom"
import { Socials } from '../common/socials'

export function Footer() {
    return (
        <footer className='
                           pb-[24px] border-t flex flex-col gap-[15px]
                            xl:px-0 xl:pb-[2.22vw]
                            '>
            <div className="
                            grid pt-[24px]
                            md:pt-[min(2.6041666667vw,2.6041666667vw)]
                            md:grid-cols-2 xl:grid-cols-[calc(50%+2.79vw)_2fr_1fr]
                            [grid-template-areas:'button'_'contacts'_'telegram'_'socials'_'year']
                            md:[grid-template-areas:'logo_text'_'button_contacts'_'socials_telegram'_'year_documents']
                            xl:[grid-template-areas:'button_text_logo'_'._contacts_.'_'socials_telegram_.'_'year_documents_.']
                            ">
                <div className='
                                hidden [grid-area:logo] 
                                md:block 
                                xl:justify-self-end'>
                    <OnlyDigitalIcon className='
                                                w-[154px]
                                                xl:w-[13.3333333333vw]
                                                ' />
                </div>
                <div className='
                                hidden [grid-area:text]
                                md:block md:mb-[24px]
                                '>
                    <p className='text2'>
                        Создаем digital-продукт на базе
                        <br />
                        стратегии, креатива и технологий
                    </p>
                </div>
                <div className='[grid-area:button] flex'>
                    <Button className='h-fit'>начать проект</Button>
                </div>
                <div className='
                                [grid-area:contacts] mt-[40px] mb-[24px]
                                md:mt-0 
                                xl:mb-[min(1.5625vw,1.5625vw)]
                                '>
                    <ContactsInfo className='gap-[15px]' />
                </div>
                <div className='[grid-area:socials]'>
                    <div className='flex gap-1'>
                        <Socials />
                    </div>
                </div>
                <div className='flex items-center gap-1 [grid-area:telegram] mb-[5.2084vw]'>
                    <TelegramInfo isIconLeft />
                </div>
                <div className='
                                [grid-area:year] flex items-end mt-[70px]
                                xl:mt-[0px]
                                '>
                    <p className='h4'>© 2014 - 2025</p>
                </div>
                <div className='
                                hidden [grid-area:documents]
                                md:block
                                '>
                    <PresentationDocuments />
                </div>
            </div>
            <FooterBottom />
        </footer>
    )
}

