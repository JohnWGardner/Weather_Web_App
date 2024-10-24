![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

**Students:** Hodo Ismail, Sol Rayet, Paul Jebb, John Gardner  
**Date:** 21/10/2024  
**Cohort:** WECA - Full Stack Software Developer: Skills Bootcamp  
**Project:** Hackathon2 Weather App: HTML, CSS, Bootstrap, JS
![Screenshot 2024-10-24 at 13 10 28](https://github.com/user-attachments/assets/72e8bd44-1979-420f-8d4a-00d1ea07eae4)

---

# Project Goals

## 1. Understand the Purpose:

- Provide users with real-time weather data and a 5-day forecast.
- Present information in a straightforward, organized format that is easy to understand and navigate.

## 2. Developer Key Goals:

- Fetch real-time weather data and a simple, easy-to-digest 5-day weather forecast.
- Design and implement the webpage using Bootstrap 4.6 for responsiveness and layout.
- Integrate external API for dynamic data (OpenWeatherMap API).
- Implement error handling for invalid city inputs and show meaningful error messages.

---

# Features

## 1. Home Page

- A weather search form using Bootstrap components, allowing users to input a city and retrieve weather data.
- A real-time display of current weather data, including temperature, condition, humidity, and wind speed.
- A 5-day weather forecast, using Bootstrap cards, showing daily conditions, temperatures, humidity, and wind speeds.
- Fetching data dynamically from the OpenWeatherMap API.
- Error handling with messages if the city is not found or if there’s an API issue.

## 2. Additional Features:

- Responsiveness ensured using Bootstrap 4.6, so the app works across various screen sizes.
- Clear navigation and intuitive UI with accessible forms.

---

# UX/UI

## 1. Target Audience

- Users who want real-time weather data and a 5-day forecast for planning their daily or weekly activities.

## 2. User Stories

- As a user, I want to check the current weather in a specific city so that I can plan my day accordingly.

  - **Acceptance Criteria:** A search form with a clear input field for city name and a submit button.
  - A section that shows the city name, temperature, condition, and other relevant data after submission.

- As a user, I want to see a 5-day weather forecast to help plan my activities for the week.
  - **Acceptance Criteria:** The forecast should be displayed as cards with key weather info: temperature, humidity, and wind speed.

---

# Technologies Used

- **HTML5**: For the basic structure of the app.
- **CSS3**: For layout, color schemes, and basic styles.
- **Bootstrap 4.6**: For responsive layout, styling, and form components.
- **JavaScript (ES6+)**: For the dynamic weather display and API integration.
- **OpenWeatherMap API**: To fetch real-time weather and forecast data.
- **GitHub Pages**: For deployment of the live app.

---

# API Integration

- The OpenWeatherMap API is used to retrieve real-time weather and 5-day forecast data based on user input.
- The app uses `fetch` to make asynchronous API calls, processes the JSON responses, and dynamically updates the DOM with weather data.

---

# Design Choices

## Color Scheme

- Warm color scheme used for forecast cards to enhance visual appeal.

## Fonts

- Standard fonts for readability and consistent design.
- Slightly larger, bold fonts for key weather information to improve visibility.

## Wireframes

- Wireframes were created to design the weather app layout:  
  `/workspace/Weather_Web_App/assets/wireframes`

---

# Testing

## HTML Validation

- Initial HTML validation was done using the W3C Markup Validation Service.

## CSS Validation

- CSS validation was performed using W3C's CSS Validator. http://jigsaw.w3.org/css-validator/validator$link

## Accessibility

- Google Lighthouse audit reports an accessibility score of 87%, ensuring users with disabilities can access the site effectively.

## Browser and Device Testing

- Tested on multiple devices and browsers for responsiveness:
  - iPhone
  - Desktop
  - Chrome Developer Tools (simulating various devices)
  - Browsers: Chrome, Edge, and Safari
- Site functioned as expected across all tested platforms.

---

# Bugs

# Deployment

The app was deployed using **GitHub Pages**:

1. In the GitHub repository, navigate to **Settings**.
2. Select **Pages** from the left-hand menu.
3. Choose the **Main Branch** as the source, then save.
4. The page will automatically be published.

- **Live App URL:** [Weather Web App](https://johnwgardner.github.io/Weather_Web_App)

- We used Agile methodology, with early deployment to see every change live, aiding the development process.

---

# Credits

- **OpenWeatherMap API**: Used for fetching live weather data.
- **Bootstrap**: For layout, components, and responsive design.
- **Code Institute**: For project templates and guidance.
- **Faraz**: Inspiration for the registration form in the "About Me" section.
- **Team Members**: Hodo Ismail, Sol Rayet, Paul Jebb, and John Gardner, for contributing to the development and testing.

---
