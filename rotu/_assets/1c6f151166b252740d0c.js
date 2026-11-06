import {Lang} from '/_assets/8d9b1851a7fc5d37256b.js';
import {StateManager} from '/_assets/10ed7c3a41d6b5b55388.js';

import {Header} from '/_assets/c28225314430605cb187.js';
import {Footer} from '/_assets/d136ea42aa1b1a9323ec.js';
import {Achievements} from '/_assets/3248d3fd88b18ab782f3.js';
import {Settings} from '/_assets/eba4acda7cb6dab5b170.js';
import {Tooltip} from '/_assets/7f47c4ce0ff198fcebce.js';
import {Chat} from '/_assets/1ec46e33ece654b08154.js';
import {Storage} from '/_assets/0c205ce5c8dc94e9cd45.js';
import {StageManager} from '/_assets/43b1accf1fff3aad7ed5.js';
import {Buttons} from '/_assets/7365214cedc7e864c863.js';
import {Keybinds} from '/_assets/c7d8b04c59f0a5cb6754.js';
import {WindowManager} from '/_assets/f27fff2f851791138c2b.js';

let version = "v0.1";
//TODO: Different styling for messages

//TODO: Use flex to handle dynamic resolutions

window.onload = function(){
    //Load game from local storage
    StateManager.loadState();
    
    initModules();
    setUpdateIntervals();
    
    StageManager.selectStage();
    //TODO LOAD UI HERE
    WindowManager.updateUI();

    //Temporary artificial time on the loader
    this.setTimeout(()=>{
    $('#loader').css('display', 'none');
    }, 2000);
    //Game is loaded.
}

function initModules(){
    Lang.init();
    window._ = Lang.translate;

    Tooltip.init();
    Header.init();
    Footer.init(version);
    Settings.init();
    Achievements.init();
    Chat.init();
    Storage.init();
    Buttons.init();

    Keybinds.init();
}

function setUpdateIntervals(){
    setInterval(() => Storage.update(), 1000);
    setInterval(() => StateManager.saveState(), 10000);
}