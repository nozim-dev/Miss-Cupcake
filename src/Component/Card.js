// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
// </head>
// <style>
//         #candidate {
//             border-radius: 20%;
//             border-color: aquamarine;
//             box-sizing: border-box;
//         }
         
//         .buttonClass {
//             border-radius: 20%;
//             border-color: aqua;
//             border-style: inherit;
//         }
         
//         button:hover {
//             background-color: green;
//         }
//     </style>
// <body>
// <ul id="list"></ul>
 
//  <input type="text" id="candidate" />
//  <button onclick="addItem()" class="buttonClass">
//  Add item</button>
//  <button onclick="removeItem()" class="buttonClass">
//  Remove item</button>

//  <script>
//      function addItem() {
//          var a = document.getElementById("list");
//          var candidate = document.getElementById("candidate");
//          var li = document.createElement("li");
//          li.setAttribute('id', candidate.value);
//          li.appendChild(document.createTextNode(candidate.value));
//          a.appendChild(li);
//      }

//      // Creating a function to remove item from list
//      function removeItem() {

//          // Declaring a variable to get select element
//          var a = document.getElementById("list");
//          var candidate = document.getElementById("candidate");
//          var item = document.getElementById(candidate.value);
//          a.removeChild(item);
//      }
//  </script>
// </body>
// </html>