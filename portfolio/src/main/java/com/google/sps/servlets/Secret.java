package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet that gives a secret fact */
@WebServlet("/secret")
public class Secret extends HttpServlet {

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/html;");
        response.getWriter().println("<h1>You found the secret!</h1>");
        response.getWriter().println("<p>I like to watch musicals</p>");

        response.getWriter().println("<iframe src=\"https://gifer.com/embed/O8mt\" width=480 height=187.000 frameBorder=\"0\" allowFullScreen></iframe><p></p>");
        response.getWriter().println("<iframe src=\"https://giphy.com/embed/26vIfjCYWUeCoIaB2\" width=\"480\" height=\"265\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe><p></p>");
        response.getWriter().println("<iframe src=\"https://gifer.com/embed/7sKv\" width=480 height=159.360 frameBorder=\"0\" allowFullScreen></iframe>");

    }
}
