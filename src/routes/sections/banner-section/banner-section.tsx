import { ProjectBanner } from "../../../components/banners";
import SectionLayout from "../../../components/layout/section-layout";
import { Container } from "../../../components/ui/layout";
import { PointSlider } from "../../../components/slider";
import { banners } from "./banners";

export function BannerSection() {
    return (
        <section className='mt-[8vw] flex flex-col inset-0'>
            <SectionLayout content={
                <Container>
                    <PointSlider>
                        {banners.map(banner => (
                            <ProjectBanner key={banner.id} {...banner} />
                        ))}
                    </PointSlider>
                </Container>
            } />
        </section>
    )
}

