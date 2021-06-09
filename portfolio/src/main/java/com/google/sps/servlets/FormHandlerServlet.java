package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/form-handler")
public class FormHandlerServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

    // Get the value entered in the form.
    String textValue = request.getParameter("name-input");
    String email = request.getParameter("email-input");

    // Print the value so you can see it in the server logs.
    System.out.println("name: " + textValue);
    System.out.println("email: " + email);

    // Write the value to the response so the user can see it.
    response.getWriter().println("Thank you " + textValue + ", I will contact you soon at " + email);
    response.setContentType("text/html;");
    response.getWriter().println("<p></p><a href=\"index.html\">go back</a>");
  }
}