import { Button } from "../ui/button"
import { GalleryIcon } from "../ui/icons"

export const NavigationMenuGallery = () => {
    return (
        <Button $variant="gallery" className='group flex flex-col justify-center items-center gap-8'>
            <span className='h4'>Project Gallery</span>
            <GalleryIcon className="group w-full" />
        </Button>
    )
}

