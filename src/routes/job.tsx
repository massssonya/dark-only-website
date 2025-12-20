import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/job')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/job"!</div>
}
