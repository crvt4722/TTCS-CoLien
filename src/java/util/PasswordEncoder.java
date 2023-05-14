package util;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class PasswordEncoder {

    public static String encode(String passwordToHash) throws NoSuchAlgorithmException {
        String salt = "somesalt"; // thêm một chuỗi salt vào password trước khi mã hóa
        String saltedPassword = passwordToHash + salt;

        MessageDigest messageDigest = MessageDigest.getInstance("SHA-256");
        byte[] hashedPassword = messageDigest.digest(saltedPassword.getBytes());

        // Chuyển đổi mảng byte thành một chuỗi hex
        StringBuilder stringBuilder = new StringBuilder();
        for (byte b : hashedPassword) {
            stringBuilder.append(String.format("%02x", b));
        }

        return stringBuilder.toString();
    }
}


