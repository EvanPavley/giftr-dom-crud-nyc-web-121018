let searchInput;
let giftList;
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM has been fully loaded');
  console.table(gifts);

  searchInput = document.querySelector('#filter-input');
  giftList = document.querySelector('.gift-list');
  giftForm = document.querySelector('#gift-form');

  giftForm.addEventListener('submit', function(event){
    event.preventDefault()

    let newGift = {}
    newGift.name = event.target.querySelector("#gift-name-input").value
    newGift.image = event.target.querySelector("#gift-image-input").value
    addGiftToList(newGift)
  })

  function addGiftToList(gift) {
    //creating list element
    let li = document.createElement('li')
    giftList.appendChild(li);

    //create name for list element
    let liName = document.createElement('span')
    liName.innerHTML = (`${gift.name}`);
    li.appendChild(liName);

    //createing img for list element
    let liImg = document.createElement('img')
    liImg.setAttribute('src', `${gift.image}`);
    liImg.setAttribute('height', '50px');
    liImg.setAttribute('width', '50px');
    li.appendChild(liImg);

    //createing delete button for list element
    let liDeleteBtn = document.createElement('button');
    liDeleteBtn.innerHTML = ('delete')
    li.appendChild(liDeleteBtn);

    //adding the event listener for the delete button
    liDeleteBtn.addEventListener('click', function(event){
      li.remove();
    })

    //creating edit button for list element
    let liEditBtn = document.createElement('button');
    liEditBtn.innerHTML = ('edit')
    li.appendChild(liEditBtn);

    //adding the event listener for the edit button
    liEditBtn.addEventListener('click', function(event){
      //create form for li
      liEditForm = document.createElement('form')
      li.appendChild(liEditForm);
      //create name input for form
      inputFieldName = document.createElement('input')
      inputFieldName.setAttribute('value', `${gift.name}`);
      inputFieldName.setAttribute('id', 'edit-gift-name-input');
      liEditForm.appendChild(inputFieldName);
      //create img input for form
      inputFieldImage = document.createElement('input')
      inputFieldImage.setAttribute('value', `${gift.image}`);
      inputFieldImage.setAttribute('id', 'edit-gift-image-input');
      liEditForm.appendChild(inputFieldImage);
      //submit button for form
      submitBtn = document.createElement('button')
      submitBtn.innerHTML = ('Submit');
      submitBtn.setAttribute('type', 'submit');
      liEditForm.appendChild(submitBtn);
      liEditForm.addEventListener('submit', function(event){
        event.preventDefault()
        let nameEdited = event.target.querySelector("#edit-gift-name-input").value
        let liNameEdited = document.createElement('span')
        liNameEdited.innerHTML = (`${nameEdited}`);

        let imgEdited = event.target.querySelector("#edit-gift-image-input").value
        let liImgEdited = document.createElement('img')
        liImgEdited.setAttribute('src', `${imgEdited}`);
        liImgEdited.setAttribute('height', '50px');
        liImgEdited.setAttribute('width', '50px');

        li.replaceChild(liNameEdited, liName);
        li.replaceChild(liImgEdited, liImg);
      })
    })

  }

  for (var i = 0; i < gifts.length; i++) {
    addGiftToList(gifts[i]);
  }





  searchInput.addEventListener("keyup", function(event) {
    event.preventDefault();

    if (event.keyCode === 13) {
      // Declare variables
      let searchInputVal, li, i, txtValue;
      searchInputVal = searchInput.value
      li = giftList.getElementsByTagName('li');

      // Loop through all list items, and hide those who don't match the search query
      for (i = 0; i < li.length; i++) {
        txtValue = li[i].querySelector('span');

        if (txtValue.innerText === searchInputVal) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    }
  });

});
