export const setPageTitle = (pageTitle) => {
  const titleSections = ['Will Wise']

  if (pageTitle) {
    titleSections.push(pageTitle)
  }

  document.title = titleSections.join(' | ')
}

export const setPageDesc = (pageDesc) => {
  const existingElement = document.querySelector('meta[name="description"]')

  if (existingElement) {
    existingElement.setAttribute('content', pageDesc)
  } else {
    const newElement = document.createElement('meta')
    newElement.setAttribute('name', 'description')
    newElement.setAttribute('content', pageDesc)
    document.head.appendChild(newElement)
  }
}

export default ({ title, desc }) => {
  setPageTitle(title)
  setPageDesc(desc)
}
