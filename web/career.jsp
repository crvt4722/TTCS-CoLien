<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="util.Validate"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Toi Cr</title>

        <link rel="stylesheet" href="./assets/css/footer.css">
        <link rel="stylesheet" href="./assets/css/career.css">
        <link rel="stylesheet" href="./assets/css/modal.css">
        
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
        <link rel="stylesheet" type="text/css" href="./assets/css/base.css">
        <link rel="stylesheet" type="text/css"  type="text/css"href="./assets/css/main.css">
        <link rel="stylesheet" type="text/css" href="./assets/fonts/fontawesome-free-6.3.0-web/css/all.min.css">
        <link rel="icon" href="./assets/img/logo.jpg" type="image/x-icon" />
        <script src="https://kit.fontawesome.com/d4acca2111.js" crossorigin="anonymous"></script>
        <!-- ReactJs -->

        <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    </head>
    <script src="./includes/include.js"></script>
<body>
    <!-- <div class="header" w3-include-html="./includes/header.html"></div> -->

    <div id="header">
            <div class="header-wrapper">
        <div class="slogan">We ride together we die together</div>
        <div class="user-email"><%= Validate.StringUtil((String) session.getAttribute("lastName"))%></div>
        <div class="header-wrapper__icon">
            <span class="profile-name" style = "background-color: black; font-weight: 500; border-radius: 10px; padding: 5px 5px;">
                <%= Validate.StringUtil((String) session.getAttribute("lastName"))%> <i class="fa-solid fa-power-off"></i>
            </span>
            
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-youtube"></i></a>
        </div>
    </div>
    <div class="main-menu">
        <div class="main-menu__items">
            <div class="main-menu__items__img">
                <img  src="./assets/img/web_name.jpg">
            </div>
            <div class="main-menu__item"><a href="index.jsp">Home</a></div>
            <div class="main-menu__item item--career">
                <a href="career.jsp">Stats and jerseys</a>
            </div>
            <div class="main-menu__item item--auction"><a href="vote.jsp">Who's the best</a></div>
            <div class="main-menu__item item--comunity"><a href="comunity.jsp">Comunity</a></div>
        </div>

        <div class="search-login">
            <!--<input type="text" placeholder="Track your order by username...">-->
            <a href="order.jsp"><i class="fa-solid fa-user"></i></a>
            <div class="login-btn">Login</div>
        </div>

    </div>    
  
    </div>

    <div class="sidebar"></div>

    <div class="career-content">
        <div class="career-head"></div>

        <div class="career__moment"></div>

        <div class="career__video"></div>

        <div class="career__shirts club__shirts"></div>

        <div class="career__shirts nation__shirts"></div>
    </div> 

    <div class="modal">
    <div class="modal-container">
        <div class="modal-header">
            <i class="modal-close fa-solid fa-xmark"></i>
            <div class="modal__web-name">
                
                <h3>    <span class="modal-header__span1">Lionel</span><span class="modal-header__span2">Ronaldo</span></h3>
                <p>Be served you is our honor!</p>
            </div>
            
        </div>

        <div class="alert-danger"></div>

        <form class="modal-content" method="post">

            <div class="label-container">

                <label for="modal__phone" class="modal-label">
                    <i class="fa-sharp fa-solid fa-phone"></i> Phone: 
                </label>

                <label for="modal__address" class="modal-label">
                    <i class="fa-sharp fa-solid fa-location-dot"></i> Address:
                </label>

                <label for="" class="modal-label">
                    <i class="fa-sharp fa-solid fa-shirt"></i> Size:
                </label>
                
                <label for="modal__quantity" class="modal-label" style="transform:translateY(-3px)">
                    <i class="fa-sharp fa-solid fa-cart-plus"></i> Quantity:
                </label> 

                <label for="modal__payment-method" class="modal-label" >
                    <i class="fa-solid fa-money-check-dollar"></i> Payment method: 
                </label>
            </div>

            <div class="input-container">
                <input id='modal__phone' type='tel' required>
                <input id='modal__address' type='text' required>
                
                <div class="input-container__radio">
                    <input type="radio" class="modal__radio-btn" id ='s' value="S" name = 'shirt-size'> <label for="s">S</label>
                    <input type="radio" class="modal__radio-btn" id ='m' value="M" name = 'shirt-size'> <label for="m">M</label>
                    <input type="radio" class="modal__radio-btn" id ='l' value="L" name = 'shirt-size'> <label for="l">L</label>
                    <input type="radio" class="modal__radio-btn" id ='xl' value="XL" name = 'shirt-size'> <label for="xl">XL</label>
                    <input type="radio" class="modal__radio-btn" id ='2xl' value="2XL" name = 'shirt-size'> <label for="2xl">2XL</label>
                    <input type="radio" class="modal__radio-btn" id ='3xl' value="3XL" name = 'shirt-size'> <label for="3xl">3XL</label>
                </div>
                
                <input type="number" name="" id="modal__quantity" min = "1" max = '100' value="1" class="input-container__quantity">
                
                <select name="modal__payment-method" id="modal__payment-method">
                    <option value="LionelRonaldoPay">LionelRonaldoPay</option>
                    <option value="Payment on delivery">Payment on delivery</option>
                    <option value="Mobile Banking">Mobile Banking</option>
                </select>
            </div>    
            <button type="submit" class="modal-submit-btn">submit <i class="fa-sharp fa-solid fa-circle-check"></i></button>
        </form>
    </div>
