import {StateManager} from '/_assets/10ed7c3a41d6b5b55388.js';

import {Header} from '/_assets/c28225314430605cb187.js';
import {Button} from '/_assets/aadcb3da184710e0990c.js';
import {Chat} from '/_assets/1ec46e33ece654b08154.js';
import {Tooltip} from '/_assets/7f47c4ce0ff198fcebce.js';

export var WindowManager = {
    changeHeaderName,
    changeHeaderTitle,

    addChatMessage,
    clearChat,

    hideUI,
    showUI,
    updateUI,

}

function getUI(){
    return StateManager.getState()['ui'];
}

//Changes name in Header
function changeHeaderName(name){
    Header.setName(name);
}

//Changes the Header title
function changeHeaderTitle(key){
    Header.changeTitle(_(key));
}

//Adds a chat message
function addChatMessage(message, delay = 0){
    Chat.addMessage(message, delay);
}

//Clear the chat log
function clearChat(){
    Chat.clearChat();
}


//Hides an UI element
function hideUI(key){
    $("#"+key).hide();
}

//Shows an UI element
function showUI(key){
    $("#"+key).show('slow');
}

//Updates the UI according to the current game state
function updateUI(){
    let UIstate = StateManager.getState()['ui'];
    
    Object.keys(UIstate).forEach(key => {
        if (UIstate[key] == true)
            showUI(key);
        else if (UIstate[key] == false)
            hideUI(key);
        else
            console.log("ERROR LOADING UI:" + key);
    });
}