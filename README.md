markdown
Copy code

# Darbuka Assignment

This repository contains the assignment for Darbuka.

The repository is split into two modules: the client and the server.

## Server

The server utilizes TSOA, Express, and a Dockerized MongoDB.

## Client

The client is built using React bootstrapped by Vite, Redux, Tailwind CSS, and Ant Design.

## Installation

To run the project, you need Docker Desktop installed on your machine. If you haven't installed it yet, you can find installation instructions for your operating system below:

- [Installation instructions for macOS](https://docs.docker.com/desktop/install/mac-install/)
- [Installation instructions for Windows](https://docs.docker.com/desktop/install/windows-install/)
- [Installation instructions for Linux](https://docs.docker.com/desktop/install/linux-install/)

After installing Docker Desktop, follow these steps:

1. Install dependencies by running:
   `yarn install`

2. Run the Docker container using:
   `yarn docker`

(This might take a while the first time)

3. Finally, start the development server by running:
   `yarn dev`

## Usage

Once the server is up and running, you can access the application at [localhost:3000](http://localhost:3000/). Additionally, you can explore the Swagger documentation for the APIs at [localhost:5000/api-docs/](http://localhost:5000/api-docs/).
