import { navigationConfig } from "../../config/navigation.config"
import { LinkHrefButton } from "../ui/link"

export const NavigationMenuDocuments = () => {
    return (
        <div className="flex items-center gap-1">
            {
                navigationConfig.presentation.map(item => (
                    <LinkHrefButton
                        key={item.label}
                        href={item.href}>
                        <span>{item.label}</span>
                    </LinkHrefButton>
                ))
            }
            <span className='lowercase ml-2 w-10 text-sm text-gray-300 leading-none' > Презентация компании</span>
        </div>
    )
}