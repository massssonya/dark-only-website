import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contacts')({
  component: Contacts,
  staticData: {
    title: 'контакты',
    showInNav: true
  },
})

function Contacts() {

  return (
    <>
      Contacts
    </>
  )
}