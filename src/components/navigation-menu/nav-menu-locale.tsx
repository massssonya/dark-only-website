import { LocaleIcon } from "../ui/icons"
import { LinkButton } from "../ui/link"

export const NavigationMenuLocale = () => {
    return (
        <LinkButton
            to="/favorites"
            className='group flex justify-center items-center gap-3 transition duration-300'>
            <span
                className='
                           flex justify-center items-center rounded-2xl p-1
                           bg-black text-black group-hover:bg-white
                           cursor-pointer transition duration-300 cover
                          '>
                <LocaleIcon
                    className='w-12 h-12 transition-colors duration-300 group-hover:text-black'
                    classNames={{
                        pathPrimary: "text-black group-hover:text-white transition-colors duration-300",
                        pathSecondary: 'text-white group-hover:text-black transition-colors duration-300'
                    }} />
            </span>
            <span className='lowercase text-sm text-gray-300 leading-none group-hover:text-white transition duration-300'>english version</span>
        </LinkButton>
    )
}

