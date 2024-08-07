# CampMitra

![Image 1](https://raw.githubusercontent.com/JayveerRathwa/CampMitra/main/screenshots/home.png)  

CampMitra is a website where users can create and review campgrounds. In order to review or create a campground, you must have an account.

This project was created using Node.js, Express, MongoDB, and Bootstrap. Passport.js was used to handle authentication.  

## Features
* Users can create, edit, and remove campgrounds
* Users can review campgrounds once, and edit or remove their review
* User profiles include more information on the user (full name, email, phone, join date), their campgrounds, and the option to edit their profile or delete their account

## Run it locally
1. Install [mongodb](https://www.mongodb.com/)
2. Create a cloudinary account to get an API key and secret code

```
git clone https://github.com/JayveerRathwa/CampMitra.git
cd CampMitra
npm install
```

Create a .env file (or just export manually in the terminal) in the root of the project and add the following:  

```
CLOUDINARY_CLOUD_NAME = '<cloudname>'
CLOUDINARY_KEY = '<cloudinarykey>'
CLOUDINARY_SECRET = '<cloudinarysecret>'
MAPTILER_API_KEY = '<mapapi>'
DB_URL='<url>'
```

Run ```nodemon app.js``` in the terminal with the project.  

Then go to [localhost:3000](http://localhost:3000/).
