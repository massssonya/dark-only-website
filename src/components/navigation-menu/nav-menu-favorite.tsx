import { FavoriteIcon } from "../ui/icons"
import { LinkButton } from "../ui/link"
import { CaptionText } from "../ui/text"

export const NavigationMenuFavorite = () => {
    return (
        <LinkButton href="/" className="" $variant="scale">
            <span className='
                                        w-[45px] mr-[8px] aspect-square rounded-2xl
                                        flex justify-center items-center
                                        bg-white text-red-500
                                        cursor-pointer transition duration-300 group-hover:scale-[1.05]
                                       '>
                <FavoriteIcon />
            </span>
            <CaptionText>избранное</CaptionText>
        </LinkButton>
    )
}

