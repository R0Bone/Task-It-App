const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('td.not')
const todoComplete = document.querySelectorAll('td.completed')
const username = document.querySelector('h3').textContent.slice(6, -1)

Array.from(deleteBtn).forEach((el) => {
  el.addEventListener('click', deleteTodo)
})

Array.from(todoItem).forEach((el) => {
  el.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((el) => {
  el.addEventListener('click', markIncomplete)
})

async function deleteTodo() {
  const todoId = this.parentNode.parentNode.dataset.id
  try {
    const response = await fetch('/todos/deleteTodo', {
      method: 'delete',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        'todoIdFromJSFile': todoId
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  } catch (err) {
    console.log(err)
  }
}

async function markComplete() {
  console.log(this.parentNode.dataset)
  //logs user ID
  console.log(this.parentNode.dataset.id)
  //logs user name
  console.log(this.parentNode.dataset.name)
  const todoId = this.parentNode.dataset.id
  const creatorName = this.parentNode.dataset.name
  console.log(creatorName, username, creatorName === username)
  if (creatorName == username) {
    console.log("YAY!")
  }
  try {
    const response = await fetch('todos/markComplete', {
      method: 'put',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        'todoIdFromJSFile': todoId,
        'creatorName': creatorName,
        'username': username,
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  } catch (err) {
    console.log(err)
  }
}

async function markIncomplete() {
  const todoId = this.parentNode.dataset.id
  try {
    const response = await fetch('todos/markIncomplete', {
      method: 'put',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        'todoIdFromJSFile': todoId,
        'username': username,
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  } catch (err) {
    console.log(err)
  }
}