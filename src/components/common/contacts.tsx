import clsx from "clsx"
import { navigationConfig } from "../../config/navigation.config"
import { LinkHrefWithoutUnderlineButton, LinkHrefWithUnderlineButton } from "../ui/link/link-button"
import { CaptionText } from "../ui/text"
import { TelegramIcon } from "../ui/icons";

interface Props {
    isLabel?: boolean;
    isIconLeft?: boolean;
    isIconRight?: boolean;
}

export const TelegramInfo = ({ isIconLeft, isIconRight, isLabel }: Props) => {
    return (
        <div className='flex flex-col'>
            <CaptionText
                className={`
                            ${!isLabel && 'hidden'} text-gray-300
                            text-[calc(0.28rem+0.5vw)]`
                }
            >
                telegram для связи
            </CaptionText>

            <LinkHrefWithoutUnderlineButton
                className="flex items-center gap-1"
                href={navigationConfig.telegram.href}>
                {(isIconLeft) && <TelegramIcon className={`text-white md:hidden`} />}
                <p className="underline h5">{navigationConfig.telegram.label}</p>
                {(isIconRight) && <TelegramIcon className={`text-white md:hidden`} />}
            </LinkHrefWithoutUnderlineButton>

        </div>
    )
}

export const ContactsInfo = ({ className }: { className?: string }) => {
    return (
        <div className={clsx('flex flex-col gap-[5px]', className)}>
            <LinkHrefWithUnderlineButton
                className="h5"
                href={navigationConfig.email.href}>
                {navigationConfig.email.label}
            </LinkHrefWithUnderlineButton>
            <LinkHrefWithUnderlineButton
                className="h5"
                href={navigationConfig.phone.href}>
                {navigationConfig.phone.label}
            </LinkHrefWithUnderlineButton>
        </div>
    )
}