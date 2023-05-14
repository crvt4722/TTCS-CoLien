package model;

import dao.UserDAO;
public class Message {
    private String sender, receiver ,content;

    public Message(String sender, String receiver, String content) {
        this.sender = sender;
        this.receiver = receiver;
        this.content = content;
    }

    public String getSender() {
        return sender;
    }

    public String getReceiver() {
        return receiver;
    }

    public String getContent() {
        return content;
    }
    
    public boolean insert(){
        return UserDAO.insertMessage(sender, receiver, content);
    }
    
    public boolean addMessage(){
        return UserDAO.insertMessage(sender, receiver, content);
    }
    
    public String getMessage(){
        String result = sender+": " + receiver;
        return result;
    }
}
