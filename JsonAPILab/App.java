package JsonAPILab;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;

public class App {
    
    public static void main(String[] args) {
        {
            try {

                URL url = new URL("https://ghibliapi.herokuapp.com/films");
                HttpURLConnection httpConn = (HttpURLConnection) url.openConnection();

                // URLConnection apiRequest = url.openConnection();
                // apiRequest.connect();
                // JsonElement element = jsonParser.parse(new InputStreamReader((InputStream) apiRequest.getContent())); //found on stack overflow
                // JsonArray movies = element.getAsJsonArray();
                httpConn.setRequestMethod("GET");
                httpConn.addRequestProperty("Accept-Charset", "UTF-8");
                httpConn.addRequestProperty("Content-type", "application/json");
                httpConn.addRequestProperty("User-Agent", "Mozilla/5.0");

                BufferedReader in = new BufferedReader(new InputStreamReader(httpConn.getInputStream()));
                StringBuilder api = new StringBuilder();
                while (in.ready()){
                    api.append(in.readLine());
                }
                
                JsonParser jsonParser = new JsonParser();
                JsonElement moviesObj = jsonParser.parse(api.toString()); 
                JsonArray movies = moviesObj.getAsJsonArray();

                Scanner scanner = new Scanner(System.in);
                boolean quit = false;
                for (JsonElement movie : movies) {
                    System.out.println("Movie Name: " + movie.getAsJsonObject().get("title").getAsString());
                    System.out.println("Movie Description: " + movie.getAsJsonObject().get("description").getAsString() + "\n");
                }
                while (!quit) {
                    boolean found = false;
                    System.out.println("Enter a Movie Name:");
                    String input = scanner.nextLine();  
                    for (JsonElement movie : movies) {
                        if ("quit".equalsIgnoreCase(input)){
                            quit = true;
                            System.out.println("\nAdios\n");
                            scanner.close();
                            break;
                        } else if (movie.getAsJsonObject().get("title").getAsString().equalsIgnoreCase(input)){
                            System.out.println("\nMovie Name: " + movie.getAsJsonObject().get("title").getAsString());
                            System.out.println("Movie Description: " + movie.getAsJsonObject().get("description").getAsString()); 
                            System.out.println("Release Date: " + movie.getAsJsonObject().get("release_date").getAsString());   
                            System.out.println("Producer: " + movie.getAsJsonObject().get("producer").getAsString() + "\n");   
                            found = true;
                        }
                    }
                    if (!found && !quit){
                        System.out.println("Movie Not Found\n");
                    }
                    httpConn.disconnect();
                }
            } catch (Exception e){
                System.err.println("Error Occurred");
                e.printStackTrace();
            }
        
        }
}
}