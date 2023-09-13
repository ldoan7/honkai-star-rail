const arrCharacters = document.querySelectorAll('.characters div');

// Update list of characters when filters change
addEventListener('input', (event) => {
    let elemRating = document.getElementById('rating');
    let strRating = elemRating.value;
    console.log('Rating: ' + strRating);

    let elemType = document.getElementById('type');
    let strType = elemType.value;
    console.log('Type: ' + strType);

    let elemPath = document.getElementById('path');
    let strPath = elemPath.value;
    console.log('Path: ' + strPath);

    for (let i = 0; i < arrCharacters.length; i++) {
        let elem = arrCharacters[i];

        // If the character has the selected filter, keep them displayed
        if ((strRating === 'none' || elem.classList.contains(strRating)) &&
            (strType === 'none' || elem.classList.contains(strType)) &&
            (strPath === 'none' || elem.classList.contains(strPath))) {
            elem.style.display = 'flex';
        } else {
            elem.style.display = 'none';
        }
    }
});
