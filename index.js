// saving dom elements in variables
const countElement = document.getElementById('count');
const record = document.getElementById('record');
const addButton = document.getElementById('add-passenger');
const saveButton = document.getElementById('save-count');

//initiating our counter
let count = 0;

//adding event
addButton.addEventListener('click', function(){
    console.log("add")
    count +=1;
    countElement.innerText = count;
});

saveButton.addEventListener('click', function(){
    console.log("save")
    let recordText = " " + count + " - "
    record.innerText += recordText
    count = 0;
    countElement.innerText = count;

});
