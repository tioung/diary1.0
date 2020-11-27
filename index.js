//caching
const textarea=document.querySelector('textarea');
const btn=document.querySelector('button')
const diary=document.querySelector('.diary')
const entries=document.querySelector('.entries')
const buttons=document.querySelector('.buttons')
let count=1

btn.addEventListener('click',()=>{
  //create div entry and hide it
  const div=document.createElement('div')
  div.textContent=textarea.value
  div.classList.add('textEntry')
  div.classList.add('hide')
  entries.appendChild(div)

  //create entryButton
  const btn=document.createElement('button')
  btn.textContent=count
  btn.classList.add('show')
  buttons.appendChild(btn)

  //display  on clicking entryButton
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.textEntry').forEach(entry=>entry.classList.add('hide'))
    div.classList.remove('hide')
  })

  count++
  textarea.value=''
})
