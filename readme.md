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
<li>Open VS Code and on the welcome page in the "Start" section select "clone repository"

