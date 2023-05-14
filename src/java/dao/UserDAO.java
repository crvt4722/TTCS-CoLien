package dao;

import java.sql.*;
import java.util.*;
import model.UserOrder;
import model.UserProfile;
import model.Message;

public class UserDAO {
    public static Connection openConnection(){
        String driver = "com.mysql.jdbc.Driver";
        String url = "jdbc:mysql://localhost:3306/lionelronaldo";
        String user = "root";
        String password = "04072002";
        Connection conn = null;
        try {
            Class.forName(driver);
            conn = DriverManager.getConnection(url, user, password);
            
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        return conn;
    }
    
    public static boolean insertMessage(String nameShown, String receiver, String message) {
        try (Connection c = openConnection()){
            String insert = "INSERT INTO message VALUES (?, ?, ?)";
            PreparedStatement ps = c.prepareStatement(insert);
            ps.setString(1, nameShown);
            ps.setString(2, receiver);
            ps.setString(3, message);
            
            return ps.execute();
        } catch (Exception e) {
        }
        return false;
    }
    
    public static boolean insertJersey(String clubOrCountry, String season, int restQuantity) {
        try (Connection c = openConnection()){
            String insert = "INSERT INTO jersey VALUES (?, ?, ?)";
            PreparedStatement ps = c.prepareStatement(insert);
            ps.setString(1, clubOrCountry);
            ps.setString(2, season);
            ps.setInt(3, restQuantity);
            
            return ps.execute();
        } catch (Exception e) {
        }
        return false;
    }
    
    public static boolean checkUserNameExists(String userName) {
        try (Connection c = openConnection()){
            String select = "SELECT * FROM user_idol where user_name = ?";
            PreparedStatement ps = c.prepareStatement(select);
            ps.setString(1, userName);
            
            ResultSet rs = ps.executeQuery();
            if(rs.next()) return true;
        } catch (Exception e) {
        }
        return false;
    }
    
    public static boolean changeIdol(String userName, String idol) {
        try (Connection c = openConnection()){
            String update = "UPDATE user_idol SET idol = ? WHERE user_name = ?";
            PreparedStatement ps = c.prepareStatement(update);
            
            ps.setString(1, idol);
            ps.setString(2, userName);
            
            ps.execute();
            return true;
        } catch (Exception e) {
        }
        return false;
    }
    
    public static boolean insertIdol(String userName, String idol) {
        try (Connection c = openConnection()){
            String insert = "INSERT INTO user_idol VALUES (?, ?)";
            PreparedStatement ps = c.prepareStatement(insert);
            ps.setString(1, userName);
            ps.setString(2, idol);
            
            return ps.execute();
        } catch (Exception e) {
        }
        return false;
    }
    
    public static ArrayList<String> getMessages(String receiver){
        
        ArrayList<String> arr = new ArrayList<>();
        
        try (Connection c = openConnection()){
            String select = "SELECT * FROM message WHERE to_ = ?";
            PreparedStatement ps = c.prepareStatement(select);
            ps.setString(1, receiver);
            
            ResultSet rs = ps.executeQuery();
            while(rs.next()){
                String sender = rs.getString("from_");
                String content = rs.getString("content");
                arr.add(sender + ": "+content);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return arr;
    }
    
    public static HashMap<String, Long> getNumberOfVotes(){
        HashMap<String, Long> hm = new HashMap<>();
        try (Connection c = openConnection()){
            String select = "SELECT idol, COUNT(*) as cnt FROM user_idol GROUP BY idol;";
            PreparedStatement ps = c.prepareStatement(select);
            
            ResultSet rs = ps.executeQuery();
            while(rs.next()){
                String idol = rs.getString("idol");
                Long cnt = rs.getLong("cnt");
                hm.put(idol, cnt);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        return hm;
    }
    
    public static boolean isDuplicateEmail(String email){
        try (Connection c = openConnection()){
            String select = "SELECT * FROM user_profile WHERE email = ?";
            PreparedStatement ps = c.prepareStatement(select);
            ps.setString(1, email);
            return ps.executeQuery().next();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }
    
    public static boolean insertUserProfile(String fullname, String email, String password ){
        try (Connection c = openConnection()){
            String insert = "INSERT INTO user_profile VALUES (?, ?, ?)";
            PreparedStatement ps = c.prepareStatement(insert);
            ps.setString(1, fullname);
            ps.setString(2, email);
            ps.setString(3, password);
            ps.execute();
            
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }
    
    public static boolean checkLogin(String email, String password){
        try (Connection c = openConnection()){
            String select = "SELECT * FROM user_profile WHERE email = ? AND password = ?";
            PreparedStatement ps = c.prepareStatement(select);
            ps.setString(1, email);
            ps.setString(2, password);
            return ps.executeQuery().next();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }
    
    public static String getFullname(String email){
        String result = "";
        try (Connection c = openConnection()){
            String select = "SELECT * FROM user_profile WHERE email = ?";
            PreparedStatement ps = c.prepareStatement(select);
            ps.setString(1, email);
            
            ResultSet rs = ps.executeQuery();
            if(rs.next()) result = rs.getString("fullname");
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }
    
    public static boolean insertUserOrder(String phone, String email,String address, String orderTime
            ,String size, String quantity, String paymentMethod, String season, 
            String orderShirtType, String clubOrNation, String player){
        
        try (Connection c = openConnection()){
            String insert = "INSERT INTO user_order VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            PreparedStatement ps = c.prepareStatement(insert);
            ps.setString(1, email);
            ps.setString(2, orderShirtType);
            ps.setString(3, season);
            ps.setString(4, orderTime);
            ps.setString(5, phone);
            ps.setString(6, address);
            ps.setString(7, size);
            ps.setString(8, quantity);
            ps.setString(9, paymentMethod);
            ps.setString(10, clubOrNation);
            ps.setString(11, player);
            ps.setString(12, "Wait for the confirmation");
            ps.execute();
            
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }
    
    public static ArrayList<UserOrder> getUserOrder(String email){
        ArrayList<UserOrder> res = new ArrayList<UserOrder>();
        try (Connection c = openConnection()){
            String select = "";
            if(!email.equals("admin@lionelronaldo.com")) select = "SELECT * FROM user_order WHERE email = ?";
            else select = "SELECT * FROM user_order";
            PreparedStatement ps = c.prepareStatement(select);
            if(!email.equals("admin@lionelronaldo.com")) ps.setString(1, email);
            ResultSet rs = ps.executeQuery();
//            System.out.println("chayok");
            while(rs.next()){
//                System.out.println("chuanbitim");
                String season = rs.getString("season");
                String []arrSeason = season.split("/");
                season = arrSeason[0] + "-20" +arrSeason[1];
                
                res.add(new UserOrder(rs.getString("shirt_type"), season, 
                        rs.getString("order_time"), rs.getString("phone"), rs.getString("address"), 
                        rs.getString("size"), rs.getString("payment_method"), Integer.parseInt(rs.getString("quantity")),
                        rs.getString("club_or_nation"), rs.getString("player"),rs.getString("delivery_status"), rs.getString("email")
                ));
//                System.out.println("timok");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return res;
    }
    
    public static boolean cancelOrder(String email, String orderTime){
        try (Connection c = openConnection()){
            String delete = "DELETE FROM user_order WHERE email = ? AND order_time = ? AND delivery_status = ?";
            PreparedStatement ps = c.prepareStatement(delete);
            
            ps.setString(1, email);
            ps.setString(2, orderTime);
            ps.setString(3, "Wait for the confirmation");
            ps.execute();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }
    
    public static boolean shipOrder(String email, String orderTime){
        try (Connection c = openConnection()){
            
            String update = "UPDATE user_order SET delivery_status = ? WHERE email = ? AND order_time = ? ";
            PreparedStatement ps = c.prepareStatement(update);
            
            ps.setString(1, "In transit");
            ps.setString(2, email);
            ps.setString(3, orderTime);
            
            ps.execute();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }
}
