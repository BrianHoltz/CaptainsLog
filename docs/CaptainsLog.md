## Introduction

This application will help the user monitor and improve their weight and nutrition. It will track, record, and analyze the user’s weight and nutritional inputs against the user's goals and best-practice guidelines.

## Name

Current top names from our voting spreadsheet:

| App Name | Score |
| ----- | ----- |
| CaptainsLog | 2 |
| GutCheck | 1.5 |
| GutSmart | 1.5 |
| WeightAndSee | 1.5 |
| WeightABit | 1.5 |
| GutInstinct | 1.25 |
| GutTracker | 1.25 |
| GutCoach | 1.25 |
| FitBite | 1.25 |
| TummyTracker | 1 |

## Features

Weight

* Import/sync weight data from Fitbit  
* Import weight data from CSV  
* Add current weight  
* Display weight graph  
  * Show weight-loss glide slope

Nutrition 

* Log meal from camera  
* Input food manually using autocomplete food chooser  
* Nutrients achieved  
* Nutrients needed  
* Pre-mealtime nags: 11:30, 5:30  
* Graph calories, nutrients   
* Hydration tracking/nagging  
* Integrate w/ Chronometer etc.

Display

* Web dashboard  
* Android app+widget  
* Google TV app/screensaver  
* Mac screensaver (or just use web dashboard?)

Motivation

* Share w/ friends/sponsor  
* Gamify: streaks, badges, levels

## Project Planning

* Open source?   
* Business model? donations, ads, ad-free, premium features  
* Once we pick a name, we’ll buy a DNS domain name

## Project Technical Stack & Deployment Summary

### Technical Stack (JPR)

* **Backend Framework:** **Java Spring Boot**. This was chosen due to the team's preference for Java, providing a robust, enterprise-grade, and well-supported platform for building secure REST APIs.  
* **Database:** **PostgreSQL**. This is an industry-standard, highly reliable open-source relational database that integrates seamlessly with Spring Boot via Spring Data JPA.  
* **Frontend:** **React**. This remains the standard, modern choice for building fast, component-based user interfaces.  
* **Containerization:** **Docker** is highly recommended. It will be used for packaging the Spring Boot application and the PostgreSQL database into consistent, portable images. This simplifies collaboration and makes future migration to commercial cloud platforms straightforward. **Kubernetes (K8s)** is specifically excluded as it introduces unnecessary complexity for this project size.

### Deployment Plan: Local Self-Hosting

The chosen deployment strategy is to run the server on local hardware to control costs and provide a learning opportunity.

* **Server Hardware:** The compiled Spring Boot application and its database container will run on a **Local Mac Mini** dedicated to hosting the service.  
* **Connectivity:** The application will be accessed over the internet using a **dedicated DNS domain name**. This approach requires a few manual steps: setting up **port forwarding** on the home router and managing **dynamic IP address** updates (likely via a dynamic DNS service) if the local ISP does not provide a static IP address.

