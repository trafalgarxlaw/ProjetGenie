# INF6150 dockers

## IMPORTANT

This is the following docker architecture for the project.

```bash
.
├── angular
│   ├── docker-compose.yml
│   └── Dockerfile
├── docker-compose.yml
├── dockers.md
├── flask
│   ├── docker-compose.yml
│   └── Dockerfile
└── README.md

```

The main `docker-compose.yml` file at the root of the project is here to build the FrontEnd and BackEnd docker with link for api communication. Hot reload works fine.

The `docker-compose.yml` files in the `angular` and `flask` folder are here to help the FrontEnd and BackEnd team to develop with hot reload. Those two setups are independant and do **NOT** provide communication between dockers.

Run the full project : 

```bash
# inf6150-projet/
docker-compose up --build
```

To run the FrontEnd or the BackEnd :

```bash 
# inf6150-projet/angular/ or inf6150-projet/flask/
docker-compose up --build
```

## Docker container names

- `docker ps -a` : List all docker containers.

For the FrontEnd :

- `inf6150-frontend` : Hot reload.
- `inf6150-frontend-linked` : Linked to the Backend.

For the BackEnd :

- `inf6150-backend` : Hot reload.
- `inf6150-backend-linked` : Linked to the FrontEnd.

## Dependencies

- `docker`

- `docker-compose`

## Create docker image

**This command is only required once !**

Run the following command :

`docker-compose up --build`

This command is creating the docker image in which the project will be running.

## Run the project in docker

Run one of following command :

- `docker-compose up`

- OR

- `docker-compose up -d` : `-d` launch the project in a detached state

Those commands run the project inside the previously build image.

The page is avaible on `localhost:4200`.

## Frontend

### Add npm package

To add any npm package you have two solutions :

1. You have npm and Angular Cli installed :

    - Run `npm install <package name>`

2. You don't have npm or Angular Cli installed :

    - Run `docker exec -it inf6150-frontend bash`
    - Run `npm install <package name>`
    - Run `exit`

If you are using the second solution, those command open the docker image you created before with a `bash` where all the needed dependencies are available.

**The `inf6150-frontend` is the name of the docker image, run `docker ps -a` to see the name of the image**

### Execute an Angular command

To execute an Angular command you have two solutions :

1. You have npm and Angular Cli installed :

    - Run `ng <command>`

2. You don't have npm or Angular Cli installed :

    - Run `docker exec -it inf6150-frontend bash`
    - Run `ng <command>`
    - Run `exit`

If you choose the second solution and generated any files, those files are created as a root user, you want to change the ownership of those files ! 

- `chown -R $USER:$USER <folder>`

## Restart docker container

The project is running inside the docker container named `inf6150-frontend` by default !

Run `docker restart inf6150-frontend`.

The `restart` command can be replace by :

- `start`
- `stop`
