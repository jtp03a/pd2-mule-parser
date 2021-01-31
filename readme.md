<h1>Setup</h1>
<ol>
<li>Go to https://nodejs.org/en/download/ and install node.js for your operating system
<li>Go to https://code.visualstudio.com/ and install VS Code for your operating system
<li>Go to https://git-scm.com/downloads and install git for your operating system
<li>Go to https://www.mongodb.com/cloud/atlas/signup and create a free mongoDB atlas account
<li>On the "Lets get your account setup" page set a name for your organization and project. Select javascript for the preferred language
<li>Select the free shared cluster option on the "Choose a path" page
<li>Select a cloud provider and a region on the "Create a Starter Cluster page", Make sure you have "M0 Sandbox" with a base price of "Free Forever" selected for your "Cluster Tier", Click "Create Cluster"
<li>Once the Cluster has finished creating click the "Connect" button. The page will tell you that you need to setup your firewall access. Click the option "Allow Access from Anywhere"
<li>Leave the IP address as 0.0.0.0/0 and click "Add IP Address"
<li>In the "Create a Database User" section set your username and password as you desire. Click the "Create a Database User" button
<li>Click "Choose a connection method". On the next screen select "Connect your application"
<li>Copy the connection string into a notepad (or something to keep note of it for later steps) replacing the < password > portion (including the < >) with the password you setup on step 10 and replacing < dbname > portion with pd2mules (or whatever you want to call the database your mule data will be inserted into)
<li>It should look something like: mongodb+srv://mydbUser:mypassword@cluster0.abcde.mongodb.net/pd2Mules?retryWrites=true&w=majority
<li>Click close
<li>Open VS Code and on the welcome page in the "Start" section select "clone repository" and copy the paste the url for this repository into the blank, hit enter and select/create a folder to copy the repository into
<li>Open the repository in VS Code
<li>In the top bar select "Terminal" -> "New Terminal"
<li>In the terminal window type the command "npm install" and hit enter, wait for the install process to finish
<li>In the root folder of the repository create a new file called .env (make sure to include the . and the beggining)
<li>Open the .env file and add the following code: MONGODB_URL=Replace with the connection you copied earlier from your mongodb account (make sure to save the file after adding the connection string)
<li>In the terminal window type the commmand "npm start" and hit enter (If the server started correctly you will see mongoDB connected... displayed in the terminal)
<li>Right click on the "frontend" folder located in the root of the repository and select "Open in integrated terminal"
<li>In the new terminal window type the command "npm install" and hit enter, wait for the install process to finish
<li>In the terminal window type the command "npm start" (If the application started correctly a browser window will open displaying the app. You can also manually navigate to the application by typing http://localhost:3000 in your browser as the URL)
</ol>
<h1>Usage</h1>
<ol>
<li>Once the app is running in your browser click the "Choose Files" button and navigate to your Diablo II install directory then "ProjectD2" and then the "stash" folder (You have to have enabled JSON export in the PD2 settings in game first to have any mule files)
<li>Select all your character files in this folder with Ctrl or Shift Click
<li>When the import has finished a list of your character files will appear in the "Mules" Column. You can click each list item to see all the items that character has on it. You can also click the items to see a detailed view of its stats
<li>To search for an item type the full or partial name of the item in the "Search" section input box and hit enter. A list of the found items and the character they are located on will appear. You can click the item to see a detailed view.
<li>As your items on your characters change you will need to re-import them into the database with the same process as above
</ol>
<h1>Features in Progress</h1>
<ul>
<li>Full web hosted application with user login
<li>Search for items by other paramters. i.e get all 1h weapons, get all head slot items etc.
<li>Compare Items
<li>Generate a trade list
<li>Clean formatting of item stats (Long description displayed instead of key names)
<li>Styling and colors
</ul>



