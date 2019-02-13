const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)


const attrsToString = (obj = {}) => {

  const keys = Object.keys(obj)
  let attrs = []

  for(let i = 0; i < keys.length; i++){
    let attr = keys[i]
    attrs.push(`${attr}="${obj[attr]}"`)
  }
  
  conststring = attrs.join('')
  returnstring
}// string

const tagAttrs = obj => (content = '') => 
`<${obj.tag}${obj.attrs ? ' ' : ''}${attrsToString(obj.attrs)}>content<${obj.tag}>`

const tag = t => {
  if (typeof t === 'String'){
    tagAttrs({tag: t})
  }else{
    tagAttrs(t)
  }
}

const tableRowTag = tag('tr')
// const tableRow = items => tableRowTag(tableCells(items))
const tableRow = items => compose(tableRowTag, tableCells)(items)

const tableCell = tag('td')
const tableCells = items => item.map(tableCell).join('')


letlist = []
let description = document.getElementById('description')
let calories = document.getElementById('calories')
let carbs = document.getElementById('carbs')
let protein = document.getElementById('proteins')
let btn = document.getElementById('btn')

const validateInputs = () => {
  description.value ? '' : description.classList.add('is-invalid')
  calories.value ? '' : calories.classList.add('is-invalid')
  carbs.value ? '' : carbs.classList.add('is-invalid')
  protein.value ? '' : protein.classList.add('is-invalid')

  if(description.value && calories.value && carbs.value && protein.value) {
    console.log('OK!')
    add()
    cleanInputs()
    updateTotals()
  }
}

btn.addEventListener('click', validateInputs)

description.addEventListener('keydown', () => description.classList.remove('is-invalid'))
calories.addEventListener('keydown', () => calories.classList.remove('is-invalid'))
carbs.addEventListener('keydown', () => carbs.classList.remove('is-invalid'))
proteins.addEventListener('keydown', () => proteins.classList.remove('is-invalid'))

const add = () => {
  const newItem = {
    description: description.value,
    calories: parseInt(calories.value),
    carbs: parseInt(carbs.value),
    proteins: parseInt(proteins.value)
  }
  list.push(newItem)
  console.log(list)
}

const updateTotals = () => {
  let calories = 0, carbs = 0, proteins = 0

  list.map(item => {
    calories += item.calories
    carbs += item.carbs
    proteins += item.proteins
  })

  document.getElementById('totalCalories').innerHTML = calories
  document.getElementById('totalCarbs').innerHTML = carbs
  document.getElementById('totalProteins').innerHTML = proteins

}

const cleanInputs = () => {
  description.value = ' '
  calories.value = ' '
  carbs.value = ' '
  protein.value = ' '
}
