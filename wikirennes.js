function addCustomButton(imageFile, speedTip, tagOpen, tagClose, sampleText, imageId) {
 mwCustomEditButtons[mwCustomEditButtons.length] =
  {"imageId": imageId,
  "imageFile": imageFile,
  "speedTip": speedTip,
  "tagOpen": tagOpen,
  "tagClose": tagClose,
  "sampleText": sampleText};
}

mw.toolbar.addButtons(
 
 /* Redirections */
 { "imageFile": 'https://upload.wikimedia.org/wikipedia/commons/4/47/Button_redir.png',
   "speedTip":   'Redirection',
   "tagOpen":    '#REDIRECT [[',
   "tagClose":   ']]',
   "sampleText": 'nom de la destination',
   "imageId":    'mw-editbutton-redirect'
 },

 /* Liens Wikipedia */
 { "imageFile":  'https://upload.wikimedia.org/wikipedia/commons/7/7f/Button_link_to_Wikipedia.png',
   "speedTip":   'Lien vers un article Wikipédia',
   "tagOpen":    '{{w|',
   "tagClose":   '}}',
   "sampleText": 'titre de l\'article',
   "imageId":    'mw-editbutton-lienW'
 },

 /* Citations */
 { "imageFile":  'https://upload.wikimedia.org/wikipedia/commons/4/44/Button_comillas_latinas.png',
   "speedTip":   'Insérer une citation',
   "tagOpen":    '{{citation|texte=|auteur=|qualite=|origine=|collecteur=|date=',
   "tagClose":   '}}',
   "sampleText": '',
   "imageId":    'mw-editbutton-citation'
 },
 
 /* Lien Source WikiPédia */
 { "imageFile":  'https://upload.wikimedia.org/wikipedia/commons/3/35/Button_lauriers.png',
   "speedTip":   'Indiquer la source depuis Wikipédia',
   "tagOpen":    '{{source wikipédia|',
   "tagClose":   '}}',
   "sampleText": 'titre de l\'article référent',
   "imageId":    'mw-editbutton-sourceW'
 },
 
 /* Images sur Commons */
 { "imageFile":  'https://upload.wikimedia.org/wikipedia/commons/6/6c/Button_commons.png',
   "speedTip":   'Lier vers les images sur Commons',
   "tagOpen":    '{{Commons|lien=|autre_titre=',
   "tagClose":   '}}',
   "sampleText": '',
   "imageId":    'mw-editbutton-commons'
 }
);
