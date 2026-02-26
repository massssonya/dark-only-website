import { br, icon, word } from "../../../../components/banners/helpers";
import { MobileAppIcon } from "../../../../components/ui/icons";
import type { ProjectBannersProps } from "../../../../components/banners";
import type { UniqueResponsiveImage, UniqueResponsiveImagesConfig } from "../../../../components/ui/image/types";

const MOBILE_IMAGES_CONFIG: UniqueResponsiveImage[] = [
    {
        id: "2-md",
        src: "https://only.digital/images/index/banner/2-md.png",
        sources: [
            {
                srcSet: "https://only.digital/images/index/banner/2-md.webp",
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
        id: 'screen-1',
        src: 'https://only.digital/images/index/banner/screen-1.png',
        style: { height: "74%", left: "20%", top: "8%" }
    },
    {
        id: 'screen-2',
        src: 'https://only.digital/images/index/banner/screen-2.png',
        style: { top: "19%", left: "48%", height: "74%" }
    },
    {
        id: 'chair',
        src: 'https://only.digital/images/index/banner/chair.png',
        style: { top: "54%", height: "19%" }
    },
    {
        id: 'catalog',
        src: 'https://only.digital/images/index/banner/catalog.png',
        style: {
            top: "39%",
            left: "10%",
            height: "9%"
        }
    },
    {
        id: 'furn',
        src: 'https://only.digital/images/index/banner/furn.png',
        style: {
            top: "65%",
            left: "61%",
            height: "11%"
        }
    },
    {
        id: 'order',
        src: 'https://only.digital/images/index/banner/order.png',
        style: {
            top: "80%",
            left: "70%",
            height: "4.5%"
        }
    },
];



const IMAGES_CONFIG: UniqueResponsiveImagesConfig = {
    mobile: MOBILE_IMAGES_CONFIG,
    default: DEFAULT_IMAGES_CONFIG
}


const mobileBanner: ProjectBannersProps = {
    id: "mobile",
    heading: "mobile.app",
    href: "",
    imagesConfig: IMAGES_CONFIG,
    title: [
        word("proj", "Проектируем"),
        br("lb1"),
        icon("mob-icon", <MobileAppIcon />),
        word("mobile", "мобильные"),
        br("lb2"),
        word("app", "приложения"),
    ],
    text: <>
        Разрабатываем приложения для мобильных устройств,
        <br />
        решая реальные запросы пользователей.
    </>
}

export { mobileBanner }