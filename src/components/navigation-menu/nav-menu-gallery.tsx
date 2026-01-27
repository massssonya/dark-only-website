import { Button } from "../ui/button"
import { GalleryIcon } from "../ui/icons"

export const NavigationMenuGallery = () => {
    return (
        <Button variant='link' className='group h-[10vw] flex flex-col justify-center items-center gap-8'>
            <span className='text-xl'>Project Gallery</span>
            <GalleryIcon className="group" />
        </Button>
    )
}

