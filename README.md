Hosted project link: https://ttt-project.vercel.app/

<span style="font-size: 900px; font-weight: bold;font-family: Cambria Math;"><h1> 𝐑𝐞𝐚𝐜𝐭-𝐂𝐡𝐚𝐫𝐭 </h1></span>

Visualizing Text Data with graphs using Chart.js

<h2> Components </h2>

- Home.js
- Hist.js 
- Header.js 
- Footer.js

<h2> Description </h2>

The Home component contains a button that navigates to the Hist component. The main and most important component of this project is Hist.js. It fetches text data from an external source and generates a histogram chart using the Chart.js library. It displays the top 20 words based on their frequency of occurrence in the text data. The chart can be downloaded as a CSV file.

<h2> Libraries and Plugins </h2>

- React: A popular JavaScript library for building user interfaces.
- Chart.js: A JavaScript library for creating charts and graphs.
- chart.js/auto: A Chart.js package that automatically installs and registers all chart types and plugins, making it easier to use.
- useRef: A React hook that creates a reference to a DOM element.
- useState: A React hook that allows you to add state to your functional components.
- useEffect: A React hook that allows you to perform side effects in your components, such as fetching data or manipulating the DOM.
- Blob: A JavaScript object that represents raw data and allows you to create and download files from the browser.
- URL: A JavaScript object that provides utilities for working with URLs.
- Fetch API: A modern JavaScript API for fetching resources over the network 

<h2> Code Functionality </h2>

- The 'fetchData()' function is called when the component mounts using the useEffect hook. It fetches data from a URL and sets the state of the component with the text data, filtered to remove empty lines.
- The 'useEffect' hook with the data dependency creates a Chart.js chart using the canvas element with the ID "histogram". The chart data is derived from the state data, by counting the occurrence of each word in the text and selecting the top 20 words. The chart is then rendered with labels, datasets, and options such as the chart title and legend.
- The 'downloadCSV()' function is called when the export button is clicked. It creates a CSV file containing the chart data, creates a blob with the file contents, and generates a URL for the blob. Finally, it creates a download link with the URL and clicks it to start the download.
  
<h2> How to run on your device ? </h2>

- Clone the repository to your local machine: git clone https://github.com/akr20/TTT_project.git
- Install the required packages using NPM: npm install
- Start the server: npm start
- Visit http://localhost:3000 in your web browser to access the website.
  
<h2> Visit the Deployed Project </h2>

To access the live version of the project, simply click on the link below.

https://ttt-project.vercel.app/

<h2> Get a preview of React-Chart project </h2>

![image](https://github.com/AKR20/TTT_project/assets/95629408/37952b41-2f2f-4e1c-bd65-8d19affdd7c4)

![image](https://github.com/AKR20/TTT_project/assets/95629408/a6962482-2c5f-4caf-83d5-7adab8d9aac3)

  
  
  
