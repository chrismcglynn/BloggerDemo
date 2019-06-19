# BloggerDemo

Demo blogging app with admin, auth, signup, etc using MERN stack :neckbeard:
MongoDB, Express, React, Node

:warning:

## As of now, there isn't a front end set up!

# Start

Clone repo & `npm install` :rocket:

# DB

In order to use you must sign up for [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
<br>

- Create a new cluster, use default settings and make a name for it then **Create Cluster**
- Click **Database Access** then **Add New User** and use the default settings.
- Click **Connect**
- **Connect Your Application**
- leave default settings and copy your **Connection String**
- go back to your code editor
- in the `config` folder, create a new file `default.json`
- add your string like so:
  ```
  {
    "mongoURI": "mongodb+srv://<user>:<password>@app-name-blahblahblah"
  }
  ```
  (`.gitignore` is set to not track this file)
- in `config` folder, `db.js` has the setup for your `mongoURI`

# Server

Run `nodemon server` :pray: and you'll get :fire: or :poop:

# Happy Hacking :beers:
