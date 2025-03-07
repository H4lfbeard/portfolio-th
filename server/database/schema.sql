CREATE DATABASE IF NOT EXISTS portfolioth;
USE portfolioth;

create table project (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  imgCard varchar(255) not null,
  description text not null,
  heroImg varchar(255) not null,
  img1 varchar(255) not null,
  img2 varchar(255) not null,
  url varchar(255) not null,
  createdAt timestamp default current_timestamp
);


insert into project( title, imgCard, description, heroImg, img1, img2, url)
values
  ("WildEats", "/images/wildEats.png", "WildEats est mon premier projet d’école. L’objectif de ce projet était, en plus d’apprendre à maîtriser Javascript, de réaliser un site regroupant tous les restaurants à proximité de la Wild Code School. Afin de faciliter la recherche des étudiants, nous avons mis au point un système de filtre qui permet en cochant un ou plusieurs filtre, d’affiner sa sélection. Pour chaque restaurant listés, nous avons accès à l’adresse, le type, les horaires d’ouvertures et une image de l’emplacement. Se premier projet fût pour moi l’occasion de travailler en équipe et d’appliquer mes connaissances en design pour réaliser une application simple autant esthétiquement que techniquement, mais efficace !", 
  "/images/wildeats-hero.jpg", "/images/mockup-phone-wildeats.png", "/images/mockup-charte-wildeats.png", "https://h4lfbeard.github.io/Wild-Eats.github.io/"
  ),
  ("Wildify", "/images/Wildify.png", "Wildify est mon deuxième projet d’école. Les 4 membres de mon équipe et moi même avons choisis communément de travailler sur un projet qui nous tenait à cœur, à savoir une application musicale. La consigne pour ce deuxième projet était de consommer une API et nous avons donc décidé d’utiliser celle de Spotify ! Une simple connexion à l’application avec son profil permet à l’utilisateur de naviguer sur notre application avec les informations qui le concerne. Il peut alors y retrouver ses playlists, ses artistes favoris ainsi que ses podcasts. Une page est également là pour permettre aux membres de l’équipe de faire leurs propres recommandations musicales. Ce projet nous aura permis de mettre à profit les connaissances que nous avions fraîchement acquises en ReactJS. J’ai également pu apporter ma petite touche de design afin de permettre une navigation simple et efficace. Le projet fût même présenté sur les réseaux sociaux de la Wild Code School !", 
  "/images/wildify-hero.jpg", "/images/mockup-phone-wildify.png", "/images/mockup-charte-wildify.png", "https://github.com/H4lfbeard/Wildify"
  ),
  ("Veever", "/images/Veever.png", "VEEVER est mon dernier projet d’école. Pour ce projet, nous avons eu la chance de collaborer avec un vrai client, à savoir l’équipe derrière VEEVER. Après plus d’un an à travailler sur leur projet, ils ont décidé de nous faire confiance pour développer le MVP de leur application. Ce projet est jusqu’alors le projet le plus complet et complexe sur lequel j’ai pu travailler et aiguiser mes connaissances. L’application permet aux utilisateurs de créer leur compte, puis de sélectionner et enregistrer en favoris les restaurants, hôtels et activités qui les intéressent sur Bordeaux. Une fois que cela est fait, l’application va leur proposer un séjour clefs en main pour un maximum de 3 jours. Pour réaliser ce projet, nous avons dû collaborer en équipe pour réaliser les maquettes, l’intégration frontend, la partie backend et enfin relier le tout pour que cela soit fonctionnel. À la fin de notre formation, nous avons donc pu présenter le resultat de notre travail aux DEMO DAY, devant un parterre d’invités ainsi que nos clients. Ce projet ambitieux m’aura appris les bases du développement backend, et apporter une expérience client qui m’aura vraiment fait grandir en tant que développeur junior !", 
  "/images/veever-hero.jpg", "/images/mockup-phone.png", "/images/mockup-charte.png", "https://github.com/WildCodeSchool-2024-09/Veever_wild"
  );