import { Link } from '@tanstack/react-router'

export const HeaderLogo = () => {
    return (
        <Link
            to="/"
            activeProps={{
                className: 'pointer-events-none',
                style: { pointerEvents: "none" }
            }}
            activeOptions={{ exact: false }}>
            <span className='select-none font-black text-[1.5rem]'>
                Only
            </span>
        </Link>
    )
}