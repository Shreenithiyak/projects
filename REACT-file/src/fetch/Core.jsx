import {  useContext } from "react";
import Create from "../Usecontext/Create";


const Core = () => {
   const {change,checkchange}=useContext(Create)

  return (
    <>
    <div style={{ padding: "20px", lineHeight: "1.8" }}>
      <h1>Core Concepts Explanation</h1>
     <button className={!change ? "bg-black text-white h-screen" : "bg-white text-black h-screen"}onClick={checkchange}>
      <p>
        1. Local Storage: Local storage is a browser feature used to store data
        permanently in the user's browser. Even if the page is refreshed or the
        browser is closed, the data will still remain. It stores data in key and
        value format, but only strings are allowed, so we use JSON.stringify to
        store objects. Example: saving user login details.
      </p>

      <p>
        2. Cookies: Cookies are small pieces of data stored in the browser and
        sent to the server with every request. They are mainly used for
        authentication and tracking user sessions. Cookies have an expiration
        time and are limited in size. Example: remembering logged-in users.
      </p>

      <p>
        3. Session Storage: Session storage is similar to local storage, but the
        data is only stored for a single browser tab session. Once the tab is
        closed, the data is removed. Example: storing temporary form data.
      </p>

      <p>
        4. JSON.parse and JSON.stringify: JSON.stringify converts a JavaScript
        object into a string so it can be stored or sent to a server. JSON.parse
        converts that string back into an object so it can be used in JavaScript.
        Example: storing user object in local storage.
      </p>

      <p>
        5. Fetch and Query String: Fetch is used to make API calls to get or send
        data. A query string is extra data sent in a URL using key-value pairs,
        like ?name=shree&age=21. Example: searching or filtering data from a
        server.
      </p>

      <p>
        6. useState and useEffect: useState is a React hook used to store and
        manage data in a component. When the state changes, the UI updates.
        useEffect is used to perform side effects like API calls, timers, or
        updating the DOM after rendering. Example: fetching data when the page
        loads.
      </p>

      <p>
        7. Key Props in map: When rendering a list using map in React, each item
        must have a unique key. This helps React identify which items changed,
        added, or removed, improving performance. Example: rendering a list of
        users.
      </p>

      <p>
        8. API: API stands for Application Programming Interface. It allows
        communication between frontend and backend. The frontend sends a request
        and the backend sends a response, usually in JSON format. Example:
        fetching user data from a server.
      </p>

      <p>
        9. HTTP and HTTPS: HTTP is a protocol used for communication between
        client and server. HTTPS is the secure version of HTTP that encrypts the
        data for safety. Example: HTTPS is used in online payments to protect
        user data.
      </p>

      <p>
        10. DOM Selectors and Functions: DOM (Document Object Model) represents
        the structure of a webpage. Selectors like getElementById and
        querySelector are used to access elements. Functions allow us to modify
        content, styles, or attributes dynamically. Example: changing text or
        color of an element.
      </p>

      <p>
        11. Parameters and Arguments: Parameters are variables defined in a
        function, while arguments are the actual values passed when calling the
        function. Example: function greet(name) is parameter, greet("Shree") is
        argument.
      </p>

      <p>
        12. Form name and value attributes: In forms, the name attribute is used
        to identify the input field, and the value attribute holds the actual
        data entered by the user. These are important when sending data to the
        backend. Example: login form input fields.
      </p>

      <p>
        13. Axios, URL, UTF: Axios is a library used to make API requests easily.
        A URL is the address used to access resources on the internet. UTF-8 is a
        character encoding standard that ensures text (including different
        languages and emojis) is displayed correctly. Example: fetching data from
        a URL using axios.
      </p>
    
     </button>
     </div>
   </>
  )
  
};

export default Core;