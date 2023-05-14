package util;

public class Validate {
    
    public static String StringUtil(String myString){
        return myString == null? "": myString;
    }
    public static boolean controlUserInput(String content) {
        if (content == null || content.equals("") )
            return false;
        return true;
    }
    
    public static boolean checkPhone(String phone) {
        return phone.matches("\\d{9,11}");
    }
    
    public static boolean checkName(String name) {
        return name.matches("[\\p{L}\\s]{2,50}");
    }
    public static boolean checkEmail(String email) {
        if (!email.matches("\\w+@\\w+[.]\\w+"))  // email@address.com
            return false;
        return true;
    }
    
    public static boolean checkPassword(String password) {
        return password.matches("\\w{4,30}");
    }
    
    public static boolean checkAddress(String address) {
        return address.matches("[\\p{L},.\\s]{10,100}");
    }
}
