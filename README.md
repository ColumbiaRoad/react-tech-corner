# Columbia Road x Futurice Tech Corner

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/ColumbiaRoad/react-tech-corner)

You can find the latest documentation for CRA [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Before The Day

### MacOS
You need to install xcode command line tools (if you don't have xcode installed at all). You can get these by running `xcode-select --install` into your terminal prompt. This is ~500mb of data to download and Aarnet is not exactly a speed demon so please do this before the day.

Then, Install brew (a package manager for MacOS) found [here](https://brew.sh/). Copy and paste that command into your terminal and you should be away.

Next, you'll need to install [Node](https://nodejs.org/en/). You can either follow the link and download the LTS package (8.9.4 at time of writing) or you can run `brew install node` in your terminal prompt.

### Windows
I would recommend using glitch (for simplicity and ease of getting up and running), but if you would like to run this locally you can do it as follows:

- Ensure you have [git](https://gitforwindows.org/) installed on your machine by following the link and the installation steps.
- Ensure you have [node](https://nodejs.org/en/) installed on your machine by following the link and the installation steps.
- Use Git Bash for the next steps (as this allows us to use *NIX-style commands that will work across all operating systems).

### Linux
Since there are a millon ways to install anything on linux depending on your distro I'll leave installation steps out of this. If you're using Linux I'll assume you're comfortable with installing git and node. 

If you're not sure how to do that, remix this project on glitch and you won't need to worry about running things locally.

### Text Editors
Finally, you need to have a text editor so you can look at and edit the code. I (begrudgingly) recommend [Visual Studio Code](https://code.visualstudio.com/) which you can download by following that link or running `brew cask install visual-studio-code`. Other notable editors you might be interested in are [Atom](https://atom.io/), [Emacs](https://www.gnu.org/software/emacs/) and [Vim](https://github.com/vim/vim).

## On The Day
You're here, bright-eyed and ready to go. Now what?

### Installation
You need to get these files on your machine so you can run them. This is called "cloning" and you can do this with the following command:

`git clone https://github.com/ColumbiaRoad/react-tech-corner ~/Documents/React/tech-corner/`

This downloads all of the files (here) that Github is storing and sticks them in the folder `React/tech-corner` in your Documents.

Next, navigate to that folder using `cd ~/Documents/React/tech-corner/`

### Running

`npm install`

This will install React and some other packages _locally_ to this folder (So you're not cluttering your whole environment with a certain React installation).

`npm start`

This will open a browser window and run your React application. Congratulations, you made it! 🎉

### Tasks

The focus of the day is to present quotes from a certain "influential" figure (I'll leave it to you guys to figure out who 😉). The code handles the API calls, so you can assume that a list (string[]) of quotes is stored in the app state, retrievable as `this.state.quotes`

1. A `Quote` component has been created in `src/components/Quote.jsx`, but it isn't used anywhere. Your job is to import this component in `App.js` and pass a single quote from the `state.quotes` list as a prop (HINT: `this.state.selectedQuote` might help you choose a quote to send).

2. This project uses the Semantic UI library, which has some fancy looking buttons. Your next task is to import the `Button` component from `semantic-ui-react` and pass the `changeSelectedQuote()` function as a prop for the `onClick` listener.

3. You can open a new tab using `window.open('www.example.org', '_blank')`. I want you to add another (appropriately styled, you might want to add some css) button that sends an _intent_ to tweet the displayed quote. Documentation for the link to open can be found [here](https://dev.twitter.com/web/tweet-button)

Don't worry if this seems difficult at first glance! You're not expected to complete all of this, and there will be some React experts on hand to help out if you get stuck.


### CHALLENGE TASK
N.B - This task is intended for people who already have some experience with React and wan to be pushed a little. You're not expected to reach this point if you're looking at React for the first time.

[React DnD](https://react-dnd.github.io/react-dnd/) is a handy set of React higher order components that allow you to build drag and drop interfaces. We have included a couple of image assets named `trump-face.png` and `trump-mouth.png` (I hope you can see where we're going with this... 😄).

Your task is to allow the user to drag and drop the jaw around the page. When the user begins to drag the jaw, the quote should change (to simulate a new quote being spoken).

The following [example](https://react-dnd.github.io/react-dnd/examples-drag-around-naive.html) might be of use to you.

----
__psst__ if you want find out how these tasks look when done, you might want to check the branches of this repository.

