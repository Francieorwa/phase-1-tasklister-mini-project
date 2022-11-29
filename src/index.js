document.addEventListener("DOMContentLoaded", () => {
  let form=document.querySelector("#create-task-form");
  let input=document.querySelector("#new-task-description")
  let list=document.querySelector("#tasks")
  form.addEventListener('submit',function(e){
    e.preventDefault()
    if(input.value){
      let tasks=input.value;
      let newLi=document.createElement("li")
      newLi.innerText=tasks;
      list.append(newLi);
      input.value = '';
    }
  });
});