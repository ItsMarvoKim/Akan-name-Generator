const form=document.querySelector("#Formsetup");
form.addEventListener("submit",handleSubmit);
function handleSubmit(event){
    event.preventDefault()
    const dateOfBirth= document.querySelector("#DOB").value;
    console.log(dateOfBirth)
    const ddmmyy=dateOfBirth.split("-");
    console.log(ddmmyy)
    const year=parseInt(ddmmyy[0]);
    const month=parseInt(ddmmyy[1]);
    const day=parseInt(ddmmyy[2]);
    let a=Math.floor((14-month)/12)
    let y=year-a
    let m=month+12*a-2
    let output=(day+y+Math.floor(y/4)-Math.floor(y/100)+Math.floor(year/400)+Math.floor(31*m/12))%7;
    console.log(output)
    const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const malenames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    const femalenames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    const gender=document.querySelector("#gender").value;
    
    if(gender !=="" && dateOfBirth !==""){
        if(gender==="male"){
            alert(`You were born on ${days[output]} and your Akan name is ${malenames[output]}`)    
        }
        else if(gender==="female"){
            alert(`You were born on ${days[output]} and your Akan name is ${femalenames[output]}`) 
        }
        else{
            alert("Kindly specify gender")
        }
        
    }
    else{
        alert("All fields require to be filled")
    }
}