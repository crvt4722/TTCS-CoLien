<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="util.Validate"%>

    <div class="header-wrapper">
        
        <div class="slogan">We ride together we die together</div>
        <div class="user-email"><%= Validate.StringUtil((String) session.getAttribute("email"))%></div>
        
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
                <a href="career.jsp">stats and jerseys</a>
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


