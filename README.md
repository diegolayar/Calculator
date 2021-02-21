# Calculator Web Application

On this application, users can calculate simple mathematical expressions and see the global history of calculations.

You can either run locally (instructions below) or visit the [website]()

## Technical Specifications

This application was developed using React, JavaScript, HTML, CSS and Node.js, as well as Firebase for the database.

Complimentary tools such as Figma were used for moodboarding and wireframing. Visit the board [here](https://www.figma.com/file/8AqZwNSc52ewi4pV6MjH8a/Untitled?node-id=0%3A1)

## Features

### Input Validation

User input is  validated in real time so users know when their input will have a valid output. If the input is not valid,
it is not processed. Valid input if represented by light green borders on the calculator's screen, invalid input is light red

### Parenthesis Support

Parenthesis can be used to group expressions, and when there is no multiplication sign between a number and a starting parenthesis
the app handles the  multiplication.

### History of Calculations

On the right side of the screen, users can see in real time the last 10 calculations made by any other user.

## To Run Locally:

### Install npm

`npm install`

### Install Firebase

`npm install firebase`

## Start Server

`npm start`

## Contact Me

Feel free to reach out to me with any questions or anything in general. My email is diegolaya01@hotmail.com.

## More About Me

[Resume](https://drive.google.com/file/d/1kQjquwLIXNx8Rer66bfbvKu32DQtMBzn/view)
[Personal Website](https://diegolaya.dev/)
[Linked In](https://www.linkedin.com/in/diego-laya-b011b11a1/)

## Future Recommendations

I decided to keep it simple because the 5 classes I'm taking did not let me expand into all my ideas, but it would be great to add
some more features:

1.- Enabling keyboard input.
2.- Changing the precision of calculations, right now it's fixed on 3 decimal places.
3.- More calculator functions.
4.- Clicking on a calculation in the history and importing it into the calculator directly to
modify it as the user wants.
