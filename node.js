const form=document.querySelector("#Formsetup");
form.addEventListener("submit",handleSubmit);
function handleSubmit(event){
    event.preventDefault()
    const dateOfBirth= document.querySelector("#DOB").value;
    console.log(dateOfBirth)
    const ddmmyy=dateOfBirth.split("-");
    console.log(ddmmyy)
    const year=ddmmyy[0];
    const month=ddmmyy[1];
    const day=ddmmyy[2];
    



}