package WeatherData;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class App {
    
    public static void main(String[] args) {
        
        {
            try {
                URL url = new URL("https://ghibliapi.herokuapp.com/films");//2baf70d1-42bb-4437-b551-e5fed5a87abe
                HttpURLConnection httpConn = (HttpURLConnection) url.openConnection();

                httpConn.setRequestMethod("GET");

                BufferedReader in = new BufferedReader(new InputStreamReader(httpConn.getInputStream()));
                System.out.println(httpConn.getResponseCode());
                System.out.println(httpConn.getResponseMessage());

                boolean done = false;
                String responseLine = "";
                
                while(!done){

                    responseLine = in.readLine();

                    if (responseLine == null){
                        done = true;
                    } else {
                        System.out.println(responseLine);
                    }
                }
    
            } catch (Exception e){
                System.err.println("Error Occurred");
                e.printStackTrace();
            }
            
        } 
    
}
}