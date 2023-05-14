/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package controller;

import dao.UserDAO;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import model.UserOrder;

/**
 *
 * @author DELL
 */
public class ProcessGetUserOrder extends HttpServlet {

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
        
        HttpSession session = request.getSession();
        
        ArrayList<UserOrder> userOrders = UserDAO.getUserOrder((String)session.getAttribute("email"));
        String responseString = "{\"shirtType\": [";
        
        for(int i = 0 ;i < userOrders.size(); ++i) {
            responseString += "\""+ userOrders.get(i).getShirtType() + "\"" + ',';
        }
        
        responseString = responseString.substring(0, responseString.length() - 1) + "], \n \"clubOrNation\": [";
        for(int i = 0 ;i < userOrders.size(); ++i) {
            responseString += "\""+ userOrders.get(i).getClubOrNation()+ "\""+ ',';
        }
        
        responseString = responseString.substring(0, responseString.length() - 1) + "], \n \"season\": [";
        
        for(int i = 0 ;i < userOrders.size(); ++i) {
            responseString += "\""+ userOrders.get(i).getSeason()+ "\""+ ',';
        }
        responseString = responseString.substring(0, responseString.length() - 1) + "], \n \"orderTime\": [";
        
        for(int i = 0 ;i < userOrders.size(); ++i) {
            responseString += "\""+ userOrders.get(i).getOrderTime()+ "\""+',';
        }
        responseString = responseString.substring(0, responseString.length() - 1) + "], \n \"phone\": [";
        
        for(int i = 0 ;i < userOrders.size(); ++i) {
            responseString += "\""+ userOrders.get(i).getPhone()+ "\""+ ',';
        }
        responseString = responseString.substring(0, responseString.length() - 1) + "], \n \"address\": [";
        
        for(int i = 0 ;i < userOrders.size(); ++i) {
            responseString += "\""+ userOrders.get(i).getAddress()+ "\""+ ',';
        }
        responseString = responseString.substring(0, responseString.length() - 1) + "], \n \"size\": [";
        
        for(int i = 0 ;i < userOrders.size(); ++i) {
            responseString += "\""+ userOrders.get(i).getSize()+ "\""+ ',';
        }
        responseString = responseString.substring(0, responseString.length() - 1) + "], \n \"paymentMethod\": [";
        
        for(int i = 0 ;i < userOrders.size(); ++i) {
            responseString += "\""+ userOrders.get(i).getPaymentMethod()+ "\""+ ',';
        }
        
        responseString = responseString.substring(0, responseString.length() - 1) + "], \n \"player\": [";
        
        for(int i = 0 ;i < userOrders.size(); ++i) {
            responseString += "\""+ userOrders.get(i).getPlayer()+ "\""+ ',';
        }
        
        responseString = responseString.substring(0, responseString.length() - 1) + "], \n \"email\": [";
        for(int i = 0 ;i < userOrders.size(); ++i) {
            responseString += "\""+ userOrders.get(i).getEmail()+ "\""+ ',';
        }
        
        responseString = responseString.substring(0, responseString.length() - 1) + "], \n \"deliveryStatus\": [";
        for(int i = 0 ;i < userOrders.size(); ++i) {
            responseString += "\""+ userOrders.get(i).getDeliveryStatus()+ "\""+ ',';
        }
        
        responseString = responseString.substring(0, responseString.length() - 1) + "], \n \"quantity\": [";
       
        
        for(int i = 0 ;i < userOrders.size(); ++i) {
            responseString += Integer.toString( userOrders.get(i).getQuantity())+ ',';
        }
        responseString = responseString.substring(0, responseString.length() - 1) + "] }";
        
        if((String)session.getAttribute("email") != null) response.getWriter().write(responseString);
        else response.getWriter().write("no email");
        
//        System.out.println(responseString);
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
