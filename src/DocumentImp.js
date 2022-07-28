import React from 'react'

function DocumentImp() {

function onFocus() {
    document.querySelector('#name').value = 'naman';
}

function onBlur() {
    var abcd = 'abcd';
    document.querySelector('#name').value = '';
}
  return (
    <input type="text" id="name" onFocus={onFocus} onBlur={onBlur}/>
  )
}

export default DocumentImp