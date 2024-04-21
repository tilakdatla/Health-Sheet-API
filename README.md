# Project Description

This project is a **Fitness Tracker** that uses the **Nutritionix API** to estimate the calories burned for various exercises. The user can input the type of exercise and its duration in natural language, and the program will calculate the estimated calories burned. The program can also take into account user demographics like age, gender, and weight to make a more accurate estimate.

The program is interactive and prompts the user for their exercise information. It then sends this information to the Nutritionix API, which returns data about the exercise, including the estimated calories burned.

But the functionality doesn't stop there! Once the program has the exercise data, it then uses the **Sheety API** to record this data in a Google Sheets document. This allows the user to keep a record of their workouts and the estimated calories burned, providing a simple and effective way to track their fitness progress over time.

Here's a brief overview of how the program works:

1. The program prompts the user for the exercise they did and for how long.
2. It sends this information to the Nutritionix API, which returns data about the exercise, including the estimated calories burned.
3. The program then formats this data and sends it to a Google Sheets document via the Sheety API.
4. The user can then view their Google Sheets document to see a record of their workouts and the estimated calories burned.

This project demonstrates the power of APIs and how they can be used to create practical and useful applications. Whether you're a fitness enthusiast looking to track your progress, or a developer interested in working with APIs, this project has something for you. Enjoy! 😊

# Getting Started

To run this Fitness Tracker program, you'll first need to sign up for the Nutritionix API and generate an API key and ID. The Nutritionix API is used to estimate the calories burned for various exercises. You can sign up for the Nutritionix API [here](https://developer.nutritionix.com/signup).

Next, you'll need to sign up for Sheety and make a copy of the Google Sheets document that you want to use to record your workout data. Sheety is used to send the exercise data to a Google Sheets document. You can sign up for Sheety [here](https://sheety.co/).

Once you have your API key, ID, and Google Sheets document set up, you'll need to add these details to a `secret.js` file in your project. This file should export your API key, ID, and the endpoints for the Nutritionix API and your Sheety document.

With everything set up, you're ready to run the program. First, you'll need to install all the necessary node modules. You can do this by running the following command in your terminal:

```bash
npm install
```

After all the node modules are installed, you can run the program with the following command:

```bash
node index.js
```

Now, you're all set! The program will prompt you for the exercise you did and for how long. It will then calculate the estimated calories burned and record this data in your Google Sheets document. Happy tracking! 😊
