/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package controller;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import dao.UserDAO;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import util.Validate;
import java.time.format.DateTimeFormatter;  
import java.time.LocalDateTime;    
import javax.servlet.http.HttpSession;
import model.UserOrder;

/**
 *
 * @author DELL
 */
public class ProcessOrder extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        request.setCharacterEncoding("UTF-8");
        
        BufferedReader reader = request.getReader();
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) {
            sb.append(line);
        }
        
        Gson gson = new Gson();
        JsonObject jsonObject = gson.fromJson(sb.toString(), JsonObject.class);
        
        String phone = jsonObject.get("phone").getAsString();
        String address = jsonObject.get("address").getAsString();
        String size = jsonObject.get("size").getAsString();
        String quantity = jsonObject.get("quantity").getAsString();
        String paymentMethod = jsonObject.get("paymentMethod").getAsString();
        String nation = jsonObject.get("nation").getAsString();
        String club = jsonObject.get("club").getAsString();
        String player = jsonObject.get("player").getAsString();
        
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");  
        LocalDateTime now = LocalDateTime.now();  
        String orderTime = dtf.format(now).toString();
        System.out.println(orderTime);
        
        String season = jsonObject.get("season").getAsString();
        String orderShirtType = jsonObject.get("orderShirtType").getAsString();
        String email = (String)request.getSession().getAttribute("email");
        
        String errorMessage = "";
        if(!Validate.checkPhone(phone)){
            errorMessage = "Invalid phone!";
        }
        else if(!Validate.checkAddress(address)){
            errorMessage = "Please give more detailed address!";
        }
        else if (size.equals("") || size == null){
            errorMessage = "Please fill all the necessary information!";
        }
        else if (email == null) {
            errorMessage= "Please login first!";
        }
        else{
            String clubOrNation = orderShirtType.startsWith("nation")? nation:club;
            UserOrder userOrder = new UserOrder(orderShirtType, season, orderTime, phone, address, size, paymentMethod, 0, clubOrNation, player, clubOrNation, email);
            UserDAO.insertUserOrder(phone, email, address, orderTime, size, quantity, paymentMethod, season, orderShirtType, clubOrNation, player);
            errorMessage = "Successfully!";
        }
        
        response.getWriter().write(errorMessage);
        
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
