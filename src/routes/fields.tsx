import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/fields')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/fields"!</div>
}
