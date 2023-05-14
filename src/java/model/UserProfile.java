package model;

import dao.UserDAO;

public class UserProfile {
    private String fullname, email, password;

    public UserProfile(String fullname, String email, String password) {
        this.fullname = fullname;
        this.email = email;
        this.password = password;
    }

    public String getFullname() {
        return fullname;
    }

    public String getEmail() {
        return email;
    }
    
    public boolean  insert(){
        return UserDAO.insertUserProfile(fullname, email, password);
    }
    
    public boolean addUser(){
        return UserDAO.insertUserProfile(fullname, email, password);
    }
    
    public boolean login(){
        return UserDAO.checkLogin(email, password);
    }
    
    public String getLastName(){
        String [] arr = fullname.split("\\s+");
        return arr[arr.length-1];
    }
}
