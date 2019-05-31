# Template of base extension for VS Code
This repository holds a base template used for building extensions.  The core components are included, with recommended directory structure and a single command.

## Prerequisites

To run this extension the following is required:

* [Visual Studio Code](https://code.visualstudio.com/)
* [NodeJs](https://nodejs.org/en/)
* Typescript - `npm install typescript -g`

## Install and Run

To run the extension in debug mode run these steps:

* First install dependent packages - `npm install`
* Now compile the extension - `npm run compile`
* Start the extension in debug mode - Hit `<F5>` to start the extension in debug mode

## Package the extension

To release the extension, it must be packaged and tested:

* Package - `npm run package`
* Install the extension in a new VS Code instance
    * Open VS Code
    * Click on the box in the left navigatation to view extensions
    * Click the ellipisis in the top right (...) and select Install from VSIX, and install the VSIX package.