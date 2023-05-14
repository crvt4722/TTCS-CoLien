/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package controller;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import java.io.IOException;
import java.io.PrintWriter;
import java.security.NoSuchAlgorithmException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import util.PasswordEncoder;
import util.Validate;
import dao.UserDAO;
import java.io.BufferedReader;
import model.UserProfile;

/**
 *
 * @author DELL
 */
public class ProcessSignup extends HttpServlet {

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
            throws ServletException, IOException, NoSuchAlgorithmException {
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
        
        String email = jsonObject.get("email").getAsString();
        String fullname = jsonObject.get("fullname").getAsString();
        String password = jsonObject.get("password").getAsString();
        String rePassword = jsonObject.get("repassword").getAsString();
        
        System.out.println(email);
        String errorMessage = "";
        if (!Validate.checkName(fullname)){
            errorMessage = "Invalid name! Try again";
        }
        else if(!Validate.checkEmail(email)){
            errorMessage = "Invalid email! Try again";
        }
        else if (UserDAO.isDuplicateEmail(email)){
            errorMessage = "Email is duplicate! Try again";
        }
        else if (!Validate.checkPassword(password) || !Validate.checkPassword(rePassword)){
            errorMessage = "Invalid password! Try again";
        }
        else if(password.equals(rePassword)==false){
            errorMessage = "Passwords are not the same! Try again";
        }
        else{
            password = PasswordEncoder.encode(password);
            
            UserProfile userProfile = new UserProfile(fullname, email, password);
            userProfile.addUser();
            
            errorMessage = "Sign up successfully!";
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
        try {
            processRequest(request, response);
        } catch (NoSuchAlgorithmException ex) {
            Logger.getLogger(ProcessSignup.class.getName()).log(Level.SEVERE, null, ex);
        }
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
        try {
            processRequest(request, response);
        } catch (NoSuchAlgorithmException ex) {
            Logger.getLogger(ProcessSignup.class.getName()).log(Level.SEVERE, null, ex);
        }
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
