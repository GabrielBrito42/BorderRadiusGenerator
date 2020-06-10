import './scss/main.scss'
import FullControlBox from "./js/FullControlBox";

var movables = {
  left: document.getElementById('left'),
  right: document.getElementById('right'),
  bottom: document.getElementById('bottom'),
  top: document.getElementById('top'),
  leftBottom: document.getElementById('leftBottom'),
  rightBottom: document.getElementById('rightBottom'),
  bottomRight: document.getElementById('bottomRight'),
  topRight: document.getElementById('topRight')
}
let params = FullControlBox.loadUrlParams(window.location.href)
var myBox = new FullControlBox({moveableElems: movables, initState: params})
