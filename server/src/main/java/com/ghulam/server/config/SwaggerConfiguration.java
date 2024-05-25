package com.ghulam.server.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeIn;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import io.swagger.v3.oas.annotations.servers.Server;

@OpenAPIDefinition(
        info = @Info(
                title = "Book Store API",
                version = "1.0",
                description = "This API is designed to manage books in a bookstore. It provides endpoints for performing various operations " +
                        "on books, including adding, updating, deleting, and retrieving books from the store. Additionally, users " +
                        "can add books to their cart and place orders conveniently. The API includes security features such as " +
                        "authentication and authorization, where access to each endpoint is based on the role of the user, " +
                        "whether it's USER or ADMIN, determined by their JWT token."

        ),
        security = @SecurityRequirement(name = "bearerAuth"),
        servers = {
                @Server(
                        url = "http://localhost:8080",
                        description = "Local server"
                )
        }
)
@SecurityScheme(
        name = "bearerAuth",
        type = SecuritySchemeType.HTTP,
        scheme = "bearer",
        bearerFormat = "JWT",
        in = SecuritySchemeIn.HEADER
)
public class SwaggerConfiguration {
}
