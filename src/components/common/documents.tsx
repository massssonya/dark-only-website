import { navigationConfig } from "../../config/navigation.config"
import { LinkHrefButton } from "../ui/link"
import { TextComponent } from "../ui/text"

export const PresentationDocuments = () => {
    return (
        <div className="flex items-center gap-1">
            {
                navigationConfig.presentation.map(item => (
                    <LinkHrefButton
                        key={item.label}
                        href={item.href}>
                        <TextComponent as="span" className="px-3 py-1">{item.label}</TextComponent>
                    </LinkHrefButton>
                ))
            }
            <TextComponent as="span" className='lowercase ml-2 w-10 text-sm text-gray-300 leading-none' > Презентация компании</TextComponent>
        </div>
    )
}