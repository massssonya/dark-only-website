import { CoffeeIcon } from "../../../components/ui/icons";

export function CreativeDigitalProduction() {
    return (
        <div className='
                        h0
                        max-w-[400px] 
                        flex flex-wrap justify-start items-center gap-x-2 gap-y-0 
                        sm:max-w-[65vw]
                        '>
            <span className='word'>Creative</span>
            <span className='w-[calc(2rem+.78125vw)]'>
                <CoffeeIcon className='w-full h-full cover' />
            </span>
            <span className="word">digital&nbsp;</span>
            <span className='basis-full'></span>
            <span className="word">production&nbsp;</span>
        </div>
    )
}