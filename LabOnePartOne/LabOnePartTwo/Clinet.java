package LabOnePartTwo;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.InetAddress;
import java.net.Socket;
import java.util.Scanner;

public class Clinet {
    public static void main(String[] args) {
        try {
            InetAddress localAddress = InetAddress.getLocalHost();
            try (Socket clientSocket = new Socket (localAddress, 6000);
                        PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);
                        BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()))){
                        System.out.println("connected");
                        Scanner scanner = new Scanner(System.in);
                        while (true){
                            System.out.println("Enter Text:");
                            String input = scanner.nextLine();
                            if ("quit".equalsIgnoreCase(input)){
                                break;
                            }
                            out.println(input);
                            String response = in.readLine();
                            System.out.println("Server response " + response);
                        }
                        scanner.close();
                        }
        } catch (IOException ex){
            ex.printStackTrace();
        }
    }
}
