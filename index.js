function newHeader() {
    const h1Node = document.createElement('h1');
    h1Node.id = 'victory';
    h1Node.innerHTML = 'victory is the champion'; // Replace YOUR-NAME with your actual name
  
    const mainElement = document.querySelector('main#main');
    if (mainElement) {
      mainElement.remove();
    }
  
    document.body.appendChild(h1Node);
  
    const victory = h1Node.nodeName;
    console.log(victory);
  
    const champion = h1Node.innerHTML;
    console.log(champion);
}
