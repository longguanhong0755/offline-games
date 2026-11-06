import { Button } from "/_assets/aadcb3da184710e0990c.js";
import { Tooltip } from "/_assets/7f47c4ce0ff198fcebce.js";
import { StateManager } from "/_assets/10ed7c3a41d6b5b55388.js";

import { Stage0 } from "/_assets/1af847ea65c5f3c25cc0.js";
import { Stage1 } from "/_assets/62f3bfa3fe2554e641af.js";
import { WindowManager } from "/_assets/f27fff2f851791138c2b.js";

export var Buttons = {
    createButton,
    init,
}

//Initialize this module
function init(){
    //Create Buttons
    
    //Stage0
    createButton('wakeUp', Stage0.wakeUpButtonClick, _('tooltip.wakeUp'), 'mainCol');

    //Stage1
    createButton('explore', Stage1.explore, _('tooltip.explore'), 'mainCol', '10s');
    createButton('gatherHerbs', Stage1.gatherHerbsClick, _('tooltip.gatherHerbs', Stage1.herbsPerClick()), 'mainCol', '0.5s');
}

//Creates a button and appends it to parent
function createButton(key, onclick, tooltip, parent, cd=''){
    let button;
    if (cd == '')
        button = Button.createButton(key, _('button.' + key), onclick);
    else
        button = Button.createCooldownButton(key, _('button.' + key), cd, onclick);

    $('#' + parent).append(button);
    Tooltip.addTooltip('#' + key, tooltip);

    WindowManager.hideUI(key);
}