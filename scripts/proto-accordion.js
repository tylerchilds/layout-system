import tag from 'https://thelanding.page/tag/tag.js'

const accordion = tag('details')

accordion.on('click', 'summary', function toggle() {
  const { open } = accordion.get()
  accordion.set({ open: ! open })
})

function openAccordion () {
  accordion.set({ open: true })
  document.querySelector(accordion.slug)
    .setAttribute('open', 'true')
}

accordion.restore().then(() => {
  const { open } = accordion.get()
  if(open) openAccordion()
})
