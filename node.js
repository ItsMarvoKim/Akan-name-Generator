const form=document.querySelector("#Formsetup");
form.addEventListener("submit",handleSubmit);
function handleSubmit(event){
    event.preventDefault()
    const dateOfBirth= document.querySelector("#DOB").value;
    console.log(dateOfBirth)
}