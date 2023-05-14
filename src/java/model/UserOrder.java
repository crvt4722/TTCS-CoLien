package model;

import dao.UserDAO;

public class UserOrder {
    private String shirtType, season, orderTime, phone, address, size, paymentMethod, clubOrNation, player, deliveryStatus, email;
    private int quantity;

    public UserOrder(String shirtType, String season, String orderTime, String phone, String address, 
            String size, String paymentMethod, int quantity, String clubOrNation, String player, String deliveryStatus, String email) {
        this.shirtType = shirtType;
        this.season = season;
        this.orderTime = orderTime;
        this.phone = phone;
        this.address = address;
        this.size = size;
        this.paymentMethod = paymentMethod;
        this.quantity = quantity;
        this.clubOrNation = clubOrNation;
        this.player = player;
        this.deliveryStatus = deliveryStatus;
        this.email = email;
    }

    public String getShirtType() {
        return shirtType;
    }

    public String getSeason() {
        return season;
    }

    public String getOrderTime() {
        return orderTime;
    }

    public String getPhone() {
        return phone;
    }

    public String getAddress() {
        return address;
    }

    public String getSize() {
        return size;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public int getQuantity() {
        return quantity;
    }

    public String getClubOrNation() {
        return clubOrNation;
    }

    public String getPlayer() {
        return player;
    }

    public String getDeliveryStatus() {
        return deliveryStatus;
    }

    public String getEmail() {
        return email;
    }
    
    public boolean insert(){
        return UserDAO.insertUserOrder(phone, email, address, orderTime, size,Integer.toString(quantity), paymentMethod, season, shirtType, clubOrNation, player);
    }
}
