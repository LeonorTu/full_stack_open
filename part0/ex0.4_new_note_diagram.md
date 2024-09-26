```mermaid
sequenceDiagram
	participant browser
	participant server

	browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note with note data
	activate server

	Note right of browser: The browser sends the user input (note content) to the server as form data

	server-->>browser: 302 Found - Redirect to https://studies.cs.helsinki.fi/exampleapp/notes
	deactivate server

	Note left of server: The server processes the note, adds it to an in-memory array, and responds with a redirect to /notes

	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
	activate server
	server-->>browser: HTML document (notes page)
	deactivate server

	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
	activate server
	server-->>browser: CSS file
	deactivate server

	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
	activate server
	server-->>browser: JavaScript file
	deactivate server

	Note right of browser: The browser starts executing the JavaScript code to fetch the updated notes

	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
	activate server
	server-->>browser: JSON data with all notes, including the new note
	deactivate server

	Note right of browser: The browser processes the JSON data and renders the updated notes on the page