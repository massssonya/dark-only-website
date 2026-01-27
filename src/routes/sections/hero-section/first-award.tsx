import { StarIcon } from "../../../components/ui/icons";
import { AdditionalText, CaptionText } from "../../../components/ui/text/text";

export function FirstAward() {
    return (
        <div className="flex flex-col justify-start">
            <div className='
                            h-fit flex flex-col gap-3
                            xl:flex-row xl:items-stretch
                            '
            >
                <div className='flex items-end gap-2'>
                    <span className='number'>1</span>
                    <span className='h5 xl:hidden'>место</span>
                </div>
                <div className='flex flex-col gap-[.3472222222vw] pb-[.078125vw] leading-none'>
                    <span className='
                                    h5 hidden font-semibold
                                    xl:flex
                                    '
                    >
                        место
                    </span>
                    <CaptionText className="
                                            w-[152px] text-gray-300
                                            xl:w-[12.078125vw]
                                            "
                    >
                        самый награждаемый разработчик сайтов
                    </CaptionText>
                </div>
            </div>
            <div className="mt-[10px] h-fit w-full flex">
                <StarIcon className='
                                    hidden flex justify-center min-h-[22px]
                                    md:block
                                    '
                />
                <AdditionalText>по версии workspace</AdditionalText>
            </div>
        </div>
    )
}