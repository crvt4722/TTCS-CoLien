//const signupForm = document.querySelector('.signup .modal-content')
var signupForm = document.querySelector('.signup .modal-content')

signupForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    let data = JSON.stringify({
        "fullname": document.querySelector('#fullname__signup').value,
        "email": document.querySelector('#email__signup').value,
        "password": document.querySelector('#password__signup').value,
        "repassword": document.querySelector('#repassword__signup').value
    })

    console.log(data)

    let xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost:8080/LeoCris/ProcessSignup', true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          // Xử lý phản hồi từ backend.
            document.querySelector('.alert-danger__signup').textContent = xhr.responseText

            setTimeout(()=>{
                document.querySelector('.alert-danger__signup').textContent = ''
            }, 3000)
        }
      };
    xhr.send(data)
})


//Login
var loginForm = document.querySelector('.login .modal-content')

loginForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    let data = JSON.stringify({
        "email": document.querySelector('#email__login').value,
        "password": document.querySelector('#password__login').value
    })

    console.log(data)

    let xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost:8080/LeoCris/ProcessLogin', true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          // Xử lý phản hồi từ backend.
            document.querySelector('.alert-danger__login').textContent = xhr.responseText
            
            setTimeout(()=>{
                document.querySelector('.alert-danger__login').textContent = ''
                
                if(xhr.responseText.includes('logined successfully!')){
                    const modalLogin = document.querySelector('.modal.login')
                    modalLogin.classList.remove('open')
                    location.reload()
                }
            }, 1000)
            
            
        }
      };
    xhr.send(data)
})


//Order
const modalForm = document.querySelector('.modal .modal-content')
const modalPhone = document.querySelector('#modal__phone')
const modalAddress = document.querySelector('#modal__address')
const modalSizes = document.querySelectorAll('.modal__radio-btn')
const modalQuantity = document.querySelector('#modal__quantity')
const modalPaymentMethod = document.querySelector('#modal__payment-method')

modalForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    let phone = modalPhone.value
    let address = modalAddress.value
    let quantity = modalQuantity.value
    let paymentMethod = modalPaymentMethod.value
    let size = ''
    let club = localStorage.getItem("club")
    let season = localStorage.getItem("season")
    let nation = localStorage.getItem("nation")
    let orderShirtType = localStorage.getItem("orderShirtType")
    let player = localStorage.getItem("playerOption")

    for (let modalSize of modalSizes){
        if(modalSize.checked == true){
            size = modalSize.value
            break
        }
    }

    console.log(phone, address, size, quantity, paymentMethod)

    let data = JSON.stringify({
        "phone": phone,
        "address": address,
        "size": size,
        "quantity": quantity,
        "paymentMethod":paymentMethod,
        "club": club,
        "season": season,
        "nation": nation,
        "orderShirtType": orderShirtType,
        "player": player
    })

    let xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost:8080/LeoCris/ProcessOrder', true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            console.log(1111)
            document.querySelector('.alert-danger').textContent = xhr.responseText
            
            setTimeout(()=>{
                document.querySelector('.alert-danger').textContent = ''
                if(xhr.responseText == 'Successfully!'){
                    document.querySelector('.modal').classList.remove('open')
//                    document.querySelector('#modal__phone').value = ''
//                    document.querySelector('#modal__address').value = ''
                    document.querySelector('#modal__quantity').value = 1
                }
            }, 1000)
        }
    };
    xhr.send(data)
})
