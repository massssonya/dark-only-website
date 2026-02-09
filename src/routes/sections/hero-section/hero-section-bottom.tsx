import { motion, MotionValue } from "framer-motion"
import { ContactsInfo, TelegramInfo } from "../../../components/common/contacts"
import { TextComponent } from "../../../components/ui/text"
import { PresentationDocuments } from "../../../components/common"
import { Button } from "../../../components/ui/button"
import { FirstAward } from "./first-award"
import { Grid } from "../../../components/ui/layout"


function DesktopHeroSectionBottom({ translateY }: { translateY: MotionValue<string> | string }) {
    return (
        <motion.div
            className='z-1 pb-[2.34375vw]'
            style={{
                translateY
            }}
        >
            <Grid base={{ columns: "1fr 1fr" }}>
                <Grid base={{ columns: "100fr 71fr" }} className="h-full">
                    <FirstAward />
                    <div className="flex flex-col justify-between">
                        <ContactsInfo />
                        <TelegramInfo />
                    </div>
                </Grid>
                <div className="pl-[2.78vw] flex justify-between">
                    <div className="flex flex-col gap-[1.38889vw] xl:w-[342px]">
                        <TextComponent as="p" className="text2">
                            Only.digital — агентство с фокусом на сильную аналитику, дизайн и разработку. В основе наших проектов лежат идеи, создаваемые на стыке стратегии, креатива и технологий.
                        </TextComponent>
                        <PresentationDocuments />
                    </div>
                    <div className="flex justify-end items-end">
                        <Button className="buttons">начать проект</Button>
                    </div>
                </div>
            </Grid>
        </motion.div>)
}

function TabletHeroSectionBottom({ translateY }: { translateY: MotionValue<string> | string }) {
    return (
        <motion.div
            className='z-1 border-b'
            style={{
                translateY
            }}>
            <Grid base={{ columns: "1fr 1fr" }}>
                <Grid base={{ columns: "1fr" }} className="h-full pb-[20px]">
                    <div className="flex flex-col justify-start">
                        <FirstAward />
                    </div>
                    <div className="flex items-end">
                        <PresentationDocuments />
                    </div>
                </Grid>
                <div className="relative pl-[20px] pb-[20px] flex flex-col gap-[40px]">
                    <div className="absolute left-0 bottom-0 w-px h-full bg-white"></div>
                    <div className="flex flex-col gap-[20px]">
                        <div className="flex gap-[56px]">
                            <ContactsInfo />
                            <TelegramInfo />
                        </div>
                        <TextComponent as="p" className="text2">
                            Only.digital — агентство с фокусом на сильную аналитику, дизайн и разработку. В основе наших проектов лежат идеи, создаваемые на стыке стратегии, креатива и технологий.
                        </TextComponent>
                    </div>
                    <Button className="buttons">начать проект</Button>
                </div>
            </Grid>
        </motion.div>)
}

function MobileHeroSectionBottom({ translateY }: { translateY: MotionValue<string> | string }) {
    return (
        <motion.div
            className='flex flex-col gap-[32px] pb-[15px]'
            style={{
                translateY
            }}>
            <Grid base={{ columns: "1fr 1fr" }}>
                <FirstAward />
                <div className="border-l pl-[20px] flex flex-col justify-between">
                    <ContactsInfo />
                    <TelegramInfo isIconRight />
                </div>
            </Grid>
            <Button $width="full" className="buttons">начать проект</Button>
        </motion.div>
    )
}

export { DesktopHeroSectionBottom, TabletHeroSectionBottom, MobileHeroSectionBottom }