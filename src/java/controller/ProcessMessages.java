/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;
import java.util.*;
import com.google.gson.*;
import dao.UserDAO;
import model.Message;

@ServerEndpoint("/chat")
public class ProcessMessages extends HttpServlet {
    private static Set<Session> userSessions = new HashSet<>();
    
    @OnOpen 
    public void onOpen(Session session){
        userSessions.add(session);
        System.out.println("User Connected: " + session.getId());
    }
    
    @OnClose
    public void onClose(Session session){
        userSessions.remove(session);
        System.out.println("User disconnected!");
    }
    
    @OnMessage
    public void onMessage(String message, Session session) throws IOException{
        
        Gson gson = new Gson();
        JsonObject jsonObject = gson.fromJson(message, JsonObject.class);
        if (jsonObject != null){
            String nameShown = jsonObject.get("nameShown").getAsString();
            String messageContent = jsonObject.get("messageContent").getAsString();
            String receiver = jsonObject.get("receiver").getAsString();
            
            Message messageModel = new Message(nameShown, receiver, messageContent);
            if (messageModel.insert()){
                System.out.println("Insert message successfully!");
            }
            else{
                System.out.println("Error!");
            }
            
            for (Session ses : userSessions){
                ses.getAsyncRemote().sendText(nameShown+": "+ messageContent);
            }
        }
        
    }
}

