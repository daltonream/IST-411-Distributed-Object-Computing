package Json_demo;

import java.io.File;
import java.util.Scanner;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

public class App {
    public static void main(String[] args) {
        try {

            Scanner scan = new Scanner(new File("student.json"));
            String studentInfo = scan.nextLine();

            System.out.println(studentInfo);

            JsonParser studentParser = new JsonParser();

            JsonElement student = studentParser.parse(studentInfo); 
            JsonObject studentObj = student.getAsJsonObject();

            System.out.println(studentObj.get("name"));
            System.out.println(studentObj.get("GPA"));
            System.out.println(studentObj.get("Major"));


        } catch (Exception e){
            e.printStackTrace();
        }
    }
}
