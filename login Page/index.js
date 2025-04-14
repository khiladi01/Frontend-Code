const errorhandler = () => {
    const dataone = document.querySelector('#error')
    const datatwo = document.querySelector("#username").value.trim()
    const datathree = document.querySelector("#userpassword").value.trim()
    // const datafour = document.querySelector('#logbt')  // We Can't use this because we assign their declaration direct into form tag
    let addinterval = []

       if(datatwo == "" || datathree == ""){
           dataone.innerHTML = 'Please fill all fields'
           addinterval.push(
               setInterval(() => {
               dataone.style.color = 'red'
               },1000)
           )
           addinterval.push(
               setInterval(() => {
               dataone.style.color = 'yellowgreen'
               },2000)
           )
           return false;
       } 
       else if(datatwo.length<3){
           dataone.innerHTML = 'Username does not match'
           addinterval.push(
               setInterval(() => {
               dataone.style.color = 'red'
               },1000)
           )
           addinterval.push(
               setInterval(() => {
               dataone.style.color = 'yellowgreen'
               },2000)
           )
           return false;
       }
       else if(datathree.length<5){
           dataone.innerHTML = 'Userpassword does not match'
           addinterval.push(
               setInterval(() => {
               dataone.style.color = 'red'
               },1000)
           )
           addinterval.push(
               setInterval(() => {
               dataone.style.color = 'yellowgreen'
               },2000)
           )
           return false;
       }
       else if(datatwo.length<3 || datathree.length<5){
           dataone.innerHTML = 'Username and Password does not match'
           addinterval.push(
               setInterval(() => {
               dataone.style.color = 'red'
               },1000)
           )
           addinterval.push(
               setInterval(() => {
               dataone.style.color = 'yellowgreen'
               },2000)
           )
           return false;
       }
       else{
           dataone.innerHTML = 'Login success'
       }
    }