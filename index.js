import axios from "axios";
import readline from "readline";

const rl = readline.createInterface
({
    input: process.stdin,
    output: process.stdout
});


import { API_KEY, APP_ID, endpoint, sheetEndpoint } from "secret.js";

var GENDER='male';
var WEIGHT_KG = '70';
var HEIGHT_CM = '180'; //in cm
var AGE = 21;  //in years

const config={
    headers: {
        'x-app-id':APP_ID,
        'x-app-key':API_KEY
    }
}

rl.question("Which exercise did you do today and for how much time? ", function(userInput) 
{
    const body={
        "query":userInput,
        'gender':GENDER,
        "weight_kg": WEIGHT_KG,
        "height_cm": HEIGHT_CM,
        "age": AGE
    }
    getUser(body);
});


async function getUser(body)
{
    try 
    {
        const result = await axios.post(endpoint,body,config);
        const data=result.data.exercises[0];
        
        const bodys = {
            "workout": {
              "date":getDate(),
              "time":getCurrentTime(),
              "exercise":data.name,
              "duration":data.duration_min,
              "calories":data.nf_calories,
            }
        };
        putDataOnsheet(bodys);

        rl.close();
    }
    catch (error) 
    {
        console.log("Failed to make request : ",error.message);
        rl.close();
    }
}

function getDate()
{
    const d = new Date();

    // Get the day, month and year
    const day = d.getDate(); // Day of the month
    const month = d.getMonth() + 1; // Months are zero-based in JavaScript
    const year = d.getFullYear();
    return (day + "/" + month + "/" + year);
}

function getCurrentTime()
{
    // Get the hours and minutes
    const d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;

    minutes = minutes < 10 ? '0' + minutes : minutes;

    return (hours + ":" + minutes + " " + ampm);
}

async function putDataOnsheet(body)
{
    try {
        const result = await axios.post(sheetEndpoint, body);
        rl.close();
    } catch (error) {
        console.log("Failed to make request : ", error.message);
        rl.close();
    }
}



