function elementMaker(tagName, content){
  return `<${tagName}>${content}</${tagName}>`;
}

function render(data){
  return `
  <html>
    <head>
      <title>KOREA Digital training</title>
    </head>
    <body>
      ${data}
    </body>
  </html>
  `;
};

let elementsData = [];
for(let i=0; i<10; i++){
  elementsData.push(elementMaker('h1',`kdt-${i}`));
};


console.log(elementsData.length);

const asdf = render(elementsData.join(''));

console.log(asdf);