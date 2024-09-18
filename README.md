# EditNow

## Description

EditNow is a browser-based text editor built as a single-page application (SPA) that meets all the Progressive Web App (PWA) standards. It can be used offline and uses multiple methods to save data, ensuring it works even if a browser doesn’t support one of the options.  The main way it stores data is through IndexedDB, simplified with the idb package.

## Key Features

- Single-Page Application (SPA): The text editor  runs completely in the browser, providing a smooth and fast experience.
- Progressive Web App (PWA): It works offline and can be installed on any device like a regular desktop or mobile app.
- Data Persistence: 
  - Uses IndexedDB to save and load text contents.
  - The `idb` package (used by Google and Mozilla) simplifies how we work with IndexedDB.
  - Includes backup methods to ensure the app keeps working even if IndexedDB isn’t supported by the browser.
- Offline Functionality: The text editor works perfectly even without an internet connection, using stored data and files.


## Technologies Used

- HTML5/CSS3: Basic web tools used to build and style the app.
- JavaScript (ES6+): Core logic for the functionality and interaction of the app.
- Webpack:A tool that bundles all the code and files, making the app run faster and smoother.
- IndexedDB with idb package: A system for saving data in the browser, with idb making it easier to use.
- Service Workers: Tools that allow the app to work offline and store important files.
- PWAs: Makes sure the app follows Progressive Web App rules, so it can be installed and used without an internet connection..

## Installation:
Clone the repository:
git clone https://github.com/Ifylee/editNow

**Install dependencies:**
To install dependencies:
```
Run npm install

```

**Run the app in development mode:** 
```
npm run start:dev

```

**Build for production:** 
```
npm run build

```

## Usage
Once the app is running, you can use it as a simple text editor in the browser. Here are some key features:

- Create and edit text: Start typing in the text editor area.
- Offline support: If you lose connection, the app will still be fully functional. When you go back online, your data will be synchronized.
- Data persistence: All text content is automatically saved using IndexedDB, so your work stays safe on your device.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing
Contributions are welcome!

## Contact
For more questions, please open an issue on my github: [ifylee](https://github.com/ifylee)

  You can also contact me directly at: [ifyekezie@yahoo.co.uk](mailto:ifyekezie@yahoo.co.uk)

This application is deployed on render, under the link below:


This README gives a clear guide for any project, including the main technologies used, how to install it, and how to use it.
