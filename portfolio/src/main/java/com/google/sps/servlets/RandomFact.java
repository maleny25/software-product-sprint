package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet that gives a secret fact */
@WebServlet("/fact")
public class RandomFact extends HttpServlet {

    /**
     *
     */
    private static final long serialVersionUID = -6817457809219846972L;

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("application/json;");
        String json = convertToJson();
        response.getWriter().println(json);
    }

    private String convertToJson() {
    String json = "[";
    json += "{\"fact\": \"I like to watch Netflix\"}";
    json += ", ";
    json += "{\"fact\": \"I like to play volleyball\"}";
    json += ", ";
    json += "{\"fact\": \"I\'m the first to go to college in my family\"}"; 
    json += ", ";
    json += "{\"fact\": \"I like to have movie nights\"}";
    json += "]";
    return json;
  }
}