</div>

    <div class="modal login">
        <div class="modal-container__login">
            <div class="modal-header">
                <i class="modal-close__login fa-solid fa-xmark"></i>
                <div class="modal__web-name">

                    <h3>    <span class="modal-header__span1">Lionel</span><span class="modal-header__span2">Ronaldo</span></h3>
                    <p>Be served you is our honor!</p>
                </div>

            </div>

            <div class="modal-section">
                <label for="" class="login-label">Sign in</label>
                <label for="" class="signup-label">Sign up</label>
            </div>

            <div class="alert-danger__login"></div>

            <form class="modal-content">

                <div class="label-container">
                    <label for="email__login" class="modal-label">
                        <i class="fa-solid fa-envelope"></i> Email: 
                    </label>

                    <label for="password__login" class="modal-label">
                        <i class="fa-solid fa-lock"></i></i> Password: 
                    </label>


                </div>

                <div class="input-container">
                    <input id='email__login' name= 'email__login' type="email" required placeholder="">
                    <input id='password__login' name = 'password__login' type="password" required>

                </div>    
                <button type="submit" class="modal-submit-btn">Sign in</button>

            </form>

            <div class="modal-or">
                <div></div>
                <span>or</span>
                <div></div>
            </div>

            <div class="modal-social">
                <div class="modal-social__google">
                    <i class="fa-brands fa-google"></i>
                    Google
                </div>

                <div class="modal-social__facebook">
                    <i class="fa-brands fa-facebook"></i>
                    Facebook
                </div>
            </div>
        </div>
    </div>

    <div class="modal signup">
        <div class="modal-container__signup">
            <div class="modal-header">
                <i class="modal-close__signup fa-solid fa-xmark"></i>
                <div class="modal__web-name">

                    <h3>    <span class="modal-header__span1">Lionel</span><span class="modal-header__span2">Ronaldo</span></h3>
                    <p>Be served you is our honor!</p>
                </div>

            </div>

            <div class="modal-section">
                <label for="" class="login-label">Sign in</label>
                <label for="" class="signup-label">Sign up</label>
            </div>

            <div class="alert-danger__signup"></div>

            <form class="modal-content" method = "post">

                <div class="label-container">

                    <label for="fullname__singup" class="modal-label" >
                        <i class="fa-solid fa-user"></i> Fullname: 
                    </label>
                    <label for="email__signup" class="modal-label">
                        <i class="fa-solid fa-envelope"></i> Email: 
                    </label>

                    <label for="password__signup" class="modal-label">
                        <i class="fa-solid fa-lock"></i> Password: 
                    </label>

                    <label for="repassword__signup" class="modal-label">
                        <i class="fa-solid fa-key"></i> Re-password: 
                    </label>

                </div>

                <div class="input-container">
                    <input id='fullname__signup' name = 'fullname__signup' type="text" required placeholder="">
                    <input id='email__signup' name = 'email__signup' type='email' required>
                    <input id='password__signup' name = 'password__signup' type='password' required>
                    <input id='repassword__signup' name = 'repassword__signup' type='password' required>

                </div>    
                <button type="submit" class="modal-submit-btn">Sign up</button>

            </form>

            <div class="modal-or">
                <div></div>
                <span>or</span>
                <div></div>
            </div>

            <div class="modal-social">
                <div class="modal-social__google">
                    <i class="fa-brands fa-google"></i>
                    Google
                </div>

                <div class="modal-social__facebook">
                    <i class="fa-brands fa-facebook"></i>
                    Facebook
                </div>
            </div>
        </div>
    </div>
