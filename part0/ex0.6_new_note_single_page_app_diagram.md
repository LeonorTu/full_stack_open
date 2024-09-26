```mermaid
sequenceDiagram
	participant browser
	participant server

	browser->>server: POST /https://studies.cs.helsinki.fi/exampleapp/new_note_spa
	activate server
	Note right of browser: JavaScript sends the new note data as JSON data

	server-->>browser: Note stored
	deactivate server