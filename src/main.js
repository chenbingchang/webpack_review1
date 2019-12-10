function add(x, y) {
  console.log(x, y, '我来了');
  return x + y;
}

function addNode() {
  let node = document.createElement('div');

  node.innerHTML = 'webpack vue by yourself';
  document.body.appendChild(node);
}

function addBtnNode() {
  let node = document.createElement('button');

  node.innerText = '打印';
  node.onclick = function() {
    add(3, 4)
  }
  document.body.appendChild(node);
}

addNode();
addBtnNode()
