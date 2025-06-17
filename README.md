
Project Name: “SK Portfolio”

￼![Pasted Graphic 1](https://github.com/user-attachments/assets/cc566db6-a006-42aa-a9be-f6e699079caf)


- Description:
Portfolio of Sun Kim that contains information about both his personal and career life and his achievements throughout the Boston University Software Development program. The website navigation allows the user to click through different sections of the portfolio including biography, projects, resume, photo gallery, and a way to get contacted if users are interested in connecting further. You will be able to find interesting facts and key information about Sun Kim as you check out the website!

- Requirements & Installation

To run this project locally, you will need:
	•	A modern web browser (e.g. Google Chrome, Microsoft Edge, Safari)
	•	A code editor or IDE (e.g. Visual Studio Code)
	•	Node. Js and npm installed on you system

Note: This website is currently hosted on a public domain in the following link: https://sunkim0602.github.io/CS601_FinalProject_Kim/. 
To view it via IDE, you must clone or download the project folder (CS601_HW6_Kim) and run it locally using an IDE and terminal.

If you haven’t already installed Node.js:
1. Visit https://nodejs.org/en/download and download the appropriate installer for your OS.
2. After installation, open your terminal or the Integrated Terminal in your IDE
3. Verify installation by running:
node -v
npm -v

Install Dependencies:
1. Navigate into the project folder:
cd CS601_HW6_Kim
2. Install project dependencies
npm install

If your project uses Create React App:
npm start
If your project uses Vita (recommended for faster builds):
npm run dev

If you’re starting a new React app:
npx create-react-app my-app
cd my-app
npm start

If you’re using Vita instead:
npm create vite@latest
Choose React > JavaScript
cd my-app
npm install
npm run dev    

Setting up TypeScript:
1. Install Node.js and npm
Download and install Node.js from: https://nodejs.org/en/download
2. Verify installation
Open your terminal or your IDE’s Integrated Terminal, then run:
node -v
npm -v
If installed successfully, these commands will return the version numbers of Node.js and npm.
3. Initialize the project
If your project doesn’t already have a package.json file, run:
npm init -y
This will create a basic package.json file
4. Install TypeScript locally
Run the following commands to install the TypeScript compiler:
npm install typescript —save-dev
5. Create or configure reconfigure.json
To generate a tsconfig.json file, run:
npx tsc —init
6. Update the compiler options
In your tsconfig.json, ensure the following settings are configured
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ES6",
    // other settings...
  }
}    


- Technologies Used: HTML5, CSS3, JavaScript, TypeScript, Node.js, npm, React

- Key features of the code


	•	Navigation using React - website can be navigated via the Header or the Footer section. A separate component for the navigation is created and is linked to each of the pages in the main application via dynamic routing and the React Router. This allows a seamless navigation between the home page and individual section pages. Furthermore, the URL is configured so that it uses the section name to generate a unique URL based on the title of the page. This allows the user to know which page they are on as well as easily remember the URL link to navigate between pages.
￼![Pasted Graphic](https://github.com/user-attachments/assets/59929b97-0323-4ef2-a0c3-373c6e2cb872)


	⁃	Users will see the navigation bar at all times when visiting between the pages. The bar layout will also adjust based on the screen size as the user enlarge/reduce the size of the browser or visits the site through a different device (eg. Mobile, tablet). Once the size reaches a certain size minimum, the bar will turn into a hamburger menu for the user to access the bar and makes it more user friendly rather than squeezing everything in one view. 
￼![1__#$!@%!#__Pasted Graphic 1](https://github.com/user-attachments/assets/225e4e8d-d8f7-411d-ba29-3f5a712d731b)
![Pasted Graphic 2](https://github.com/user-attachments/assets/15f413f0-3bad-48eb-88e5-fd36560e3331)

￼

	•	Images  - The css was updated in the photo gallery section to allow the photos by setting both height and width to ‘auto’ to adjust based on its original sizes. Because each photo differ in it’s width and height, configuring them to a set number would distort the images that does not match the original size. Additional effects were added to each of the images by giving it a transition where the images enlarge slightly when mouse is hovered over. This shows the user which image is selected and is in focus. 
￼![Pasted Graphic 3](https://github.com/user-attachments/assets/0e95399a-4de1-434b-970e-6200d9b9eb8d)


	•	Drag & Drop feature - When submitting a Contacts form, users also have the ability to share their work to send along with them form (resume, projects, etc.). The Drag & Drop feature (DragStart, DragOver, DragLeave, etc.) is used here to make it easy for users to simply drop the files into the appropriate section and enhance the usability of the form. Or they have the option to upload the file through the openFileDialog function and selecting the files manually. Once the file is uploaded, users can also remove the file from the upload through the drag feature by clicking on the item and dragging outside of the section. 
￼![Pasted Graphic 4](https://github.com/user-attachments/assets/ae6d9695-0f28-4c49-9419-2ce7e48f3f67)


	•	Geolocation feature - When users first visit the site, they will see a greeting message noting the city and country of the user’s location. This is achieved by the geolocation function and obtaining the user’s approximate location data from an external API (ipapi). This is an interactive way to make the user feel more engaged and connected when visiting the website. 
￼![Pasted Graphic 5](https://github.com/user-attachments/assets/defbdc0d-1715-4140-abab-c94386e57fbe)


	•	CSS Flexbox or CSS Grid Layout: Each of my file incorporates either a Flexbox or Grid Layout method in its CSS. I used the Flexbox when I had arranged the content of my site in a certain direction (row or column) or the size of the items can be flexible. These files includes the photos, navigation, contact form, biography section. I used the Grid Layout when I had arranged the content of my site in two dimensions and wanted more control of the layout. For example, the home page uses a grid layout as the contents on the page are not in any specific pattern but in specific areas that I had placed them in. 
![1__#$!@%!#__Pasted Graphic 2](https://github.com/user-attachments/assets/32654c87-b38b-44a9-9aa9-6a47b24e47b9)
![1__#$!@%!#__Pasted Graphic 3](https://github.com/user-attachments/assets/674c73be-7f5a-4290-b5cd-85430fc96929)
![1__#$!@%!#__Pasted Graphic 5](https://github.com/user-attachments/assets/e30ad8ab-1166-49ac-a207-68f057d0af2f)
![1__#$!@%!#__Pasted Graphic 5](https://github.com/user-attachments/assets/e5d65495-35b5-4ca1-8197-997da0d276ed)



- Citation (images used):

- Hobbies photo - workout & exercise: https://www.news-medical.net/health/How-Do-Your-Body-and-Mind-Change-When-You-Start-Running.aspx
- Hobbies photo - golf: https://en.wikipedia.org/wiki/Golf#/media/File:Golfer_swing.jpg
- Hobbies photo - music: https://edmmaniac.com/female-djs-study/

