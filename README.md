# Welcome to Flight And Search project
## Project setup
    - clone the project on your local machine
    - execute 'npm install' on the root directory of the project.
    - create one .env file on the root directory and add the following environment variable
        - PORT = 3000
    - on 'src/config' create a file config.json and the following piece of json code
        ------------------------
        {
            "development": {
                "username": "<your_db_username>",
                "password": "<your_db-password>",
                "database": "Flight_Search_Dev",
                "host": "127.0.0.1",
                "dialect": "mysql"
            }
        }
        ------------------------
    - once you have added you db config as listed above, go to 'src' folder from your terminal and eecute the command 'npx sequelize db:create'
## DB Design
    - Airplane Table
    - Flight Table
    - Airport Table
    - City Table
## Tables
### city -> id, name, created_at, updated_at
### airport -> id, name, address, created_at, updated_at, city_id
    Relationship -> city has many airports and airport belongs to a city (one to many relationship)