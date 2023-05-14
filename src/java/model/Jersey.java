
package model;

import dao.UserDAO;
public class Jersey {
    private String clubOrCountry, season;
    private int restQuantity;

    public String getClubOrCountry() {
        return clubOrCountry;
    }

    public String getSeason() {
        return season;
    }

    public int getRestQuantity() {
        return restQuantity;
    }
    
    public boolean addJersey(){
        return UserDAO.insertJersey(clubOrCountry, season, restQuantity);
    }
}
