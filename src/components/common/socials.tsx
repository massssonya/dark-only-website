import { navigationConfig } from "../../config/navigation.config";
import { LinkHrefButton } from "../ui/link";

export function Socials() {
    return (
        <>
            {
                navigationConfig.socials.map(item => (
                    <LinkHrefButton
                        key={item.label}
                        href={item.href}>
                        <span>{item.label}</span>
                    </LinkHrefButton>
                ))
            }</>
    )
}