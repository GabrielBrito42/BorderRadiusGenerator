import './scss/main.scss'
import SimpleControlBox from './js/SimpleControlBox'

var movables = {
  left: document.getElementById('left'),
  right: document.getElementById('right'),
  bottom: document.getElementById('bottom'),
  top: document.getElementById('top')
}
let params = SimpleControlBox.loadUrlParams(window.location.href)
var myBox = new SimpleControlBox({moveableElems: movables, initState: params})