const items = document.querySelectorAll('.item')
const sortableList = document.querySelector('.sortable-list')

items.forEach(item => {
  //add dragging class to item on dragstart
  item.addEventListener('dragstart', () => {
    //adding dragging class to item after a delay
    setTimeout(() => item.classList.add('dragging') ,0)
    
  });
  //remove draggin class from item on dragend event
  item.addEventListener('dragend', () => {
    item.classList.remove('dragging');
  })
});

sortableList.addEventListener('dragover', initSortableList());