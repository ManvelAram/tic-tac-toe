const tdCollection = document.getElementsByTagName("td");
let lastClicked = '';
let gameFinished = false;

for (let index = 0; index < tdCollection.length; index++) {
    const element = tdCollection[index];
    element.addEventListener("click", function (event) {
        event.preventDefault(); 
        handleClick("o", element);
    });

    element.addEventListener('contextmenu', (e) => {
        e.preventDefault();  
        handleClick("x", element);
        return false;
    });
};

function handleClick(playerType, element) {
    if (lastClicked === playerType || element.textContent || gameFinished)  {
        return;
    }
    lastClicked = playerType;
    element.textContent = playerType;
    element.style.color = playerType === 'x' ? 'red' : 'green';

    if (
        tdCollection[0].textContent && tdCollection[0].textContent == tdCollection[1].textContent && tdCollection[1].textContent == tdCollection[2].textContent || 
        tdCollection[3].textContent && tdCollection[3].textContent == tdCollection[4].textContent && tdCollection[4].textContent == tdCollection[5].textContent ||
        tdCollection[6].textContent && tdCollection[6].textContent == tdCollection[7].textContent && tdCollection[7].textContent == tdCollection[8].textContent ||
        tdCollection[0].textContent && tdCollection[0].textContent == tdCollection[3].textContent && tdCollection[3].textContent == tdCollection[6].textContent ||
        tdCollection[1].textContent && tdCollection[1].textContent == tdCollection[4].textContent && tdCollection[4].textContent == tdCollection[7].textContent ||
        tdCollection[2].textContent && tdCollection[2].textContent == tdCollection[5].textContent && tdCollection[5].textContent == tdCollection[8].textContent ||
        tdCollection[0].textContent && tdCollection[0].textContent == tdCollection[4].textContent && tdCollection[4].textContent == tdCollection[8].textContent ||
        tdCollection[2].textContent && tdCollection[2].textContent == tdCollection[4].textContent && tdCollection[4].textContent == tdCollection[6].textContent 
        ) { 
        alert(playerType + ' Win! ');
        gameFinished = true;
    } else {
        let isEmpty = false;
        for (let index = 0; index < tdCollection.length; index++) {
            if (!tdCollection[index].textContent) {
                isEmpty = true;
                break;
            }
        }
        if (!isEmpty) {
            alert('Draw !!')
            gameFinished =true;
        }
    }  

    updateCellCount();
};

function updateCellCount() {
    let leftCliks = document.getElementById('count-left-cliks');
    leftCliks.innerText = --leftCliks.innerText;
};
