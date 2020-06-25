# F.L.A.M.E.
## Table of Contents
* [What is FLAME?](#what-is-flame)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Future Directions](future-directions)

## Live Site
[FLAME](https://blooming-castle-18262.herokuapp.com/#/)

## What is FLAME?
FLAME is a finance app created by four engineers over the span of 5 days. Our goal was to provide an intuitive way for users to track their spending habits and work towards financial independence. FLAME aims to help anyone who is interested in the FIRE movement, or personal finance in general, get started on their path to financial freedom.

## Technologies Used
* React/Redux - frontend rendering
* Express.js - backend MVC framework
* MongoDB - database

## Features:
### Authentication
![flame_auth](https://github.com/EddieRosas/F.L.A.M.E./blob/master/frontend/src/photos/gifs/flame-auth.gif)

Users are able to create secure accounts. This requires that users enter a valid username, password, and email address. Only the username and password will be required when logging in following this pre-requisite. We utilized the React-Toastify library to create smooth error notifications should any error occur during account creation or login.

### Budget Entries
![flame](https://github.com/EddieRosas/F.L.A.M.E./blob/master/frontend/src/photos/gifs/flame_budget.gif)

Users are able to create, edit, and delete budget entries based on personal preference. Entering the date optionally defaults to the current day if nothing is entered. Flame doesn’t require users to input any of their banking information, simply enter their monthly income and spending.

### FIRE Number Calculator
![flame_calculator](https://github.com/EddieRosas/F.L.A.M.E./blob/master/frontend/src/photos/gifs/flame_calculator.gif)

We carefully developed algorithms for our calculators to accurately provide a users’s current financial standing, projected years to financial freedom, and FIRE Number to reach financial independence. We then implemented the Recharts library to conveniently reflect this data.

## Future Directions
- [ ] Create community forum to share personal experiences and seek advice from others
- [ ] Implement responsive design for mobile-friendly use
- [ ] Add profile page and connect AWS to upload and store profile pictures
- [ ] Integrate a net worth calculator to track personal growth
