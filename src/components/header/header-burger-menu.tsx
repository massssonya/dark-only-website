const burgerTopStyles = new Map<boolean, string>()
    .set(true, "rotate-45 top-1/2 left-0")
    .set(false, "-translate-y-[4px] group-hover:scale-y-[0.6] group-hover:-translate-y-[6px]")


const burgerDownStyles = new Map<boolean, string>()
    .set(true, "-rotate-45 top-1/2 left-1/2 -translate-x-1/2")
    .set(false, "translate-y-[3px] group-hover:scale-y-[0.6] group-hover:translate-y-[6px]")

const burgerLineBase = 'absolute h-[2.5px] w-full bg-white transition-transform duration-200 ease-in-out left-0 top-1/2'

export const BurgerMenu = ({ isOpen, onClick }: { isOpen: boolean, onClick: () => void }) => {
    return (
        <button
            className={`group cursor-pointer w-[35px] h-[40px] transition duration-500 origin-right ${isOpen ? 'scale-[.7]' : ''}`}
            onClick={onClick}>
            <div className="relative w-full h-full">
                <span
                    className={`
                    ${burgerLineBase}
                    ${burgerTopStyles.get(isOpen)}
                `}
                />
                <span
                    className={`
                    ${burgerLineBase}
                    ${burgerDownStyles.get(isOpen)}
                `}
                />
            </div>
        </button>
    )
}