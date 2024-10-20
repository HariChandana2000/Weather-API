# Weather API Web Application

This repository contains a web application that interacts with the OpenWeather API to display weather information. The application is designed to provide a simple and intuitive user interface with a range of features to enhance the user experience.

## Features

- **Simple and Intuitive UI:** A clean and user-friendly interface for easy navigation.
- **City Search:** Search for weather data by entering city names.
- **Weather Forecasts:** View weather forecasts for upcoming days.
- **Date Range Filter:** Filter weather information by specific date ranges, including historical data.
- **Detailed Weather Data:** Display essential weather information such as temperature, humidity, wind speed.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/HariChandana2000/Weather-API.git

   ```
2. Navigate to the project directory:

   ```sh
   git clone https://github.com/HariChandana2000/Weather-API.git

   ```

3. Install the dependencies:
   ```sh
   npm install
   ```

## Running the Application

1. Start the development server:

   ```sh
   npm run dev

   ```

2. Open your browser and navigate to http://localhost:5173 to view the application.

## Usage

1. Enter a city name in the search bar to retrieve weather information for that location.
2. View upcoming weather forecasts for the selected city.
3. Use the date range filter to view weather information for specific dates, including historical data.

## Built With

1. React - A JavaScript library for building user interfaces.
2. OpenWeather API - A service that provides weather data. (https://openweathermap.org/api)
3. Weather API - For fetching historic data (https://www.weatherapi.com/)
4. Bootstrap - A front-end framework for developing responsive and mobile-first websites.

## Setting API KEYS

1. Create .env file in the root folder of the project and these lines. API_KEY - for openweather api
2. add the .env path to .gitignore file upon once initiating the git repo in the local system.


```sh
API_KEY="xxxxxxxxxxxxxxxxxx"
HISTORIC_API_KEY="xxxxxxxxxxxxxxxxxx"

```
