import { navigationConfig } from "../../config/navigation.config"
import { LinkHrefButton } from "../ui/link"

export const NavigationMenuSocials = () => {
    return (
        <div className='h-full flex flex-col gap-1 xl:flex-row items-end'>
            {
                navigationConfig.socials.map(item => (
                    <LinkHrefButton
                        key={item.label}
                        href={item.href}>
                        <span>{item.label}</span>
                    </LinkHrefButton>
                ))
            }
        </div>
    )
}