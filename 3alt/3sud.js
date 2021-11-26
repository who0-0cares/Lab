var input = document.getElementById('ans')
function clr() {
  input.value = '';
}
function disp(val) {
  input.value += val;
}
function solve() {
  input.value = eval(input.value);
}
function del () {
  var val = input.value;
  input.value = val.substring(0, val.length - 1);
}
