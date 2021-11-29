package LabOnePartTwo;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;

public class Server {
    public static void main(String[] args) {
        try (ServerSocket serverSocket = new ServerSocket(6000)){
            Boolean complete = false;
            String lineIn= "";
            System.out.println("Waiting for connection");
            Socket clientSocket = serverSocket.accept();
            System.out.println("Connected");

            try (BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
            PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true)){

            while (!complete) {
                lineIn  = in.readLine();

                if (lineIn == null) {
                    complete = true;
                } else {
                    System.out.println(lineIn);
                    out.println(lineIn.toUpperCase());
                }

        }

            } catch (Exception ex ){
                ex.printStackTrace();
            }

        } catch ( IOException ex){
            ex.printStackTrace();
        }

   
    }
}

