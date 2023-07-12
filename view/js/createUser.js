let fName = document.getElementById('name')
let femail = document.getElementById('email')
let fmobile = document.getElementById('mobile')
let fage = document.getElementById('age')
let faddr = document.getElementById('address')

//Not support addevent listener
// userform.addeventlistener('submit',function(event){
//     event.preventDefault();
//     const data = {
//         name : fName.ariaValueMax,
//         email : femail.ariaValueMax,
//         mobile : fmobile.ariaValueMax,
//         age : fage.ariaValueMax,
//     }
//     console.log(`user data submitted`,data)

// })

const submitHandler = async (event) => {
    event.preventDefault() 
    const data = {
        name : fName.value,
        email : femail.value,
        mobile : fmobile.value,
        age : fage.value,
        address : faddr.value,
    }
    console.log(`user data submitted`,data)
    await fetch(`http://localhost:3000/api/user/new`,{
        method:"POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
    }).then(out => out.json())
    .then(res => {
        console.log('server response = ',res)
        alert(res.msg)
    }).catch(err => console.log(err.message))
}