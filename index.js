function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input = document.querySelector('input');

function retrieveEmployeeInformation() {
  return input.value;
}

function addNewElementAsLi() {
  let employeeName = retrieveEmployeeInformation();
  document.querySelector( 'employee-list').append()
}

function addNewLiOnClick() {
  
}

function clearEmployeeListOnLinkClick() {
  
}