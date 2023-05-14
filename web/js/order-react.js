var answer = false
var cnt = 1
function Shirt({
    season ,
    shirtType,
    clubOrNation,
    phone,
    address,
    size,
    quantity,
    paymentMethod,
    orderTime,
    player,
    deliveryStatus,
    email
}){
    console.log(player)
    function getUrlBackground(season = '', type = '', player = ''){
        let link =  "url('./assets/img/career/" +player.toLowerCase() +'/'+ season +'/' + type +"')"

        return{
            backgroundImage: link
        }
        
    }
    
    function showModal(e){
//        e.preventDefault()
//console.log('show modal')
        document.querySelector('.order-info').classList.add('open')
        const moreInfoBtns = document.querySelectorAll('.more-info-btn')
        for (let i = 0 ;i< moreInfoBtns.length; ++i) {
            if(moreInfoBtns[i]== e.target){
                console.log(i)
//                console.log(e.target)
                let type = ''
                if(shirtType[i].includes('home')) type = 'home'
                else if (shirtType[i].includes('away')) type = 'away'
                else type = 'third'
                
                document.querySelector('.order-info .type-info').textContent = clubOrNation[i] + ' ' + season[i]+' ' + type + ' Kit'
                document.querySelector('.order-info .phone-info').textContent = phone[i]
                document.querySelector('.order-info .address-info').textContent = address[i]
                document.querySelector('.order-info .size-info').textContent = size[i]
                document.querySelector('.order-info .quantity-info').textContent = quantity[i]
                document.querySelector('.order-info .payment-method-info').textContent = paymentMethod[i]
                document.querySelector('.order-info .status-info').textContent = deliveryStatus[i]
                
                const cancelOrderBtn = document.querySelector('.cancel-order-btn')
                console.log(cancelOrderBtn)
                cancelOrderBtn.addEventListener('click', (e)=>{
                    e.stopImmediatePropagation();  
                    let cancelOrShip = cancelOrderBtn.textContent
                    cnt++
                    console.log('cnt' + cnt)
                    if(document.querySelector('.order-info .status-info').textContent == 'In transit'){
//                        document.querySelector('.order-info .alert-danger').textContent = "You can't cancel this order because it is being shipped!"     
                        if(cancelOrShip == 'Cancel Order')  alert("You can't cancel this order because it is being shipped!")
                        else {
                            alert("This order was being shipped!")
                        }
                    }
                    else {
                        

                        if(cancelOrShip  == 'Cancel Order'){
                            answer = confirm('Are you sure to cancel your order?')
                            console.log(answer)
                        }
                        
                        else{
                            answer = confirm('Are you sure to delivery this order to the carrier?')
                            console.log(answer)
                        }
                        
                        if(answer == true){
                            
                            let data = ''
                            if (cancelOrderBtn.textContent == 'Cancel Order'){
                                console.log('Cancel')
                                data = JSON.stringify({"orderTime": orderTime[i]})
                            }
                            else {
                                console.log("Shippp")
                                data = JSON.stringify({"orderTime": orderTime[i], "email": email[i]})
                            }
                            console.log('keke')
                            let xhr = new XMLHttpRequest()
                            xhr.open('POST', 'http://localhost:8080/LeoCris/ProcessCancelOrder', true)
                            xhr.setRequestHeader('Content-Type', 'application/json')
                            xhr.onreadystatechange = function() {
                                if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                                    // Xử lý phản hồi từ server.
                                    console.log('heheh')
                                }
                            };
                            console.log('kk')
                            xhr.send(data)
                            alert('Sucessfully!')
                            hideModal()

                            location.reload()
//                            renderReact()
                        }
                        
                    }    
                })
                break
            }
        }
    }
    
    return(
        <>
        {
            season.map((value, index)=>{
                let shirt = shirtType[index]
                if(shirt.includes('home')) shirt = 'Home'
                else if (shirt.includes('away')) shirt = 'Away'
                else shirt = 'Third'

                let background = getUrlBackground(value, shirtType[index], player[index])
//                console.log(background.backgroundImage)
                return (
                    <div key = {index} className="shirt">
                        <div className="shirt-image" style = {background}></div>
                        <div className="club text">{clubOrNation[index]}</div>
                        <div className="desc text">{value} {shirt}</div>
                        <div className="more-info-btn" onClick = {showModal}>More Information</div>
                    </div> 
                )
            })
        }
        </>
    )
}
const root = ReactDOM.createRoot(document.querySelector('.container'))

function renderReact(){
    let xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost:8080/LeoCris/ProcessGetUserOrder', true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // Xử lý phản hồi từ server.
            if(xhr.responseText == 'no email') alert('Login to track your order')
            let data = JSON.parse(xhr.responseText)
            console.log(data)

            root.render(<Shirt 
                season={data.season}
                shirtType={data.shirtType}
                clubOrNation ={data.clubOrNation}
                phone ={data.phone}
                address ={data.address}
                paymentMethod ={data.paymentMethod}
                size ={data.size}
                quantity ={data.quantity}
                orderTime ={data.orderTime}
                player = {data.player}
                deliveryStatus = {data.deliveryStatus}
                email ={data.email}
                />)

        }
        };
    xhr.send()
}

renderReact()