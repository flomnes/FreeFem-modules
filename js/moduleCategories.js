categories = []

addToCategories = (item) => {
  const index = categories.indexOf(item)
  if (index > -1)
    return

  addCategory(item)
  categories.push(item)
}

addCategory = (item) => {
  const label = document.createElement('label')
  label.className = 'light light-' + categories.length
  label.setAttribute('for', item)
  label.innerHTML = item
  const input = document.createElement('input')
  input.type = 'checkbox'
  input.className = 'osx-checkbox'
  input.checked = true
  input.id = item
  input.onchange = function() { onCategoryChange(item, input.checked) }
  label.appendChild(input)

  categoriesDiv.appendChild(label)
}

onCategoryChange = (category, checked) => {
  if (checked) {
    categories.push(category)
  } else {
    const index = categories.indexOf(category)
    if (index > -1)
      categories.splice(index, 1)
  }

  toogleCategories()
}

toogleCategories = () => {
  for (let i = 0; i < menu.children.length; i++) {
    const module = menu.children[i]
    if (module.children[0].innerHTML.includes("Home")) {
      module.style.display = 'flex'
      continue
    }

    let category = module.children[1].innerHTML
    category = category.toLowerCase()

    let show = false
    for (let j = 0; j < categories.length; j++) {
      if (category.includes(categories[j].toLowerCase()))
        show = true
    }

    if (show)
      module.style.display = 'flex'
    else
      module.style.display = 'none'
  }
}
