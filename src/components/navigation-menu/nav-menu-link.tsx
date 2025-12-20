export const NavigationMenuLink = ({ label, isActive }: {
  label: string
  isActive: boolean
}) => {
  return (
    <span className={`${isActive ? 'text-gray-500 transition duration-300 hover:text-gray-400' : ''}`}>{label}</span>
  )
}