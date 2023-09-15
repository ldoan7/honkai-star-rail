const arrLightCones = document.querySelectorAll('.light-cones tr');

// Update list of characters when filters change
addEventListener('input', (event) => {
    let elemRarity = document.getElementById('rarity');
    let strRarity = elemRarity.value;
    console.log('Rarity: ' + strRarity);

    let elemPath = document.getElementById('path');
    let strPath = elemPath.value;
    console.log('Path: ' + strPath);

    for (let i = 0; i < arrLightCones.length; i++) {
        let elem = arrLightCones[i];

        // If the character has the selected filter, keep them displayed
        if ((strRarity === 'none' || elem.classList.contains(strRarity)) &&
            (strPath === 'none' || elem.classList.contains(strPath))) {
            elem.style.display = 'table-row';
        } else {
            elem.style.display = 'none';
        }
    }
});
