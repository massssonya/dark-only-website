import { LocaleIcon } from "../ui/icons"
import { LinkButton } from "../ui/link"
import { CaptionText } from "../ui/text"

export const NavigationMenuLocale = () => {
    return (
        <LinkButton $variant="changeColor" href="/" className="group flex gap-[12px] ml-auto md:ml-0 pb-[6px]">
            <span className="rounded-[11px] overflow-hidden">
                <LocaleIcon
                    className='
                                w-[32px] h-[32px] transition-colors duration-300 group-hover:text-black
                                md:w-[48px] md:h-[48px]
                                '
                    classNames={{
                        pathPrimary: "text-black group-hover:text-white transition-colors duration-300",
                        pathSecondary: 'text-white group-hover:text-black transition-colors duration-300'
                    }} />
            </span>
            <CaptionText>english version</CaptionText>
        </LinkButton>
    )
}

