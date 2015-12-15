function addCustomButton(imageFile, speedTip, tagOpen, tagClose, sampleText, imageId) {
 mwCustomEditButtons[mwCustomEditButtons.length] =
  {"imageId": imageId,
  "imageFile": imageFile,
  "speedTip": speedTip,
  "tagOpen": tagOpen,
  "tagClose": tagClose,
  "sampleText": sampleText};
}

/* Redirections */
addCustomButton('http://upload.wikimedia.org/wikipedia/commons/4/47/Button_redir.png',
 'Redirection',
 '#REDIRECT [[',
 ']]',
 'nom de la destination',
 'mw-editbutton-redirect');

/* Liens Wikipedia */
addCustomButton('http://upload.wikimedia.org/wikipedia/commons/7/7f/Button_link_to_Wikipedia.png',
 'Lien vers un article Wikipédia',
 '{{w|',
 '}}',
 'titre de l\'article',
 'mw-editbutton-lienW');

/* Citations */
addCustomButton('http://upload.wikimedia.org/wikipedia/commons/4/44/Button_comillas_latinas.png',
 'Insérer une citation',
 '{{citation|texte=|auteur=|qualite=|origine=|collecteur=|date=',
 '}}',
 '',
 'mw-editbutton-citation');
 
/* Lien Source WikiP�dia */
addCustomButton('http://upload.wikimedia.org/wikipedia/commons/3/35/Button_lauriers.png',
 'Indiquer la source depuis Wikipédia',
 '{{source wikipédia|',
 '}}',
 'titre de l\'article référent',
 'mw-editbutton-sourceW');
 
/* Images sur Commons */
addCustomButton('http://upload.wikimedia.org/wikipedia/commons/6/6c/Button_commons.png',
 'Lier vers les images sur Commons ',
 '{{Commons|lien=|autre_titre=',
 '}}',
 '',
 'mw-editbutton-commons');
