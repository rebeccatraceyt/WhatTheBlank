# Blank!

<h1 align="center">
  <a href="https://github.com/rebeccatraceyt/WhatsThatBlank" target="_blank"><img src="https://i.ibb.co/g708ghM/logo.png" alt="Blank! logo"/></a>
</h1>

<h2 align="center">
<a href="https://github.com/rebeccatraceyt/WhatsThatBlank" target="_blank"><img src="https://i.ibb.co/KWRLxMf/tagline.png alt="Think you know your lyrics?"></a>
</h2>

<div align="center">

[Blank!](https://github.com/rebeccatraceyt/WhatsThatBlank) is web-based interactive fill-in-the-blank game, with a musical twist. With a wide variety of music categories to choose from, the user can test their memory in their favorite music genre, using a fun and intuitive user interface. Features include lively graphics and sound effects, that the user can control for their own personal experience.

[View the live project here]()

</div>

## Table of contents
1. [UX](#UX)
    1. [Project Goals](#Project-Goals)
    2. [User Stories](#User-Stories)
    3. [Development Planes](#Development-Planes)
    4. [Design](#Design)
2. [Features](#Features)
    1. [Design Features](#Design-Features) 
    2. [Existing Features](#Existing-Features)
    3. [Features to Implement in the future](#Features-to-Implement-in-the-future)
3. [Issues and Bugs](#Issues-and-Bugs)
4. [Technologies Used](#Technologies-Used)
     1. [Main Languages Used](#Main-Languages-Used)
     2. [Additional Languages Used](#Additional-Languages-Used)
     3. [Frameworks, Libraries & Programs Used](#Frameworks,-Libraries-&-Programs-Used)
5. [Testing](#Testing)
     1. [Testing.md](TESTING.md)
6. [Deployment](#Deployment)
     1. [Deploying on GitHub Pages](#Deploying-on-GitHub-Pages)
     2. [Forking the Repository](#Forking-the-Repository)
     3. [Creating a Clone](#Creating-a-Clone)
7. [Credits](#Credits)
     1. [Content](#Content)
     2. [Media](#Media)
     3. [Code](#Code)
8. [Acknowledgements](#Acknowledgements)
***

## UX 
### Project Goals
The primary goal of Blank! is to provide a web-based interactive game, that is intuitive and entertaining, through a fill-in-the-blank game, designed to test the users music knowledge.

This is the second of four Milestone Projects that the developer must complete during their Full Stack Web Development Program at The Code Institute. 

The main requirements were to design, develop and implement a dynamic front-end web application using **HTML5**, **CSS3** and **JavaScript**.

#### Player Goals
The player is looking for:
- A fun and entertaining game to play
- Control over the page settings
- An intuitive and vibrant interface, that needs little to no instructions
- Visual and audio rewards during game mode

#### Developer / Site Owner Goals
The Developer is looking to:
- Create fun and entertaining game that they would play themselves
- Demonstrate their proficiency in a variety of software development skills, using newly learned languages and libraries and API's to achieve this goal
- Deploy a project they are excited to have on their portfolio


### User Stories
**As a player, I want to:**

1. Choose my own username, to personalize my game-playing experience.
2. Intuitively navigate to game mode, to have an easy gaming experience.
3. Have a clear score counter, to keep track of my score as I play.
4. Get visual/audio feedback on answers I choose, to see whether they were correct.
5. Have the ability to toggle sound effects on or off, to suit my preference.
6. Have to ability to choose the game theme (Day vs. Night Mode), to suit my preference.
7. View latest high score to see the competition.
8. Have the option to replay the game once I have finished to start again.
9. Provide suggestions to the developer to upgrade the game, enhancing my user experience.
10. Connect with the developer on a social platform of my choosing to see their other projects.


### Development Planes

In order to design and create a web-based interactive game, the developer distinguished the required functionality of the site and how it would answer the user stories, as described above. They then applied their research to the Five Development Planes:

<strong>1. <u>Strategy</u></strong>

Broken into three categories, the website will focus on the following target audiences:
- **Roles:**
     - New Players
     - Current Players
     - Returning Players

- **Demographic:**
     - Music Lovers
     - Aged 10 years and up
     -Quiz Lovers

- **Psychographics:**
     - Personality & Attitudes:
          - Extroverted
          - Fun-driven
          - Knowledgeable when it comes to music
     - Values:
          - Modern
          - Nostalgic
          - Friendship
     - Lifestyles:
          - Fun-seeking
          - Music interest
          - Competitiveness

The website needs to enable the **user** to:
- Play with easy, navigating without complications or instructions
- Choose their preferred music category
- Control sound settings
- Control light/dark settings
- See High Score
- Provide suggestions and feedback to the developer
- Connect with developer through social links

The website needs to enable the **client** to:
- Enjoy playing their own game
- Allow for user feedback and suggestions
- Communicate with users on social links

With these goals in mind, a strategy table was created to determine the trade-off between importance and viability with the following results:

![Strategy Table](assets/readme-files/strategy-table.png)

<strong>2. <u>Scope</u></strong>

A scope was defined in order to clearly identify what needed to be done in order to align features with the strategy previously defined. This was broken into two categories:
- **Content Requirements**
     - The user will be looking for:
          - Vibrant and engaging content
          - Easy navigation throughout the game
          - Easy play interface
          - Control of sound settings
          - High Scores
          - Developer information
- **Functionality Requirements**
     - The user will be able to:
          - Navigate to preferred music category
          - Play with ease
          - Toggle Day vs Night graphics
          - See High Score
          - Toggle sound effects on and off
          - Reach out to the developer
               - Suggestions
               - Social links

<strong>3. <u>Structure</u></strong>

The information architecture was organized in a **hierarchial tree structure** in order to ensure that users could navigate through the site with ease and efficiency, with the following results: 

![Site Map](assets/readme-files/site-map.png)

<strong>4. <u>Skeleton</u></strong>

Wireframe mockups were created in a [Figma Workspace]() with providing a positive user experience in mind:

Main Page:

- Welcome Modal:

     ![Welcome Modal](assets/readme-files/welcome.png "Welcome Modal Wireframe")

- Home Page:

     ![Home Page](assets/readme-files/home.png "Home Page Wireframe")

Game Mode:

- Main Game Page:

     ![Main Game Page](assets/readme-files/game-mode.png "Game Mode Page Wireframe")

- Player Feedback for **correct** answer:

     ![Player Feedback for CORRECT answer](assets/readme-files/correct.png "Game Mode Player Feedback (Correct) Wireframe")

- Player Feedback for **incorrect** answer:

     ![Player Feedback for INCORRECT answer](assets/readme-files/incorrect.png "Game Mode Player Feedback (Incorrect) Wireframe")

Finished Page:

- With High Score:

     ![With High Score](assets/readme-files/hs.png "Finished with High Score Wireframe")

- Without High Score:

     ![Without High Score](assets/readme-files/no-hs.png "Finished without High Score Wireframe")

Form:

- ![Suggestions Form](assets/readme-files/form.png "Suggestions Form Wireframe")


<strong>5. <u>Surface</u></strong>


- <strong>Colour Scheme</strong>

     - The chosen colour scheme was specifically selected in order to define the tone of the application.

     - As the theme of the game is music related, the colour scheme mirrors the atmospheric setting of a music venue.

     - Drawing from research conducted on stage lights, two colour palettes were created for a day-to-night feature toggle:

          - Light (Day Mode):

               ![Light (Day Mode)](assets/readme-files/light-mode.png "Light Mode Colour Palette")

          - Dark (Night Mode):

               ![Dark (Night Mode)](assets/readme-files/dark-mode.png "DArk Mode Colour Palette")


- <strong>Typography</strong>

     - The primary font chosen is [Roboto](https://fonts.google.com/specimen/Roboto?preview.text_type=custom&query=roboto). A sans-serif typeface, Roboto is geometrically shaped and is easily readable.

     - The Secondary font (accent font) chosen is [Shadows into Light Two](https://fonts.google.com/specimen/Shadows+Into+Light+Two?preview.text_type=custom). A handwritten script typeface, it has rounded curves to emphasis a more playful and casual environment.

     - The charismatic combination of the two typefaces compliments the artistic aesthetic and entertaining theme set by the colour palette.

- <strong>Imagery</strong>

     - The imagery used was created by the developer using the application [Procreate](https://procreate.art/) in order to create a consistency of the elements while maintaining the look and feel of the application

[Back to top ⇧](#blank)

## Features

### Design Features
<dl>
  <dt><a href="index.html" target="_blank" alt=""> </a></dt>
  <dd>
     <ul>
          <li></li>
          <li></li>
     </ul>
  </dd>

 
### Existing Features
- 

### Features to Implement in the future
- 

[Back to top ⇧](#blank)

## Issues and Bugs 
The developer ran into a number of issues during the development of the websites, with the noteworthy ones listed below, along with solutions or ideas to implement in the future.

**Sliding Footer Bug** - A bug was detected in the sliding footer feature when being implemented. As the developer sourced and edited the code from [JSFiddle](http://jsfiddle.net/nathanbweb/JHu7j/), the problem lay in integrating that code with the original. The sourced code was overriding the html within the code and, as such, created problems with the graphics that were to be used. In order to fix this, the developer instead toggled the necessary classes and elements. In their research, the developer found a similar problem on [Stack Overflow](https://stackoverflow.com/questions/15345784/change-icon-on-click-toggle/15345885) where they then implemented this into their code, with success.

**Welcome Modal Bug** - On page load, the welcome modal appears allowing users to enter a username of choice. The problem with the modal was that, by default, clicking outside the modal area would close the modal and, as the modal was full-screen, it was possible for the user to click anywhere on the modal to close it. With this, the player could bypass the username entry, rendering it null. In order to fix this, the developer researched a method to disable this default, finding a solution on [Stack Overflow](https://stackoverflow.com/questions/22207377/disable-click-outside-of-bootstrap-modal-area-to-close-modal), whereby the modal would only close on click of the submit button (after filling out the required field). As well as this, there was an issue with the modal, whereby the modal would continue to refresh as the user entered their username. The reason for this was a conflict issue between the `data-dismiss` attribute and `localStorage`, where it would not register the name as a username, but dismiss the modal anyway. To rectify this, and to learn for future reference, the developer turned to [Slack](https://slack.com/intl/en-ie/) to get examples of previous methods. With this new knowledge, the developer was able to tackle the problem. They would like to extend their deepest gratitude to those fellow students.

[Back to top ⇧](#blank)

## Technologies Used
### Main Languages Used
- [HTML5](https://en.wikipedia.org/wiki/HTML5 "Link to HTML Wiki")
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets "Link to CSS Wiki")
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript "Link to JavaScript Wiki")

### Frameworks, Libraries & Programs Used
- [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/ "Link to Bootstrap page")
     - Bootstrap was used to implement the responsiveness of the site, using bootstrap classes.
- [Google Fonts](https://fonts.google.com/ "Link to Google Fonts")
    - Google fonts was used to import the fonts "Shaodows Into Light Two" and "Roboto" into the style.css file. These fonts were used throughout the project.
- [Font Awesome](https://fontawesome.com/ "Link to FontAwesome")
     - Font Awesome was used on all pages throughout the website to import icons (e.g. social icons) for UX purposes.
- [Git](https://git-scm.com/ "Link to Git homepage")
     - Git was used for version control by utilizing the GitPod terminal to commit to Git and push to GitHub.
- [GitHub](https://github.com/ "Link to GitHub")
     - GitHub was used to store the project after pushing
- [Figma](https://www.figma.com/ "Link to Figma homepage")
     - Figma was used to create the wireframes during the design phase of the project.
- [Am I Responsive?](http://ami.responsivedesign.is/# "Link to Am I Responsive Homepage")
     - Am I Responsive was used in order to see responsive design throughout the process and to generate mockup imagery to be used.

[Back to top ⇧](#blank)

## Testing

Testing information can be found in a separate testing [file](TESTING.md "Link to testing file")

## Deployment

This project was developed using [Visual Studio Code Insiders](https://code.visualstudio.com/insiders/ "Link to Visual Studio Code site"), committed to git and pushed to GitHub using the computer terminal.

### Deploying on GitHub Pages
To deploy this page to GitHub Pages from its GitHub repository, the following steps were taken:

1. Log into [GitHub](https://github.com/login "Link to GitHub login page") or [create an account](https://github.com/join "Link to GitHub create account page").
2. Locate the [GitHub Repository](https://github.com/rebeccatraceyt/KryanLive "Link to GitHub Repo").
3. At the top of the repository, select Settings from the menu items.
4. Scroll down the Settings page to the "GitHub Pages" section.
5. Under "Source" click the drop-down menu labelled "None" and select "Master Branch".
6. Upon selection, the page will automatically refresh meaning that the website is now deployed.
7. Scroll back down to the "GitHub Pages" section to retrieve the deployed link.
8. At the time of submitting this Milestone project the Development Branch and Master Branch are identical.

### Forking the Repository
By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log into [GitHub](https://github.com/login "Link to GitHub login page") or [create an account](https://github.com/join "Link to GitHub create account page").
2. Locate the [GitHub Repository](https://github.com/rebeccatraceyt/KryanLive "Link to GitHub Repo").
3. At the top of the repository, on the right side of the page, select "Fork"
4. You should now have a copy of the original repository in your GitHub account.

### Creating a Clone
How to run this project locally:
1. Install the [GitPod Browser](https://www.gitpod.io/docs/browser-extension/ "Link to Gitpod Browser extension download") Extension for Chrome.
2. After installation, restart the browser.
3. Log into [GitHub](https://github.com/login "Link to GitHub login page") or [create an account](https://github.com/join "Link to GitHub create account page").
2. Locate the [GitHub Repository](https://github.com/rebeccatraceyt/KryanLive "Link to GitHub Repo").
5. Click the green "GitPod" button in the top right corner of the repository.
This will trigger a new gitPod workspace to be created from the code in github where you can work locally.

How to run this project within a local IDE, such as VSCode:

1. Log into [GitHub](https://github.com/login "Link to GitHub login page") or [create an account](https://github.com/join "Link to GitHub create account page").
2. Locate the [GitHub Repository](https://github.com/rebeccatraceyt/KryanLive "Link to GitHub Repo").
3. Under the repository name, click "Clone or download".
4. In the Clone with HTTPs section, copy the clone URL for the repository.
5. In your local IDE open the terminal.
6. Change the current working directory to the location where you want the cloned directory to be made.
7. Type 'git clone', and then paste the URL you copied in Step 3.
```
git clone https://github.com/USERNAME/REPOSITORY
```
8. Press Enter. Your local clone will be created.

Further reading and troubleshooting on cloning a repository from GitHub [here](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository "Link to GitHub troubleshooting")

[Back to top ⇧](#blank)

## Credits 

### Content
- 

### Media
- 

### Code 
The developer consulted multiple sites in order to better understand the code they were trying to implement. For code that was copied and edited, the developer made sure to reference this with the code. The following sites were used on a more regular basis:
- [Stack Overflow](https://stackoverflow.com/ "Link to Stack Overflow page")
- [W3Schools](https://www.w3schools.com/ "Link to W3Schools page")
- [Bootstrap](https://getbootstrap.com/ "Link to BootStrap page")
- [JSfiddle](https://jsfiddle.net/ "Link to JSfiddle page")

[Back to top ⇧](#blank)

## Acknowledgements
- 

[Back to top ⇧](#blank)

***