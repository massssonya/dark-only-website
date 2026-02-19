import clsx from "clsx";
import parse, { domToReact, Element } from 'html-react-parser'

interface Props {
    logo: string
}

export function WithLogoClientCard({ logo }: Props) {
    return (
        <div className="relative flex group">
            <SvgFromString svgString={logo} />
            <div className='-z-1 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 
                            rounded-full bg-black/50 
                            scale-0 transition-[scale] duration-500 group-hover:scale-100
                            xl:h-[13vw] xl:w-[13vw]'
            />
        </div>
    )
}

const SvgFromString = ({ svgString, className }: { svgString: string; className?: string }) => {
    return <div className={clsx("overflow-hidden", className)}>
        {parse(svgString, {
            replace: (domNode) => {
                if (domNode instanceof Element && domNode.name === 'svg') {
                    return (
                        <svg
                            {...domNode.attribs}
                            className='object-cover w-full h-full'
                        >
                            {domToReact(domNode.children as any)}
                        </svg>
                    )
                }
            }
        })}</div>;
};