<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Toi Cr</title>

    <link rel="stylesheet" href="./assets/css/footer.css">
    <link rel="stylesheet" href="./assets/css/vote.css">
    <link rel="stylesheet" href="./assets/css/comunity.css">

    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
    <link rel="stylesheet" type="text/css" href="./assets/css/base.css">
    <link rel="stylesheet" type="text/css"  type="text/css"href="./assets/css/main.css">
    <link rel="stylesheet" type="text/css" href="./assets/fonts/fontawesome-free-6.3.0-web/css/all.min.css">

    <link rel="icon" href="./assets/img/logo.jpg" type="image/x-icon" />

    <!-- ReactJs -->
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script src="./includes/include.js"></script>
</head>
<body>
    <div class="header" w3-include-html="./includes/header.html"></div>

    <div class="container">
        <div class="slogan">
            <span>Who's the best?</span>
        </div>

        <div class="items">
            <div class="control prev" onclick = handleControllPrev()><i class="fa-sharp fa-solid fa-chevron-left"></i></i></div>
            <div class="item first">
                <img src="./assets/img/vote/ronaldo.jpg" alt="">
                <input type="radio" name="player" id="first-section" value="Ronaldo">
                <label for="first-section">Ronaldo</label>
            </div>
    
            <div class="item second">
                <img src="./assets/img/vote/messi.jpg" alt="">
                <input type="radio" name="player" id ="second-section" style="font-size: 20px;" value = 'Messi'>
                <label for="second-section">Messi</label>
            </div>
    
            <div class="item third">
                <img src="./assets/img/vote/maguire.jpg" alt="">
                <input type="radio" name="player" id = "third-section" value = 'Maguire'>
                <label for="third-section">Maguire</label>
            </div>
            <div class="control next" onclick = hanldeControlNext()><i class="fa-sharp fa-solid fa-chevron-right"></i></div>
        </div>

        <div class="btn">
            <button onclick = submitSection() style="cursor: pointer">Submit</button>
            <button style="cursor: pointer"><a href="testchart.jsp" style="text-decoration: none; color: black">Statistics</a></button>
        </div>
    </div>

    <footer class="footer-distributed" w3-include-html="./includes/footer.html"> </footer>
    <script src="js/vote.js">
    </script>
    <script>
        let userInput = prompt('Type your username: ')
        if (userInput){
            function submitSection(){
                let players = document.getElementsByName('player')
                for (let player of players){
                    if(player.checked){
                        let data = JSON.stringify({"userName": userInput, "idol": player.value})

                        let xhr = new XMLHttpRequest()
                        xhr.open('POST', 'ProcessReceiveVote', true)
                        xhr.setRequestHeader('Content-Type', 'application/json')
                        xhr.onreadystatechange = function() {
                            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                              // X? lý ph?n h?i t? Servlet ho?c x? lý d? li?u trên trang ? ?ây
                                console.log('1111')
                                
                                let resultObject = JSON.parse(xhr.responseText)
                                console.log(resultObject)
                                
                                for (let player in resultObject){
                                    localStorage.setItem(player, resultObject[player])
                                }
                            }
                          };

                        xhr.send(data)
                        break
                    }
                }
                
                alert("Sucessfully!")
            }
        }
    </script>
    <script>
        includeHTML();
    </script>
</body>
</html>