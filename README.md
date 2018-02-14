# React
Repository to test react codes


# Install node_modules:

npm install

# Install webpack globally:

sudo npm install -g webpack@1.12.13

# Start the server:

node server.js

# Manually update the content of the files:
(move the data from app.js to bundle.js)
(this is used while webpack.config.js isn't installed)

webpack ./public/app.js ./public/bundle.js

# Update files with webpack:

webpack

# Running webpack without closing:
## (In this case you can leave this command in a terminal tab and execute the server in another.)

webpack -w