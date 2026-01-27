import { FavoriteIcon } from "../ui/icons"
import { LinkButton } from "../ui/link"

export const NavigationMenuFavorite = () => {
    return (
        <LinkButton
            to="/favorites"
            className='group flex justify-center items-center gap-3 transition duration-300'>
            <span
                className='
                                      min-w-12 flex justify-center items-center p-4 rounded-2xl 
                                      bg-white text-red-500
                                      cursor-pointer transition duration-300 group-hover:scale-[1.05]
                                      '>
                <FavoriteIcon />
            </span>
            <span className='lowercase text-sm text-gray-300 leading-none group-hover:text-white transition duration-300'>избранное</span>
        </LinkButton>
    )
}

