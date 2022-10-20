# CSU44000 Internet Applications
This contains my assignments for the Trinity College Dublin module Internet Applications completed using HTML, CSS and Vue.js.

## Assignment 1:

The objective of this first assignment is to develop a simple Internet Application which
demonstrates the following features:

Client implementation requirements:

• A reactive client running in an Internet Browser using Vue.js

• The client must utilize the V- directives and moustache syntax

• The client must interact with a Server-Side application using at least one Web API
primitive.

• You may not use Vue-CLI or any other ‘scaffolding’ system.

Server implementation requirements:

• A Server-side application which exposes at least one API primitive and consumes the
services of a 3rd party Web API (you won’t be able to do this from the client side due
to ‘same-origin’ restrictions).

Application details:

You are asked to produce an application that inputs the city that someone is planning
to go to. Your server-side should use the openweathermap API to get the weather
forecast for that city for the next 4 days. The client side should then display some
summary information including:

• Packing: if there is rain anytime over the next 4-days indicate that the user should
bring an umbrella.

• Indicate the type of whether that the user should pack for Cold (temperatures below
12C), Mild (temperatures from 12C to 24C inclusive) or Hot (temperatures above
24C).

• Give a summary table for the next 4 days showing: Temperature, Wind Speed and
Rainfall level.

The openweathermap API is documented here: https://openweathermap.org/api

When you request the weather data for a city, it will return you the Longitude and
Latitude of the city. You can then use these in the AIR Pollution API to get the PM2_5 forecast 
for the next 5 days. If this exceeds 10, then you should advise the user to
wear a mask.

On completion of these core feature you should implement one innovative and
creative feature which requires that is unique to your Internet Application. This
innovative feature should involve a non-trivial addition or modification of both the
client and the server.

