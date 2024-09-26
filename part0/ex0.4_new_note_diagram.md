```mermaid
sequenceDiagram
	participant browser
	participant server

	browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
	activate server

	Note right of browser: The browser sends the user input (new note) to the server

	server-->>browser: Redirect to https://studies.cs.helsinki.fi/exampleapp/notes
	deactivate server

	Note left of server: The server processes the new note, adds it to nodes array, and responds with a redirect to https://studies.cs.helsinki.fi/exampleapp/notes

	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
	activate server
	server-->>browser: HTML document
	deactivate server

	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
	activate server
	server-->>browser: the CSS file
	deactivate server

	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
	activate server
	server-->>browser: the JavaScript file
	deactivate server

	Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the servber

	browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
	activate server
	server-->>browser: JSON data with all notes, including the new note
	deactivate server

	Note right of browser: The browser executes the callback function that renders the updated notes on the page