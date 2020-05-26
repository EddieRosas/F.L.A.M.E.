# F.L.A.M.E.
## Table of Contents
* [What is FLAME?](#what-is-flame)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Future Directions](future-directions)

## Live Site
[FLAME](https://blooming-castle-18262.herokuapp.com/#/)

## What is FLAME?
`FLAME` is a finance app, created by 4 engineers over the span of 5 days. Our goal was to provide an intuitive way for users who want to achieve financial independence.  FLAME aims to help everyone who is interested in the FIRE movement and in need of tracking their income, spending, and investments.

## Technologies Used
* React/Redux for frontend rendering
* Express.js for backend MVC framework
* MongoDB for database

## Features:
### Authentication
![flame_auth](https://github.com/EddieRosas/F.L.A.M.E./tree/master/frontend/src/photos/gifs/flame_auth.gif)
Users are able to enter FLAME by creating an account. This requires that users enter a valid username, password, and email address to create an account. Only the username and password will be required when logging in following this pre-requisite. We utilized the React-Toastify library to create smooth error notifications should any error occur during account creation or login

### Budget Entiries
![flame](https://github.com/EddieRosas/F.L.A.M.E./tree/master/frontend/src/photos/gifs/flame_budget.gif)
Users are able to create, edit, amd delete budget entries based on personal preference. Entering the date optionally defaults to the current day if nothing is entered. Flame doesn’t require users to input any of their banking information, simply enter their monthly income, monthly spending, investments etc.

### FIRE Number Calculator
![flame_calculator](https://github.com/EddieRosas/F.L.A.M.E./tree/master/frontend/src/photos/gifs/flame_calculator.gif)
We carefully developed algorithms for our calculators to accurately provide a users’s current financial standing, their projected years to financial freedom, and their FIRE Number to reach financial independence. Implemented the Re-charts library to conveniently reflect this data.

## Future Directions
* Create community forum to share personal experiences and seek advice from others
* Implement responsive deign for mobile-friendly use
* Add profile page and connect AWS to upload and store profile pictures
* Integrate a Net Worth calculator to track personal growth