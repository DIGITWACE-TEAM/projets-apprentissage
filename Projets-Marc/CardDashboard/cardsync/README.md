## TP Pratiques

### a) Tableau de bord avec cartes synchronisées
Objectif :
 Des filtres appliqués sur une carte impactent les autres.

Comment ?

Créer un FilterService (pour stocker les filtres), CardService(Création, listing, detail, suppression).

Chaque carte écoute les changements de filtre pour se mettre à jour.

### b) Notification partagée (Snackbar)
Objectif :
 Avoir un composant Snackbar qui s’affiche depuis n’importe où.

Comment ?

### Créer un NotificationService avec un Subject qui émet des messages.
Le Snackbar écoute et affiche les messages.

N’importe quel composant peut déclencher une notification :
this.notificationService.show("Message envoyé !");