# React DND TypeScript Starter Repo for CISC275 Fall 2022

Hello! This repository has been pre-configured with eslint and gh-pages to automatically deploy your app when you push to the main branch.

Fork, and execute necessary setup steps.

Watch this space for additional project requirements.

Interior Design App


How its Gonna Work:
Different furniture objects, of different sizes, attributes, different orientations 
Different room orientations and layouts that you can design 
Make a copy of the dragged object to appear in the room 
Filter by Type, Color, Size, 
Pick out room layout by choosing boxes on the grid to match your desired room
Have “dorm’ objects, have preset layouts of the different dorm room buildings

interface;
{
	Img_url: “”
	Type: {chair, table, bed, stove, door, etc;}
	Roomtype: {kitchen, bedroom, living room)
	Size: {1x3, 1x1}
	Position: {2,6, etc}
	Orientation: {0degrees}
	colorVariation: [blue, green,(different for each type)}
	height?
}


Part 1 - Backlog
User Stories:
As a user, I would like to be able to add items in any direction
As a user, I would like to be able to resize rooms
As a user, I would like to be able to change the color of items
As a user, I would like to be able to sort items by important attributes. 


User Personas:
User 1:
Who?
College Freshmen that doesn’t have any experience with interior design
Main Goal?
Trying to solve the problem of what the layout is going to look like for their new dorm
Main Barrier?
Main barrier is that there is not a lot of space in their new dorm, and their roommate wants them to be on opposite sides of the dorm 

User 2:
Who?
College Junior, first time living off campus in an apartment with multiple roommates
Main Goal?
All the roommates are bringing furniture to the new apartment, goal is to fit all of the furniture comfortably, and have a living room area and a dining room area, but all in the same room
Main Barrier?
The main barrier is going to be the amount of furniture that the roommates bring is going to need to be arranged in a very specific manner, so that it all fits, and also so they can have a living area and dining area, while being visually pleasing to guests walking in 

User 3:
Who?
College athlete, needs space to workout and put their gym equipment
Main Goal?
Have a decent size area to workout and use their workout equipment (free weights, jump rope, bench press) and also a living room area for relaxing
Main Barrier?
The main barrier is going to be having a area for working out, and not putting it too close to where the athlete will be eating and making food (kitchen) and also not too close to their living area 
