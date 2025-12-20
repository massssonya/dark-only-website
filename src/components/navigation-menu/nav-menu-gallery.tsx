import { Button } from "../ui/button"

export const NavigationMenuGallery = () => {
    return (
        <Button variant='link' className='group h-[10vw] flex flex-col justify-center items-center gap-8'>
            <span className='text-xl'>Project Gallery</span>
            <GalleryIcon />
        </Button>
    )
}

const GalleryIcon = () =>
    <svg xmlns="http://www.w3.org/2000/svg" width="235" height="71" fill="none" viewBox="0 0 235 71" className="group">
        <rect width="55" height="33" fill="#0E0E0E" rx="4" className='group-hover:opacity-25 transition-opacity duration-300'></rect>
        <rect width="55" height="33" x="60" fill="#0E0E0E" opacity="0.5" rx="4" className='group-hover:opacity-75 transition-opacity duration-300'></rect>
        <rect width="55" height="33" x="120" fill="#0E0E0E" opacity="0.7" rx="4" className='group-hover:opacity-100 transition-opacity duration-300'></rect>
        <rect width="55" height="33" x="180" fill="#0E0E0E" opacity="0.5" rx="4" className='group-hover:opacity-75 transition-opacity duration-300'></rect>
        <rect width="55" height="33" y="38" fill="#0E0E0E" opacity="0.7" rx="4" className='group-hover:opacity-100 transition-opacity duration-300'></rect>
        <rect width="55" height="33" x="60" y="38" fill="#0E0E0E" rx="4" className='group-hover:opacity-75 transition-opacity duration-300'></rect>
        <rect width="55" height="33" x="120" y="38" fill="#0E0E0E" opacity="0.5" rx="4" className='group-hover:opacity-50 transition-opacity duration-300'></rect>
        <rect width="55" height="33" x="180" y="38" fill="#0E0E0E" rx="4" className='group-hover:opacity-25 transition-opacity duration-300'></rect>
    </svg>