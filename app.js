// Function called while clicking add button
function add_item() {

    // Getting box and ul by selecting id;
    let item = document.getElementById("box");
    let list_item = document.getElementById("list_item");
    if(item.value != ""){

        // Creating element and adding value to it
        let make_li = document.createElement("LI");
        make_li.appendChild(document.createTextNode(item.value));

        // Adding li to ul
        list_item.appendChild(make_li);

        // Reset the value of box
        item.value=""

        // Delete a li item on click
        make_li.onclick = function(){
            this.parentNode.removeChild(this);
        }

    }
    else{

        // Alert msg when value of box is "" empty.
        alert("plz add a value to item");
    }

    }

 47  
index.html
Comment on this file
@@ -0,0 +1,47 @@
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <title>todo list</title>
    <link rel="stylesheet" href="style.css" />

    <!-- Latest compiled and minified CSS -->
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
  </head>

  <body>
    <div class="container">
      <h1 class="row">&nbsp;&nbsp;&nbsp; TODO APP &nbsp;&nbsp;&nbsp;</h1>
      <br /><br />
      <div class="row">
        <form class="form-inline col-sm-offset-3">
          <div class="input-group">
            <span class="input-group-addon">
              <i class="glyphicon glyphicon-pencil"></i>
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="todo-item"
              id="box"
              style="width: 30vw" />
          </div>
          <div class="form-group">
            <input
              type="button"
              class="btn btn-primary form-control"
              value="add"
              style="width: 10vw"
              onclick="add_item()" />
          </div>
        </form>
      </div>
      <div class="row">
        <ul id="list_item"></ul>
      </div>
    </div>
    <script type="text/javascript" src="app.js"></script>
  </body>
</html>
 33  
style.css
Comment on this file
@@ -0,0 +1,33 @@
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: cursive;
}

body {
  background: #f2f2f2;
  overflow: auto;
}

h1 {
  text-align: center;
  margin: 5%;
  font-size: 3rem;
  text-decoration: underline;
}

ul {
  text-align: left;
  padding-left: 10%;
  padding: 7%;
  font-size: 2rem;
  list-style: circle;
}

li:hover {
  color: red;
  margin: 4%;
  transition: 1.5s ease;
  cursor: pointer;
}
