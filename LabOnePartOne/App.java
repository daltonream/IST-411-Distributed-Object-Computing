package LabOnePartOne;

import java.io.BufferedReader;
import java.io.PrintStream;
import java.net.Socket;
import java.io.InputStreamReader;

// import jdk.internal.org.jline.utils.InputStreamReader;
// import jdk.javadoc.internal.doclets.formats.html.SourceToHTMLConverter;
// import jdk.nashorn.internal.runtime.Debug;

public class App {

    public static void main(String[] args) {
        String url = "www.psu.edu";
        String lineIn = "";
        boolean complete = false;

        try {
            // (url, port #)
            Socket socket = new Socket(url, 80); // port 80 = default web server

            PrintStream out = new PrintStream(socket.getOutputStream());
            BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));

            out.println("GET/HTTP/1.1");
            out.println();

            while (!complete) {
                lineIn = in.readLine();

                if (lineIn == null) {
                    complete = true;
                } else {
                    System.out.println(lineIn);
                }

            }

            in.close();
            out.close();
            socket.close();

        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }
}