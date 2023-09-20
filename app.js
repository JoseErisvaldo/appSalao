

function lancar() {
    const cards = document.getElementById('cards')
    const inputName = document.getElementById('name').value
    const inputTypeSelect = document.getElementById('inputTypeSelect').value
    const inputCost = document.getElementById('inputCost').value
    const status = document.getElementById('status').value

    if(status === 'Pago') {
        let card = 
    `
    <div class="card">
        <div class="cardDate">19/09/2023</div>
            <h4 class="cardName">${inputName}</h4>
            <div class="cardTypeCorte">${inputTypeSelect}</div>
            <div class="cardCost">R$${inputCost}</div>
            <div class="status">
                <div>Status</div>
                <div class="pago">Pago</div>
            </div>
            <div class="cardEditar">
                <i class='bx bx-edit'></i>
                <i class='bx bx-message-alt-x'></i>
            </div>
        </div>
    </div>
    `
    cards.innerHTML += card
    } else {

        let card = 
        `
        <div class="card">
            <div class="cardDate">19/09/2023</div>
                <h4 class="cardName">${inputName}</h4>
                <div class="cardTypeCorte">${inputTypeSelect}</div>
                <div class="cardCost">R$${inputCost}</div>
                <div class="status">
                    <div>Status</div>
                    <div class="pendente">Pendente</div>
                </div>
                <div class="cardEditar">
                    <i class='bx bx-edit'></i>
                    <i class='bx bx-message-alt-x'></i>
                </div>
            </div>
        </div>
        `
        cards.innerHTML += card

    }

   
    inputName.innerHTML = ''
    inputTypeSelect.innerHTML = ''
    inputCost.innerHTML = ''
}