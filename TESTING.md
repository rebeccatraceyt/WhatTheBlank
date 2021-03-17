# Blank! - Testing 

[Main README.md file](README.md "Link to README file")

[View live project](https://rebeccatraceyt.github.io/WhatTheBlank/ "Link to Live project")

[View website in GitHub Pages](https://github.com/rebeccatraceyt/WhatTheBlank "Link to Blank! Repository")

***
## Table of contents
1. [Testing User Stories](#Testing-User-Stories)
2. [Manual Testing](#Manual-Testing)
3. [Automated Testing](#Automated-Testing) 
     - [Code Validation](#Code-Validation)
     - [Browser Validation](#Browser-Validation)
     - [Lighthouse Auditing](#Lighthouse-Auditing)
4. [User Testing](#User-Testing)

***

## Testing User Stories

#### Player Goals:
1. As a player, I want to choose my own username, to personalize my game-playing experience.
    - On entry of the site, if there is no username stored, the player will be presented with a welcome menu.
    - This menu prompts the user to enter the player name of their chose.
    - This name is then called on game-end to personalize the users gaming experience.
2. As a player, I want to intuitively navigate to game mode, to have an easy gaming experience.
    - When the user has entered their player name, they are directed to the home page, which displays the various categories available.
    - Users are prompted to **Choose A Category**. In doing so, they will then be directed to the category page of their choosing.
3. As a player, I want to have a clear score counter, to keep track of my score as I play.
    - The score counter is displayed in the heads-up-display of the game-play section. 
    - It is incremented by 1 each time the user selects the correct answer.
    - Players can watch their score go up as they progress.
    - The player's final score is then displayed in the game-end, allowing users to view their score and compare it to their high score in that category.
4. As a player, I want to have a clear time counter, to keep track of time elapsed.
    - The time counter is displayed in the heads-up-display of the game-play section.
    - The timer begins on page loads and measures the time elapsed in `seconds` for readability.
    - The player's final time is then displayed in the game-end.
5. As a player, I want to get visual/auditory feedback on answers I choose, to see whether they were correct.
    - As the player selects their chosen answer, one of two things occur:
        - If the answer is correct, the button turns green, visually signifying they are correct, and a sound plays, providing positive auditory feedback.
        - If the answer is incorrect, the selected button turns red and the correct answer turns green, providing visual feedback, with a more negative sound playing to provide the appropriate auditory response. 
6. As a player, I want to have the ability to toggle sound effects on or off, to suit my preference.
    - A mute button appears on all pages, conventionally placed in the `navbar` area of the top right corner.
    - There the user can choose whether they want to mute or un-mute.
    - This preference is then stored in the `sessionStorage`, to create a default setting for all pages.
7. As a player, I want to have to ability to choose the game theme (Day vs. Night Mode), to suit my preference.
    - Similarly to the mute button, the toggle function is placed in the top right corner.
    - With appropriate icons, the user can choose day or night mode.
    - This choice is then stored in the `localStorage` to become the default setting across all pages, and for future visits.
    - As well as this, if the user already has system theme preferences selected on the device they are using, the game will reflect that preference.
8. As a player, I want to view my highest session score.
    - When the player completes all questions, a condition determines the text they will be presented with:
        - If their score is the new high score, they will see the **New High Score** details, showing their score. This is then logged in `sessionStorage`.
        - If their score is less than the high score, they will see the **No High Score** details, showing their score, as well as the current high score.
9. As a player, I want to have the option to replay the game once I have finished to start again.
    - Once they have completed all questions, the player will be presented with the game-end text. 
    - No matter their score, the player will have the option to **play** again (or to **try** again), using an appropriate **redo** icon.
10. As a player, I want to provide suggestions to the developer to upgrade the game, enhancing my user experience.
    - In the footer, the user can access a suggestions form, allowing them to send a message to the developer.
    - Using **EmailJS**, the form is validated and will send a message to both the developer and the sender.
11. As a player, I want to connect with the developer on a social platform of my choosing to see their other projects.
    - In the footer, there are appropriate icons indicating the developers selected social platforms.
    - Conventionally, these links open in a new tab.


[Back to top ⇧](#Blank!---Testing)

## Manual Testing

### Common Elements Testing
Manual testing was conducted on the following elements that appear on every page:

- Hovering over the Navbar will trigger `hover` effect, confirming the link the users are on

     ![Navbar hover effect](assets/testing-files/gen-gif/navbar.gif)

- Hovering over Social links will trigger `hover` effect and clicking on them will open a new tab

     Facebook:

     ![Facebook Social link](assets/testing-files/gen-gif/facebook.gif)

     Instagram:

     ![Instagram Social link](assets/testing-files/gen-gif/instagram.gif)

     Twitter:

     ![Twitter Social link](assets/testing-files/gen-gif/twitter.gif)

     Spotify:

     ![Spotify Social link](assets/testing-files/gen-gif/spotify.gif)

     Apple Music:

     ![Apple Music Social link](assets/testing-files/gen-gif/apple-music.gif)

     Deezer:

     ![Deezer Social link](assets/testing-files/gen-gif/deezer.gif)

### Home Page
Manual testing was conducted on the following elements of the [Home Page](index.html):

- Clicking logo on left of screen will refresh the landing page

     ![Homepage Refresh](assets/testing-files/home-gif/home-logo.gif)

- Hovering over 'Out Now' link will create a `hover` effect

     !['Out Now' hover effect](assets/testing-files/home-gif/home-link.gif)

- On a mobile device, the hero image stacks on top of the other column for UX purposes

     ![Home page - mobile version](assets/testing-files/home-gif/home-mobile.png)

- The responsiveness of the Home page

     ![Home page responsiveness](assets/testing-files/home-gif/home-res.gif)

### Bio Page
Manual testing was conducted on the following elements of the [Bio Page](bio.html):

- Clicking the logo on the top left of the page will return the user to the Home Page

     ![Bio page to Home page](assets/testing-files/bio-gif/bio-logo.gif)

- Hovering over each accordion menu will trigger the `hover` effect and clicking the link within will open it in a new tab

     Jordo and 'the Legs':
 
     ![Accordion link opens in new tab](assets/testing-files/bio-gif/bio-accordion1.gif)

     The Scratch:

     ![Accordion link opens in new tab](assets/testing-files/bio-gif/bio-accordion2.gif)

     The Hit Machine Drummers:

     ![Accordion link opens in new tab](assets/testing-files/bio-gif/bio-accordion3.gif)

- On a mobile device, the hero image stacks on top of the other column for UX purposes

     ![Bio page - mobile version](assets/testing-files/bio-gif/bio-mobile.gif)

- The responsiveness of the Bio page

     ![Bio page responsiveness](assets/testing-files/bio-gif/bio-res.gif)

### Live Page
Manual testing was conducted on the following elements of the [Live Page](live.html):

- Clicking the logo on the top left of the page will return the user to the Home page

     ![Live page to Home page](assets/testing-files/live-gif/live-logo.gif)

- Hovering over the venue name will trigger a `hover` effect and clicking it will open the event page in a new tab

     ![Live page venue link](assets/testing-files/live-gif/live-venue.gif)

- Hovering over the ticket button will trigger a `hover` effect and clicking will open ticketing site in a new tab   

     ![Live page button link](assets/testing-files/live-gif/live-ticket.gif)

- Clicking on the map `iframe` embed will open the map in a new tab

     ![Live page map link](assets/testing-files/live-gif/live-map.gif)

- On a mobile device, the hero image stacks on top of the other column for UX purposes

     ![Live page - mobile version](assets/testing-files/live-gif/live-mobile.png)

- The responsiveness of the Live page

     ![Live page responsiveness](assets/testing-files/live-gif/live-res.gif)

### Press Kit Page
Manual testing was conducted on the following elements of the [Electronic Press Kit Page](epk.html):

- Clicking the logo on the top left of the page will return the user to the Home page

     ![Press Kit page to Home page](assets/testing-files/epk-gif/epk-logo.gif)

- Clicking the `next tab` icon on the carousel will allow the user to flick through the images

     ![Carousel image selection](assets/testing-files/epk-gif/epk-pics.gif)

- Hovering over the article link will trigger a `hover` effect and clicking will open article in a new tab

     ![Indie Buddie link](assets/testing-files/epk-gif/epk-link1.gif)

- Clicking on the IGTV `iframe` embed will open the video in a new tab

     ![IGTV video link](assets/testing-files/epk-gif/epk-link2.gif)

- Clicking on the Spotify `iframe` will allow the users to control the music playing in the embed

     ![Spotify embed](assets/testing-files/epk-gif/epk-link3.gif)

- Hovering over the Booking Agent's name will trigger a `hover` effect. On click will lead users to a `mailto` platform

     ![Mailto Hover effect](assets/testing-files/epk-gif/epk-mail.gif)

- When filling out the contact form, the user must complete all fields

     ![Contact form required fields](assets/testing-files/epk-gif/epk-form.gif)

- On a mobile device, the hero image stacks on top of the other column for UX purposes

     ![Press Kit page - mobile version](assets/testing-files/epk-gif/epk-mobile.gif)

- The responsiveness of the Electronic Press Kit page

     ![Press Kit page responsiveness](assets/testing-files/epk-gif/epk-res.gif)

[Back to top ⇧](#Kryan-Live---Testing)

## Automated Testing

### Code Validation
The [W3C Markup Validator](https://validator.w3.org/) service was used to validate the `HTML` code used.

**Results:**

- Home Page

     ![Home Page HTML Validation Results](assets/testing-files/automated/home.png)

- Bio Page

     ![Bio Page HTML Validation Results](assets/testing-files/automated/bio.png)

- Live Page

     ![Live Page HTML Validation Results](assets/testing-files/automated/live.png)

- Electronic Press Kit Page

     ![EPK Page HTML Validation Results](assets/testing-files/automated/epk.png)

The [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) service was used to validate the `CSS` coded used.

**Results:**
![Style sheet validation results](assets/testing-files/automated/style.png)

### Browser Validation
- Chrome - [test image](assets/testing-files/automated/chrome.png)
- Safari - [test image](assets/testing-files/automated/safari.png)
- Edge - [test image](assets/testing-files/automated/edge.png)
- Opera - [test image](assets/testing-files/automated/opera.png)
- Firefox - [test image](assets/testing-files/automated/firefox.png)

### Lighthouse Auditing
- Click [here](assets/testing-files/automated/lighthouse.pdf) for full report
- No recommendations in this report have been implemented in the first release but will be looked into for future releases.

[Back to top ⇧](#Kryan-Live---Testing)

## User testing 
Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues. Their helpful advice throughout the process led to many UX changes in order to create a better experience. 

It was through this testing that the following changes were made:
- Change to the Navbar background color on mobiles in order for the toggler menu icon to more distinguishable to the background image.
- Change to Navbar font-size on mobile for clearer reading.
- Complete overhaul of Live page in order to display the information in a more user-friendly way.

[Back to top ⇧](#Kryan-Live---Testing)

***