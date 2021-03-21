document.addEventListener('DOMContentLoaded', initApp)

let data = {
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1',
  favicon: 'favicon.ico',
  ogtype: 'website',
}

function initApp() {
  const form = document.forms[0]
  loadFormsFromData(form, data)
  form.addEventListener('keyup', handleFormChange)
  renderHeader(data)
}

function handleFormChange() {
  const form = document.forms[0]
  const inputs = [...form.querySelectorAll('input')]

  inputs.map(input => {
    const { name, value } = input
    if (value) data[name] = value
  })
  console.log(data)
  renderHeader(data)
}

function loadFormsFromData(form, object) {
  for (const key in object) {
    if (form[key]) form[key].value = object[key]
  }
}

function syncFromData(key, value) {
  data[key] = value
  document.forms[0][key].value = value
}

// Render head information
function renderHeader({
  viewport,
  title,
  description,
  author,
  favicon,
  image,
  url,
  ogtype,
}) {
  let header = []

  header.push(`<meta charset="UTF-8" />`)
  if (viewport) header.push(`<meta name="viewport" content="${viewport}">`)
  if (title) header.push(`<title>${title}</title>`)

  if (description)
    header.push(`<meta name="description" content="${description}">`)
  if (author) header.push(`<meta name="author" content="${author}">`)
  if (favicon)
    header.push(
      `<link rel="shortcut icon" href="${favicon}" type="image/x-icon">`
    )
  // Open Graph / Facebook
  header.push(`\n<!-- Open Graph / Facebook -->`)
  if (title) header.push(`<meta property="og:title" content="${title}" />`)
  if (description)
    header.push(`<meta property="og:description" content="${description}" />`)
  if (url) header.push(`<meta property="og:url" content="${url}" />`)
  if (ogtype) header.push(`<meta property="og:type" content="${ogtype}" />`)
  if (image) header.push(`<meta property="og:image" content="${image}" />`)

  // Twitter
  header.push(`\n<!-- Twitter -->`)

  if (url) header.push(`<meta name="twitter:url" content="${url}" />`)
  if (title) header.push(`<meta name="twitter:title" content="${title}" />`)
  if (description)
    header.push(`<meta name="twitter:description" content="${description}" />`)
  if (image) header.push(`<meta name="twitter:image" content="${image}" />`)

  console.log(header)
  const resultContainer = document.getElementById('headerResult')
  resultContainer.textContent = header.join('\n')
}

const copyToClipboard = textToCopy => {
  try {
    let el = document.createElement('textarea')
    el.value = textToCopy
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    console.info(`Text copied: ${textToCopy}`)
  } catch (error) {
    console.error(error)
  }
}

/*

<!-- Primary Meta Tags -->
<title>Germán Aliprandi - Resume</title>
<meta name="title" content="Germán Aliprandi - Resume">
<meta name="description" content="My asomware description goes here">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://metatags.io/">
<meta property="og:title" content="Germán Aliprandi - Resume">
<meta property="og:description" content="My asomware description goes here">
<meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://metatags.io/">
<meta property="twitter:title" content="Germán Aliprandi - Resume">
<meta property="twitter:description" content="My asomware description goes here">
<meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">


*/

/*
// Add and remove helpers
const helpers = document.querySelectorAll('[data-help]')
helpers.forEach(el => {
  el.addEventListener('change', () => {
    const { target } = event
    const { help } = target.dataset
    const span = document.createElement('span')
    span.textContent = help
    span.classList.add('helper')

    target.insertAdjacentElement('afterend', span)
  })
  el.addEventListener('blur', () => {
    const { target } = event
    console.log(target.nextSibling)
    if (!target.nextSibling) return
    if (target.nextSibling.classList.contains('helper'))
      target.nextSibling.remove()
  })
})
*/
