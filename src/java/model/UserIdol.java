package model;

import dao.UserDAO;

public class UserIdol {
    private String email, idol;

    public UserIdol(String email, String idol) {
        this.email = email;
        this.idol = idol;
    }

    public String getEmail() {
        return email;
    }

    public String getIdol() {
        return idol;
    }
    public boolean insert(){
        return UserDAO.insertIdol(email, idol);
    }
    
    public boolean change(){
        return UserDAO.changeIdol(email, idol);
    }
}
