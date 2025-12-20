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

const FavoriteIcon = () =>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path fill="#0E0E0E" d="m12 0 2.463 5.234 5.25-2.427L18.236 8.4l5.583 1.516-4.727 3.334L22.392 18l-5.764-.485-.524 5.761L12 19.2l-4.104 4.076-.524-5.76L1.608 18l3.301-4.75L.182 9.916 5.765 8.4 4.287 2.807l5.25 2.427z"></path>
    </svg>