// document.getElementById("count").innerText = 5

// let count = 5
// count = count+1
// console.log(count)

// this is pseudocode for making application for passenger counter
// initalize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el inb the HTML to reflect the new count
   let countEl = document.getElementById("count-el")
   let saveEl = document.getElementById("save-el")
    let count = 0
    console.log(saveEl)
function increment(){
    count += 1
    countEl.textContent = count
}
function save(){
    let counts = count + ' - '
    saveEl.textContent += counts
    countEl.textContent = 0
    count = 0
    console.log(count)
}
