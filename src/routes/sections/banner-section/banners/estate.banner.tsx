import { br, icon, word } from "../../../../components/banners/helpers";
import { CroockedArrowIcon, WebIcon } from "../../../../components/ui/icons";
import type { ProjectBannersProps } from "../../../../components/banners";
import type { UniqueResponsiveImage, UniqueResponsiveImagesConfig } from "../../../../components/ui/image/types";
import { SpanComponent } from "../../../../components/ui/text";
import { ResponsiveImage } from "../../../../components/ui/image";

const MOBILE_IMAGES_CONFIG: UniqueResponsiveImage[] = [
    {
        id: "2-md",
        src: "https://only.digital/images/index/banner/1-md.png",
        sources: [
            {
                srcSet: "https://only.digital/images/index/banner/1-md.webp",
                media: "max-width: 300px",
                type: "image/webp"
            }
        ],
        style: {
            height: "100%"
        }
    },
]

const DEFAULT_IMAGES_CONFIG: UniqueResponsiveImage[] = [
    {
        id: 'card',
        src: 'https://only.digital/images/index/banner/card.png',
        style: { height: "30%", top: "50%" }
    },
    {
        id: 'phone',
        src: 'https://only.digital/images/index/banner/phone.png',
        style: { top: "10%", left: "28%", height: "60%" }
    },
    {
        id: '1864',
        src: 'https://only.digital/images/index/banner/1864.png',
        style: { top: "44%", left: "41%", height: "43%" }
    },
    {
        id: 'ak',
        src: 'https://only.digital/images/index/banner/ak.png',
        style: {
            top: "11%",
            left: "52%",
            height: "46%"
        }
    }
];



const IMAGES_CONFIG: UniqueResponsiveImagesConfig = {
    mobile: MOBILE_IMAGES_CONFIG,
    default: DEFAULT_IMAGES_CONFIG
}


const estateBanner: ProjectBannersProps = {
    id: "estate",
    heading: "недвижимость",
    href: "",
    imagesConfig: IMAGES_CONFIG,
    title: [
        word("form", "Формируем"),
        icon("form-icon", <CroockedArrowIcon className="color-white" />),
        br("lb1"),
        word("brand", <><ResponsiveImage src="https://only.digital/images/index/banner/heart.png" />ценность бренда</>),
        word("JK", <><ResponsiveImage src="https://only.digital/images/index/banner/house.png" />ЖК</>),
        br("lb2"),
        icon("digital-icon", <SpanComponent $variant="badge"><WebIcon /></SpanComponent>),
        word("digital", <SpanComponent $variant="badge">в digital - среде</SpanComponent>),
    ],
    text: <>
        Создаем digital-пространство для девелоперов и проектов ЖК,
        <br />
        находя баланс идентичности бренда и сервисности.
    </>
}

export { estateBanner }