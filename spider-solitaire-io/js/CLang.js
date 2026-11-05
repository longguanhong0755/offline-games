var l_lang;if (navigator.userLanguage) {l_lang = navigator.userLanguage;} else if (navigator.language){l_lang = navigator.language;} else {l_lang = 'en';} 
if (l_lang.indexOf('fr') > -1){
    var TEXT_PRELOADER_CONTINUE = "COMMENCER";
    var TEXT_WIN  = "VOUS GAGNEZ";
    var TEXT_SCORE     = "SCORE";
    var TEXT_MOVES     = "MVMT";
    var TEXT_ARE_YOU_SURE = "ABANDONNER CETTE PARTIE ?";
    
    var TEXT_HELP1     = "LES CARTES PEUVENT ÊTRE CONSTRUITES DANS L'ORDRE DÉCROISSANT";
    var TEXT_HELP2     = "VOUS POUVEZ CHOISIR ET FAIRE GLISSER UNIQUEMENT DES CARTES DE LA MÊME COULEUR";
    var TEXT_HELP3     = "LE BUT EST DE RETIRER TOUTES LES CARTES DU PLATEAU DE JEU EN FAISANT DES SUITES (DE LA MÊME COULEUR), DU ROI À L'AS";
    
    var TEXT_HINT1     = "LES CARTES DU DECK NE PEUVENT PAS ÊTRE DISTRIBUÉES S'IL Y A DES COLONNES VIDE!!";
    var TEXT_HINT2     = "PLUS DE MOUVEMENTS DISPONIBLES, CLIQUEZ SUR LE BOUTON REDÉMARRER!";
    
    var TEXT_GAME_OVER = "PARTIE TERMINÉE";
    var TEXT_STALL = "AFIN DE DISTRIBUER UNE NOUVELLE LIGNE, TOUTES LES COLONNES DOIVENT CONTENIR AU MOINS 1 CARTE.\nVOUS N'AVEZ PAS ASSEZ DE CARTES POUR LE FAIRE.";
    
    var TEXT_HELP1_PAGE2 = "SYSTÈME DE SCORE";
    var TEXT_HELP2_PAGE2 = "Vous pouvez gagner +%s points en obtenant une quinte flush royale"; 
    var TEXT_LOSE1_PAGE2 = "N'utilisez pas trop de mouvements. Vous perdez %s point à chaque coup"; 
    
    var TEXT_MODE_1 = "1 COULEUR";
    var TEXT_MODE_2 = "2 COULEURS";
    var TEXT_MODE_3 = "4 COULEURS";
    var TEXT_EASY = "FACILE";
    var TEXT_NORMAL = "NORMAL";
    var TEXT_HARD = "DIFFICILE";
    var TEXT_TOP_MODE = "CHOISIR LE MODE DE JEU";
    
    var TEXT_DEVELOPED = "PLUS DE JEUX";
    
    var TEXT_SHARE_IMAGE = "200x200.jpg";
    var TEXT_SHARE_TITLE = "Félicitations!";
    var TEXT_SHARE_MSG1 = "Vous avez collecté < <strong>";
    var TEXT_SHARE_MSG2 = " points</strong>!<br><br>Partagez votre score avec vos amis!";
    var TEXT_SHARE_SHARE1 = "Mon score est de ";
    var TEXT_SHARE_SHARE2 = " points! Peux-tu faire mieux?";
}else{
var TEXT_PRELOADER_CONTINUE = "START";
var TEXT_WIN  = "YOU WIN";
var TEXT_SCORE     = "SCORE";
var TEXT_MOVES     = "MOVES";
var TEXT_ARE_YOU_SURE = "ARE YOU SURE?";

var TEXT_HELP1     = "CARDS CAN BE BUILT IN RANK DESCENDING ORDER";
var TEXT_HELP2     = "YOU CAN PICK AND DRAG ONLY CARDS OF THE SAME SUIT";
var TEXT_HELP3     = "THE PURPOSE IS TO REMOVE ALL CARDS FROM THE GAME BOARD BY SCORING ROYAL FLUSHES (OF THE SAME SUIT), FROM KING TO ACE";

var TEXT_HINT1     = "DECK CARDS CAN'T BE DISTRIBUTED IF THERE ARE EMPTY COLUMNS!!";
var TEXT_HINT2     = "NO MORE MOVES AVAILABLE, CLICK RESTART BUTTON!";

var TEXT_GAME_OVER = "GAME OVER";
var TEXT_STALL = "IN ORDER TO DEAL A NEW ROW ALL COLUMNS MUST CONTAIN AT LEAST 1 CARD.\nYOU DON'T HAVE ENOUGH CARDS TO DO IT.";

var TEXT_HELP1_PAGE2 = "SCORE SYSTEM";
var TEXT_HELP2_PAGE2 = "You can earn +%s points by scoring a royal flush"; 
var TEXT_LOSE1_PAGE2 = "Don't use too many moves. You lose %s point every move"; 

var TEXT_MODE_1 = "1 SUIT";
var TEXT_MODE_2 = "2 SUITS";
var TEXT_MODE_3 = "4 SUITS";
var TEXT_EASY = "EASY";
var TEXT_NORMAL = "MEDIUM";
var TEXT_HARD = "HARD";
var TEXT_TOP_MODE = "CHOSE GAME MODE";

var TEXT_DEVELOPED = "More Games at :";

var TEXT_SHARE_IMAGE = "200x200.jpg";
var TEXT_SHARE_TITLE = "Congratulations!";
var TEXT_SHARE_MSG1 = "You collected <strong>";
var TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!";
var TEXT_SHARE_SHARE1 = "My score is ";
var TEXT_SHARE_SHARE2 = " points! Can you do better";
}