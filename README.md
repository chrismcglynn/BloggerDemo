# BloggerDemo
Demo blogging app with admin, auth, signup, etc using MERN stack

# Start
Clone repo & npm install

# DB
In order to use you must sign up for [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
<br>
Create a new cluster, select all default settings and make a name for it then 'Create Cluster'
<br>
Click 'Database Access' then 'Add New User' and select the default settings.
<br>
Click 'Connect'
<br>
'Connect Your Application'
<br>
leave default settings and copy your Connection String
<br>
in the config folder, create a new file default.json
<br>
add your string like so:
<br>
{
  "mongoURI": "mongodb+srv://<user>:<password>@app-name-blahblahblah"
}
<br>
(.gitignore is set to not track this file)
<br>
in config folder, db.js has the setup for your mongoURI

# Server
npm start server
