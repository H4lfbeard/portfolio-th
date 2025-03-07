# 🎨 Portfolio - Installation et Configuration  

Bienvenue dans mon portfolio ! Ce projet est un monorepo fournis par la Wild Code School, contenant à la fois le **frontend** et le **backend**, permettant d'afficher et de gérer mes projets via une base de données.  

Suivez ces étapes pour installer et exécuter le projet sur votre machine.  

---

## 📥 Cloner le dépôt  

Commencez par récupérer le projet en local :  

## Étape 1 / Clonez le repo / Dans votre terminal :

git clone https://github.com/ton-utilisateur/portfolio-th.git

## Étape 2 / Se rendre dans le dossier du projet / Dans votre terminal : 

cd portfolio-th

## Étape 3 / Installer l'environnement de travail / Dans votre terminal : 

npm install

## Étape 4 / Dupliquer les fichiers .env.sample / Dans votre terminal : 

cp client/.env.sample client/.env

cp server/.env.sample server/.env

## Étape 5 / Remplir les informations fichier .env côté server :

DB_USER=YOUR_DATABASE_USERNAME

DB_PASSWORD=YOUR_DATABASE_PASSWORD

## Étape 6 / Faire la migration de la base de données :

npm run db:migrate

## Étape 7 / ENJOY ! N'oubliez pas que le projet est un cours, si vous voyez des bugs n'hésitez pas à me les remonter 😇