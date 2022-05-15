# Getting Started with the UVic AI Club Website

The website is designed to be the premier online resource for people interested in the club to learn about what we do, how we do it, where to find us, and to have fun while doing so. It's also meant to highlight our skills, feats, and professionalism by imbuing the website with high quality and exceptional user experience. You can see the deployed app at [http://uvicaiclub.ca](http://uvicaiclub.ca).

## Install the Project

In order to install the project, there are a few requirements. Installation is different depending on your operating system.

### Unix

If you are using a unix based machine (linux/mac), start by installing git by opening a terminal and inputing the following command:<br />
`sudo apt install git-all`

Navigate to where you want the project located. Input the following command:<br />
`git clone https://github.com/uvicaiclub/ai-club-website.git`

This will download the current website repository.

Navigate your terminal into the project folder:<br />
`cd ai-club-website`

Simply run the follow script from terminal:<br />
`sh ./linux-install.sh`

Project is now installed and ready to go!

### Windows

Make sure you install the following programs:

- Git: [https://git-scm.com/downloads](https://git-scm.com/downloads)
- Node.js: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

Open command prompt (or powershell) and navigate to where you want the project located.

Input the following command:<br />
`git clone https://github.com/uvicaiclub/ai-club-website.git`

This will download the current website repository.

Navigate your terminal into the project folder:<br />
`cd ai-club-website`

Run the following command to download all the necessary node modules: <br />
`npm install`

Project is now installed and ready to go!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

### `npm run deploy`

Installs serve globally (which is required to run the server) then deploys the production build at [http://localhost:3000](http://localhost:3000).

`sh ./linux-install.sh ; npm run deploy`

## Docker

The website can be containerized on docker. The easiest way to do this is to first install the Docker Desktop application.

To install Docker Desktop, visit [https://www.docker.com/products/docker-desktop/](Download Docker Desktop)

### Development Server

The website can be containerized on docker and run in a development environment in one of two ways.

First, make sure you first have VS Code installed on your system for compatability: [https://code.visualstudio.com/download](Download VS Code)

#### Open Container in VS Code

Open up VS Code and click on the green bar at the bottom left of the screen. Near the top of the screena list of options will appear, click on "Open in container"

OR

A prompt may appear in the bottom right to open the project in a container, click "Open in container".

Wait for the container to build and you're ready to go!

#### Create Container in Docker Desktop

Open up Docker Desktop and click on Dev Environments over on the left side of the screen.

Then click on Create or Create New Environment

Follow the prompts untill it asks for a Git Repository, input: `https://github.com/uvicaiclub/ai-club-website.git` and press continue.

Wait for the Docker to automatically create the dev environment, then click continue.

Click to open in VS Code and the development server should be ready to go!

### Local Image

A Docker image for the repository can be created and run locally with the following pipeline command:

`docker image rm -f ai-club-website ; docker build . -t ai-club-website ; docker run -p 3030:3000 -d ai-club-website`

## Web Analytics

Web stats are generated through [https://microanalytics.io/](Microanalytics.io) via a tracking script found in index.html
