var mouseEvent = "empty";
 var last_position_of_x, last_position_of_y;
 canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext("2d");
   color = "black";
    width_of_line = 5;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    mouseEvent = "mouseDown"
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseup";
}
canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e){
    current_position_of_mouse_x = e.client_X - canvas.offsetleft;
    current_position_of_mouse_y = e.client_Y - canvas.offsettop;
    if (mouseEvent =="mouseDown"){
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth =width_of_line;
ctx.moveTo(last_position_of_x,last_position_of_y);
ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
ctx.stroke();
    }
last_position_of_x = current_position_of_mouse_x;
last_position_of_y = current_position_of_mouse_y;

}