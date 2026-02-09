import type { ReactNode } from "react";
import { Container } from "../../../components/ui/layout";


export function ContentLayout({ children }: { children: ReactNode }) {
    return (
        <Container>
            <div className="
                            w-full grid grid-cols-1 gap-y-24 gap-x-6
                            md:grid-cols-2
                            xl:grid-cols-3
                            "
            >
                {children}
            </div>
        </Container>
    )
}