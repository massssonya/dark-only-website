import { SliderItem } from "./slider-item";

interface Props {
    isSliderItems: boolean;
    children: React.ReactNode;
}

export function MaybeSliderItem({
    isSliderItems,
    children,
}: Props) {
    return isSliderItems ? <SliderItem className="">{children}</SliderItem> : <>{children}</>;
}