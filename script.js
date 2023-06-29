
const sortableList = document.querySelector('.sortable-list');
const items = sortableList.querySelectorAll('.item');

items.forEach(item => {
  //add dragging class to item on dragstart
  item.addEventListener('dragstart', () => {
    //adding dragging class to item after a delay
    setTimeout(() => item.classList.add('dragging'),0)
    
  });
  //remove draggin class from item on dragend event
  item.addEventListener('dragend', () => {
    item.classList.remove('dragging');
  })
});

function initSortableList (e)  {

  e.preventDefault();
  const draggingItem = sortableList.querySelector('.dragging')
  //Getting all items except currently dragging and making array of them
  const siblings = [...sortableList.querySelectorAll('.item:not(.dragging)')];


  //finding the sibling after which the draggin item should be placed
  let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });
  
  //Inserting the draggin item before the found sibling
  sortableList.insertBefore(draggingItem, nextSibling);
}

sortableList.addEventListener('dragover', initSortableList);
sortableList.addEventListener('dragenter', e => e.preventDefault());