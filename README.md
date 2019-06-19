# BloggerDemo

Demo blogging app with admin, auth, signup, etc using MERN stack
<br>
MongoDB, Express, React, Node

# Start

Clone repo & `npm install`

# DB

In order to use you must sign up for [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
<br>

- Create a new cluster, select all default settings and make a name for it then 'Create Cluster'
- Click 'Database Access' then 'Add New User' and select the default settings.
- Click 'Connect'
- 'Connect Your Application'
- leave default settings and copy your Connection String
- in the `config` folder, create a new file `default.json`
- add your string like so:
  `{ "mongoURI": "mongodb+srv://<user>:<password>@app-name-blahblahblah" }`
  (`.gitignore` is set to not track this file)
- in `config` folder, `db.js` has the setup for your `mongoURI`

# Server

`nodemon server`
