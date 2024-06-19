import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
const response = await inquirer.prompt([{
        name: "userInput",
        type: "number",
        message: "please enter the amount of second",
        validate: (input => {
            if (isNaN(input)) {
                return "please enter valid number";
            }
            else if (input > 60) {
                return "seconds must be within 60";
            }
            else {
                return true;
            }
        })
    }]);
let input = response.userInput;
function startingtime(value) {
    const initial_time = new Date().setSeconds(new Date().getSeconds() + value);
    const interval_time = new Date(initial_time);
    setInterval((() => {
        const current_time = new Date();
        const time_difference = differenceInSeconds(interval_time, current_time);
        if (time_difference <= 0) {
            console.log("timer has expired");
            process.exit;
        }
        const minute = Math.floor((time_difference % (3600 * 24)) / 3600);
        const seconds = Math.floor(time_difference % 60);
        console.log(`${minute.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`);
    }), 1000);
}
startingtime(input);
