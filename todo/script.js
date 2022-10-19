// TITON TODO SCRIPT BETA
// https://app.titondesign.xyz/todo
   
   // Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
    var marks = document.getElementsByTagName("LI")
var selected; // selected task number
var daynum; // selected day number (1-7)
var i;
    
    var check = document.getElementsByTagName("LI")
check.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
      ev.style.outline = "red 2px solid";
    ev.oncontextmenu = "window.alert('test');";
  }
}, false);
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    var check = document.getElementById('tasklist');

    check.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
     ev.target.classList.toggle('checked');
    var div = this.parentElement;
      //ev.style.outline = "#0e68f4 2px solid";
 }
}, false);
  }
}
for (i = 0; i < marks.length; i++) {
  marks[i].onclick = function() {
    var div = this.parentElement;
    var check = document.getElementById('tasklist');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    div.style.outline = "#0e68f4 2px solid";
  }
}, false);
  }
}
// Add a "checked" symbol when clicking on a list item

function nodeIndex(el) {
    var i=0;
    while(el.previousElementSibling ) {
        el=el.previousElementSibling;
        i++;
    }
    return i;
}
function selectDay(day) {
  daynum = Number(day.getAttribute("day-id")) + 1
  
 for (i=0;i<7;i++) {
   const elr = document.querySelector(`[day-id="${i}"]`);
   elr.style.opacity = "0.8";
    elr.style.color = "#fff";
 }
  day.style.color = "#67b2ff";
   day.style.opacity = "1";
  console.log(daynum);
  localStorage.setItem("daynum", daynum)
}
// Create a new list item when clicking on the "Add" button
function newElement() {
  var daynum = localStorage.getItem(daynum)
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    if (daynum) {
       document.getElementById("tasklist" + daynum).appendChild(li);
    } else {
    document.getElementById("tasklist").appendChild(li);
      }
    console.log(daynum)
  }
  document.getElementById("myInput").value = "";
  
  li.classList.add("taskli");
  var span = document.createElement("SPAN");
  //var mark = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
    var txt2 = document.createTextNode("\u2713");
  var selection = "";
 li.setAttribute("data-id", nodeIndex(li));
  span.className = "close";
  span.appendChild(txt);
  //mark.className = "mark";
  //mark.appendChild(txt2);
  li.appendChild(span);
 //li.appendChild(mark);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.remove();
    }
  }
    for (i = 0; i < li.length; i++) {
    li[i].onclick = function(ev) {
      var ev = this;
      ev.remove();
    }
  }
 
   slist(document.getElementById('tasklist'))
}
function setDuration() {
  duration = document.getElementById("duration-input").value;
    selected.style.height = duration * 2.25;
  document.getElementById("myModal").style.display = 'none';
  
  }
function edittask(num) {
  const el1 = document.querySelector(`[data-id="${num}"]`);
  let li = el1;
console.log(li)
     //if (!li || li == "" || li == null) return console.log(`[Titon ToDo] Error: can't find task with data-id=${num}`);
                                                           console.log(`Editing task ${num}`)
     let text;
  let data = prompt(`Edit task ${num} text`, el1.textContent.slice(0, -1));
  if (data == null || data == "") {
    text = "User cancelled the prompt.";
    return;
  } else {
    el1.innerHTML = data;
  }
     var span = document.createElement("SPAN");
  //var mark = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
    var txt2 = document.createTextNode("\u2713");
   span.className = "close";
  span.appendChild(txt);
  //mark.className = "mark";
  //mark.appendChild(txt2);
  li.appendChild(span);
 //li.appendChild(mark);
  
    for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.remove();
    }
  }
    for (i = 0; i < li.length; i++) {
    li[i].onclick = function(ev) {
      var ev = this;
      ev.remove();
    }
  }
  
   slist(document.getElementById('tasklist'))
  document.getElementById("demo").textContent = text;
  }
// Create a new list item when clicking on the "Add" button
function newElement() {
  if (!daynum) daynum = 1;
  console.log("daynum: " + daynum)
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("tasklist" + daynum).appendChild(li);
  }
  document.getElementById("myInput").value = "";
  
  li.classList.add("tasklist");
  var span = document.createElement("SPAN");
  var mark = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
    var txt2 = document.createTextNode("\u2713");
  var selection = "";
 li.setAttribute("data-id", nodeIndex(li));
  span.className = "close";
  span.appendChild(txt);
  //mark.className = "mark";
  //mark.appendChild(txt2);
  li.appendChild(span);
 //li.appendChild(mark);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.remove();
    }
  }
    for (i = 0; i < li.length; i++) {
    li[i].onclick = function(ev) {
      var ev = this;
      ev.remove();
    }
  }
  
   slist(document.getElementById('tasklist' + daynum))
}

function colortask(num) {
  const el1 = document.querySelector(`[data-id="${num}"]`);
  let li = el1;
  const colpanel = document.getElementById("colors")
    colpanel.style.display = "inline-block"
    selected = num;
    
  }
function timetask(num) {
    const el1 = document.querySelector(`[data-id="${num}"]`);
  selected = el1;
  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");


modal.style.display='block'

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
  }
function setcolor(background, color) {
   const el1 = document.querySelector(`[data-id="${selected}"]`);
  el1.style.background = background;
   el1.style.color = color;
  
  const colpanel = document.getElementById("colors")
    colpanel.style.display = 'none';
  }
function slist (target) {

  // (A) SET CSS + GET ALL LIST ITEMS
  target.classList.add("slist");
  let items = target.getElementsByTagName("li"), current = null;

  // (B) MAKE ITEMS DRAGGABLE + SORTABLE
  for (let i of items) {
    // (B1) ATTACH DRAGGABLE
    i.draggable = true;
    i.oncontextmenu = "window.alert('heh')";
    
    // (B2) DRAG START - YELLOW HIGHLIGHT DROPZONES
    i.ondragstart = (ev) => {
      current = i;
      for (let it of items) {
        if (it != current) { it.classList.add("hint"); }
      }
    };
    
    // (B3) DRAG ENTER - RED HIGHLIGHT DROPZONE
    i.ondragenter = (ev) => {
      if (i != current) { i.classList.add("active"); }
    };

    // (B4) DRAG LEAVE - REMOVE RED HIGHLIGHT
    i.ondragleave = () => {
      i.classList.remove("active");
    };

    // (B5) DRAG END - REMOVE ALL HIGHLIGHTS
    i.ondragend = () => { for (let it of items) {
        it.classList.remove("hint");
        it.classList.remove("active");
    }};
 
    // (B6) DRAG OVER - PREVENT THE DEFAULT "DROP", SO WE CAN DO OUR OWN
    i.ondragover = (evt) => { evt.preventDefault(); };
 
    // (B7) ON DROP - DO SOMETHING
    i.ondrop = (evt) => {
      evt.preventDefault();
      if (i != current) {
        let currentpos = 0, droppedpos = 0;
        for (let it=0; it<items.length; it++) {
          if (current == items[it]) { currentpos = it; }
          if (i == items[it]) { droppedpos = it; }
        }
        if (currentpos < droppedpos) {
          i.parentNode.insertBefore(current, i.nextSibling);
        } else {
          i.parentNode.insertBefore(current, i);
        }
      }
    };
  }
}



window.addEventListener("DOMContentLoaded", () => {
  slist(document.getElementById('tasklist'))
});

