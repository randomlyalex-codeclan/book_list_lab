document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const theForm = document.querySelector('#new-item-form');
  theForm.addEventListener('submit', handleFormSubmit);

  const deleteAll = document.querySelector('#delete-all');
  deleteAll.addEventListener('click', handleDeleteAll);

})

const handleFormSubmit = function (event) {
  event.preventDefault();
  // console.log("hello form")
  const newTitleListItem = document.createElement('li');
  newTitleListItem.textContent = event.target.title.value;
  newTitleListItem.classList.add('title');
  const newAuthorListItem = document.createElement('li');
  newAuthorListItem.textContent = event.target.author.value;
  newAuthorListItem.classList.add('author');
  const newCatListItem = document.createElement('li');
  newCatListItem.textContent = event.target.category.value;
  newCatListItem.classList.add('cat');
  const newBook = document.createElement('ul');
  newBook.appendChild(newTitleListItem);
  newBook.appendChild(newAuthorListItem);
  newBook.appendChild(newCatListItem);

  const readingList = document.querySelector('#reading-list');
  readingList.appendChild(newBook);
  event.target.reset();
}

const handleDeleteAll = function (){
  const readingList = document.querySelector('#reading-list');
  readingList.remove();
}


// const newlist = document.querySelector('ul');

//     newlist.appendChild(newListItem);

