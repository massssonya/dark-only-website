import { createFileRoute } from '@tanstack/react-router'

export const mainTransitionProps = {
  initial: { y: -20, opacity: 0, position: 'absolute' },
  animate: { y: 0, opacity: 1, damping: 5 },
  exit: { y: 60, opacity: 0 },
  transition: {
    type: 'spring',
    stiffness: 150,
    damping: 10,
  },
} as const

export const Route = createFileRoute('/')({
  component: Index
})

function Index() {
  return (
    <div className="p-2 no-scrollbar">
      <h3 className='text-[100rem]'>Welcome Home!</h3>
    </div>
  )
}