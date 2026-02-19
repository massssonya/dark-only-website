import { Container, Grid } from "../../../components/ui/layout";
import { useProjects } from "../../../entities/projects/hooks/use-projects";
import { clientsConfig, type ClientKey } from "../../../config/clients.config";
import { WithLogoClientCard } from "../../../components/cards";

export function Content() {
    const { clients } = useProjects()

    return (
        <Container className="flex flex-col justify-center gap-[60px]">
            <h3 className="hidden md:block h2 text-center">
                <span className="hidden md:flex flex-col">
                    <span className="">20 клиентов — крупнейшие компании</span>
                    <span className="">из списка Forbes. Более 100</span>
                    <span className="">реализованных проектов</span>
                </span>
            </h3>
            <Grid
                base={{ columns: "repeat(3, 1fr)" }}
                xl={{ columns: "repeat(5, 1fr)" }}
                className="w-3/4 self-center"
            >
                {
                    clients?.map(client => {
                        const clientKey = client.id as ClientKey;
                        const logo = clientsConfig[clientKey]?.logo ?? clientsConfig.default.logo;

                        if (!(client.id in clientsConfig)) return;
                        return (
                            <a key={client.id} href="">
                                <WithLogoClientCard logo={logo} />
                            </a>
                        )
                    })
                }
            </Grid>
        </Container>
    )
}

