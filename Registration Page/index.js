const errorhandler = () => {
    const dataone = document.querySelector('#error')
    const datatwo = document.querySelector('#username').value.trim()
    const datathree = document.querySelector('#userfullname').value.trim()
    const datafour = document.querySelector('#useremail').value.trim()
    const datafive = document.querySelector('#userphonenumber').value.trim()
    const datasix = document.querySelector('#userpassword').value.trim()
    const dataseven = document.querySelector('#userconfirmpassword').value.trim()

    let addinterval = []

    if(datatwo == "" || datathree == "" || datafour == "" || datafive == "" || datasix == "" || dataseven == ""){
        dataone.innerHTML = 'Please Fill All Fields'
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
    else if(datatwo.length < 4){
         dataone.innerHTML = 'Username must be 4 char'
         return false;
    }
    else if(datathree.length < 3){
         dataone.innerHTML = 'Fullname must be 3 char'
         return false;
    }
    else if(datafive.length < 10 || datafive.length > 10){
         dataone.innerHTML = 'Invalid Phone Number'
         return false;
    }
    else if(datasix != dataseven){
         dataone.innerHTML = 'Password Cannot Match'
         return false;
    }
    else{
        true;
    }
}