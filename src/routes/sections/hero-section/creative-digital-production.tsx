import { CoffeeIcon } from "../../../components/ui/icons";

export function CreativeDigitalProduction() {
    return (
        <div className='
                        max-w-[400px] 
                        flex flex-wrap justify-start items-center gap-x-2 gap-y-0 
                        leading-[125%] tracking-[-0.03em] font-bold text-[calc(1.3979rem+2.03562vw)]
                        sm:max-w-[65vw]
                        md:text-[calc(1.7rem+.78125vw)]
                        xl:text-[calc(-2.375rem+5vw)]
                        '>
            <span className=''>Creative</span>
            <span className='w-[calc(2rem+.78125vw)]'>
                <CoffeeIcon className='w-full h-full cover' />
            </span>
            <span>digital&nbsp;</span>
            <span className='basis-full'></span>
            <span>production&nbsp;</span>
        </div>
    )
}