</body>
    

   <script type="text/babel" src="./js/career-content-react.js"></script>

    <script src="./js/career.js"></script>
    <script src="./js/handle-modal.js"> </script>
    <script>
        function addModalJs(){
            const modal = document.querySelector('.modal')
            const modalLogin = document.querySelector('.modal.login')
            const modalSignup = document.querySelector('.modal.signup')

            const modalContainer = document.querySelector('.modal-container')
            const modalContainerLogin = document.querySelector('.modal-container__login')
            const modalContainerSignup = document.querySelector('.modal-container__signup')

            const modalClose = document.querySelector('.modal-close')
            const modalCloseLogin = document.querySelector('.modal-close__login')
            const modalCloseSignup = document.querySelector('.modal-close__signup')
            
            const loginBtn = document.querySelector('.login-btn')

            function showModal(modal){
                modal.classList.add('open')
            }

            function hideModal(modal){
                modal.classList.remove('open')
                if(modalSignup.classList.contains('open') == false){
                    document.querySelector('#fullname__signup').value = ''
                    document.querySelector('#email__signup').value = ''
                    document.querySelector('#password__signup').value = ''
                    document.querySelector('#repassword__signup').value = ''
                }
                
                if(modalLogin.classList.contains('open') == false){
                    document.querySelector('#email__login').value = ''
                    document.querySelector('#password__login').value = ''
                }
                
            }

            loginBtn.addEventListener('click', showModal.bind(this, modalLogin))
            modalCloseLogin.addEventListener('click', hideModal.bind(this, modalLogin))

            modalCloseSignup.addEventListener('click', hideModal.bind(this, modalSignup))

            modalClose.addEventListener('click', hideModal.bind(this, modal))


            modalSignup.addEventListener('click', hideModal.bind(this,modalSignup))
            modalLogin.addEventListener('click', hideModal.bind(this,modalLogin))
            modal.addEventListener('click', hideModal.bind(this,modal))


            modalContainer.addEventListener('click', (e) => e.stopPropagation())
            modalContainerLogin.addEventListener('click', (e) => e.stopPropagation())
            modalContainerSignup.addEventListener('click', (e) => e.stopPropagation())

            const loginLabels = document.querySelectorAll('.login-label')
            const signupLabels = document.querySelectorAll('.signup-label')

            function transfromToLogin(modalLogin, modalSignup){
                modalSignup.classList.remove('open')
                modalLogin.classList.add('open')
                
                if(modalSignup.classList.contains('open') == false){
                    document.querySelector('#fullname__signup').value = ''
                    document.querySelector('#email__signup').value = ''
                    document.querySelector('#password__signup').value = ''
                    document.querySelector('#repassword__signup').value = ''
                }
                
                
            }

            function transfromToSignup(modalLogin, modalSignup){
                modalSignup.classList.add('open')
                modalLogin.classList.remove('open')
                
                if(modalLogin.classList.contains('open') == false){
                    document.querySelector('#email__login').value = ''
                    document.querySelector('#password__login').value = ''
                }
            }

            for (let loginLabel of loginLabels){
                loginLabel.addEventListener('click', transfromToLogin.bind(this, modalLogin, modalSignup))
            }

            for(let signupLabel of signupLabels){
                signupLabel.addEventListener('click', transfromToSignup.bind(this, modalLogin, modalSignup))
            }
        }
        includeHTML();
        setTimeout(addModalJs, 1000);
        
        setTimeout(()=>{
            const logoutBtn = document.querySelector('.fa-power-off')

            logoutBtn.addEventListener('click', (e)=>{
                e.preventDefault()
                console.log('logout')
                let xhr = new XMLHttpRequest()
                xhr.open('POST', 'http://localhost:8080/LeoCris/ProcessLogout', true)
                xhr.setRequestHeader('Content-Type', 'application/json')
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                      console.log(1111)
                    }
                  };
                xhr.send()
                
                setTimeout(()=>{
                    location.reload()
                },100)
            })
        }, 1000)
    </script>
    
<body>
</html>



