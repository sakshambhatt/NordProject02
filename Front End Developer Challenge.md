## Front End Developer Challenge

You will be consuming the Star Wars API(https://swapi.dev/) to show some items in a table. The table will be sortable, and will be searchable. We are looking to evaluate your front-end dev skills in HTML, CSS, and JS.

- Include the Font Awesome icon font in your CodePen (https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css) 
- Include the Titillium Web font from Google Fonts (https://fonts.googleapis.com/css?family=Titillium+Web:200,600) 

## Functionality/Acceptance Criteria

- Show the list people from https://swapi.dev/api/people/ in a table
- The table should be paginated with 10 records in a single page
- The table should sortable and searchable
- Each entry should include all the attributes from the API response
- Each entry should also have an icon as follwing
  -	If a droid, show the Font Awesome Android icon
  -	If a human, show the Font Awesome user circle icon
  -	If any other species, show the Font Awesome question mark

- Show error state if the API is down
  - Show the Font Awesome exclamation circle icon

- Search (by name) and show the first results page from https://swapi.dev/api/people/?search=. Example query would be https://swapi.dev/api/people/?search=luke, which returns 1 result (Luke Skywalker)
  - Show the loading state while the request is processing
    - Show the Font Awesome spinner icon
  - Display the current search query in the search input
  - Searching should clear the sorting selection
  - Clearing the search input should show the first page again

- Show empty state if there's no results from the search API
  - Show the Font Awesome warning icon

- Show cards containing counts for total results, total droid, total human (same way for all types of species)

####  Build a frontend applicationusing one of the following:
- Angular
- React
- Vuejs


## Conditions

- You should consume the api endpoint mention and not use it as internal json file
- You should build this application in ECMAScript 6 or later, you are free to use any javascript framework apart form listed above.
- Do not use any database or full text search engines
- If you make any assumptions while solving the exercise please mention them clearly in the readme file

## What we are looking for

- **Simple readable code** How well structured it is? Clear separation of concerns? Can anyone just look at it and get the idea to
what is being done? Does it follow any standards?
- **Correctness** Does the application do what it promises? Can we find bugs or trivial flaws?
- **Memory efficiency** How will it behave in case of large datasets?
- **UI/UX Aspect** How well your app presents ?
- **Testing** How well tested your application is? Can you give some metrics?

## Questions

If you have any questions to this challenge, please do reach out to us.

## Checklist

Before submitting, make sure that your program

- [ ] Code accompanies the Unit Tests
- [ ] Usage is clearly mentioned in the README file, This including setup the project, how to run it, how to run unit test, examples,etc
- [ ] Uses the endpoint directly
- [ ] Feel good factor UI/UX

## How to Submit:

- Upload/submit your work through Github and share the link via email. 
- Deploy the app on Netlify or another platform and share the deployed link via email.

## Note

Implementations focusing on **quality over feature completeness** will be highly appreciated,  don’t feel compelled to implement everything and even if you are not able to complete the challenge, please do submit it anyways.
