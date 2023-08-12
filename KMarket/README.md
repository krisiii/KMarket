# KMarket

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## KMarket

Clothes Ecommerce Website for Men, Women and Kids clothes, made with Firebase and Angular

## Header

Name design

Login and Register Buttons with router links to the pages

Cart Icon with router link to Cart page with user's products

Logout Button that logs the user out but keeps the data in Firebase authentication

## logged in users

When a user is logged in they can see the Cart icon, Logout button and Add to Cart button

## guest users

Guest users can see Login and Register buttons and cannot get access to a cart or buy products

## Login
Login Form requires email and password and then check if they are included in the Firebase authentication

Email and password have requirements and error messages when login is not successful

Can login with Google Account

Button with router link to register page if user doesn't have an account

## Register

Register Form requires email, password and confirm password

Check if email and passwords are correct or display an error message

Check if passwords are the same or display an error message

Send the information to Firebase Authentication and save the user

Can register with Google Account

Button with router link to login page if user already have an account

## Main

Banner photo from https://www.freepik.com

Search bar for products

Contacts

Newest Products on the website

## Search Bar

Search for the product's name and display only the products that match the search criteria

## Newest Products on the website

Filter the products by type - New, On Sale... and add the newest

## Contacts 

Mail, Phone and Social Media Services

## Navigation Bar for the genders

Men, Women and Kids

## Every Navigation Button

The user can go to every gender page and see all the products for that gender or choose a category

The products are filtered by gender and then by category

## Details
Every product contains a details page with a router for the product's ID
The people can see bigger image of the product, description and price

## Add to cart

Only logged in users can add products to their cart

These products are stored in a firebase collection, which name is the user's ID and that helps the products not get lost when a user logs out of the website

User can delete products from the firebase collection or delete the whole collection

Page includes buttons for home page or payment

## 404
This page display when the link is not found or not correct

Button with router link to home page
