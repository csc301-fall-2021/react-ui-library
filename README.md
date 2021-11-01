# CheaprEats (the Soupsons)

## Description

CheaprEats is a web application with a Voice User Interface (VUI). End-users make food orders through a voice activated system. The goal of the system is to enable food vendors and restaurants across university campuses — and ideally beyond — to offer contactless ordering options to their customers.

This serves as an accessible option to those who can't use alternative systems, and also a safe option in terms of public health in the current pandemic climate.

## Key Features

-   **VoiceButton** \
    On click, listens to user voice input.
    Button pulses to indicate it’s in a listening state.
    Green overlay on icon acts as volume indication.

-   **HighlightedText** \
    When user speaks, records their speech into text.
    Special words are highlighted. Upon click, a dropdown panel appears.
    When the dropdown a special word is opened, the special word is highlighted orange.
    As newer words are added, old words become less opaque

-   **OrderTracker** \
    Shows the current stage of the order that the customer is at (adding items to cart, checking out, awaiting delivery)\
    Bar animates from left to right in order to indicate transition of states.\
    Markers are used for each stage. Old markers become grey text; new markers become dark text.

## Instructions

As our partner is handling the deployment of the application, we have not yet reached the point where we have an MVP yet. \
Nonetheless, one can test components we have created via either the deployed Storybook to or cloning the repository and start Storybook locally.

For the former, you can use this [link](https://617f80a235eb4a003a1f095f-teungproxo.chromatic.com/) to access said site. \
For the latter, you can clone this repository, run `npm install` and then `npm start` to start Storybook to test our components.

Once you are on Storybook, navigate to the components we have built that you wish to test. You can change the arguments to see how our components change accordingly.

-   **VoiceButton** \
    In the Basic page: - When hovering the voice button in canvas, the button should turn grey. - When clicking the Microphone, there should be an Actions tab below that signals Button Click Occurred. - On the Controls tab, there should be many options to change the voice button accordingly. The below describes setting the values to those options and what should happen: - When we set disabled to be True, hovering should not change the button’s colour. - When we set isPulsing to be True, there should be a pulsing effect around the voice button. - We can set iconSize to be however pixels and the Microphone width and height should be equal to corresponding iconSize. - We can set volume to be a percentage lower than 100%. This makes the green overlay fill up the microphone to however input percentages. - We can change the name above the microphone by changing the name in children.

-   **HighlightedText** \
    A list of special and normal texts can be provided. Compared to the normal text, the texts whose isSpecial is set to true are bolded and will be highlighted upon being clicked. Each special text has a list of options that appear as a dropdown when the special text is clicked. A function can be attached to each dropdown item's onClick event. Props may be passed to the dropdown list and each dropdown item for each special text, so images may be added to each item, for example.

-   **OrderTracker** \
    Go to the page in which you want to do the testing: the Basic page is for a normal use while both NoText and LongText are for edge-case testing. You can change the size (e.g 10px, 3em, etc.), color of the texts and icons, and current state to see the change transition between states (from 0 to 1, 1 to 2, etc). \
    It is also possible to change the icons themselves by changing the arguments in `src/Container/OrderTracker/OrderTracker.stories.tsx` file.

## Development requirements

[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode "Prettier's Download Link") is required to develop CheaprEats components.

After installing Prettier, you can clone and start working on the repository.

## Deployment and Github Workflow

So far, we have been building upon a pre-existing repository for UI components that CheaprEats has made. When there is a new component requested, a new branch is created by those working on said component. The partner is responsible for reviewing the pull requests once each component has been created. If they are satisfied with the code quality, then they will allow merging to the main branch to occur. This is also to ensure there is not an error when merging from two different sets of codes.

Most of the naming conventions follow what has already been established by our partner. The branches are named with respect to the 'task id' of the roadmap provided by the partner to provide clarity.

As our partner is responsible for deploying the live application, we have not deployed anything yet. Instead, we are using Storybook (per the recommendation of our partner) to test and view our components at the time.\
We run `npm start` to start a local Storybook application.

The repository that the partner created is automated with Github Actions; every push is tested (including styling), and they will only be flagged as failed or success accordingly.

## Licenses

We have decided with our partner to apply the MIT license. This is so that the project can be open source, allowing codes to be changed, distributed and used freely.
