// const $sendButton = document.querySelector('.send-button')
// $sendButton.addEventListener('click', sendMessage)

// function sendMessage(e){
//     e.preventDefault()
//     const $input = document.querySelector('.user-command')
//     const inputValue = $input.value

//     makeMessage(inputValue)
//     commands(inputValue)
//     $input.value = ''
//     $input.focus()
// }

// function makeMessage(message){
//     const $fatherMessage = document.querySelector('.computer-terminal')
//     const command = `Imac-de-Gabriel:~ gabrielaguiar$${message}`
    
//     $fatherMessage.innerHTML += `<div class="last-command"> ${command}</div>`
// }

// function commands(command){
//     const $fatherMessage = document.querySelector('.computer-terminal')

//     switch(command){
//         case 'ls':
//             $fatherMessage.innerHTML += `
//             <div class="last-command">
//                 <ul>
//                     <li>Desktop</li>
//                     <li>Documents</li>
//                     <li>Downloads</li>
//                     <li>Favorites</li>
//                 </ul>
//             </div>
//             `
//             break

//         case 'cd Desktop':
//             $fatherMessage.innerHTML += `
//             <div class="last-command">
//                 <ul>
//                     <li>League of Legends</li>
//                     <li>Visual Studio Code</li>
//                     <li>Pycharm</li>
//                     <li>IntelliJ</li>
//                 </ul>
//             </div>
//             `
//             break
        
//         case 'cd Documents':
//             $fatherMessage.innerHTML += `
//             <div class="last-command">
//                 <ul>
//                     <li>Lições</li>
//                     <li>Estudo</li>
//                     <li>GitHub</li>
//                     <li>readme.txt</li>
//                 </ul>
//             </div>
//             `
//             break

//         case 'clear':
//             $fatherMessage.innerHTML = ''
//             break
        
//         default:
//             $fatherMessage.innerHTML += `<div class="last-command">'${command}' Comando não conhecido</div>`
//             break
//     }
// }


const $input = document.querySelector('.user-command')
$input.addEventListener('keydown', sendMessage)

function sendMessage(e){
    var tecla = e.keyCode

    if(tecla == 13){
        const $input = document.querySelector('.user-command')
        const inputValue = $input.value

        makeMessage(inputValue)
        commands(inputValue)
        $input.value = ''
        $input.focus()
    }
    
}

function makeMessage(message){
    const $fatherMessage = document.querySelector('.computer-terminal')
    const command = `Imac-Gabriel:~ gabrielaguiar$${message}`
    
    $fatherMessage.innerHTML += `<div class="last-command"> ${command}</div>`
}

function commands(command){
    const $fatherMessage = document.querySelector('.computer-terminal')

    switch(command){
        case 'ls':
            $fatherMessage.innerHTML += `
            <div class="last-command">
                <ul>
                    <li>Desktop</li>
                    <li>Documents</li>
                    <li>Downloads</li>
                    <li>Favorites</li>
                </ul>
            </div>
            `
            break

        case 'cd Desktop':
            $fatherMessage.innerHTML += `
            <div class="last-command">
                <ul>
                    <li>League of Legends</li>
                    <li>Visual Studio Code</li>
                    <li>Pycharm</li>
                    <li>IntelliJ</li>
                </ul>
            </div>
            `
            break
        
        case 'cd Documents':
            $fatherMessage.innerHTML += `
            <div class="last-command">
                <ul>
                    <li>Lições</li>
                    <li>Estudo</li>
                    <li>GitHub</li>
                    <li>projetos</li>
                    <li>readme.txt</li>
                </ul>
            </div>
            `
            break

        case 'clear':
            $fatherMessage.innerHTML = ''
            break
        
        default:
            $fatherMessage.innerHTML += `<div class="last-command">'${command}' Comando não conhecido</div>`
            break
    }
}