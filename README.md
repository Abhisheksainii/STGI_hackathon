# STGI_hackathon
CO-CREATE

Project background and description


Co-create is your dynamic online platform for seamless collaboration and instant sharing of documents. Inspired by the convenience of Google Docs, Co-create takes it further by allowing you to co-create and update content together in real time. Experience the power of live synchronisation and effortless collaboration with anyone who has access to your document.
 
The Tech stack used in making of this solution is –
1.   	UI Development – HTML,CSS and React.
2.   	Backend – Node.js, Express.js and Web sockets.
3.   	Packages – useState, useLocation, React-router DOM, Axios and socket-io.
 
-         Web sockets were used for bidirectional communication between client-side and server-side, thus providing real-time data updates.
-         Node and Express were used for handling the API routes (mainly GET and POST).
-         React framework was used for state management ( useState package) and providing real-time UI updates without the user having to refresh the page.

Flow of the App

1.   Initial Page:
-         The initial page prompts the user to enter their current username, and utilise the react-router-dom packages and the useLocation feature of React to pass this value as a parameter to the next page.
2.   The Input Page (Post field demo):
-         On this page, the name parameter is received and assigned to the current-name variable using the use-State hook.
-         Different input fields are arranged to capture input in the form of text and files.
3.   The Real Time Page:
-       The socket.io client package is used to manage event emissions and handle event handlers. The corresponding event is transmitted to the backend server via the socket.emit property, including the value, and the event is received using the socket.on property with the respective value.
-     Subsequently, local variables are updated based on the received values. Finally, three local variables are employed to present the data on the user interface with real-time updates.
