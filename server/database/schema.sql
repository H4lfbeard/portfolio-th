
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
  ("WildEats", "/images/wildEats.png", " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut magna nunc, vehicula non accumsan ut, blandit in enim. Aenean bibendum ac sapien euismod condimentum. Aenean faucibus nisi sed dui facilisis efficitur. Phasellus molestie feugiat massa eget malesuada. Maecenas feugiat non dolor a fringilla. Vestibulum ultricies at nulla malesuada gravida. Nam et leo vulputate, condimentum arcu eu, vehicula augue. Suspendisse auctor placerat ex vel tempor. Curabitur eu massa in erat laoreet ornare nec id mi. Suspendisse potenti. Donec sit amet massa a arcu egestas accumsan. Cras mi turpis, vulputate tempor porttitor nec, ornare a metus. Sed cursus egestas velit ut convallis. Proin bibendum finibus tortor, vitae consectetur ligula vehicula quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.", 
  "/images/wildeats-hero.jpg", "/images/mockup-phone-wildeats.png", "/images/mockup-charte-wildeats.png", "https://h4lfbeard.github.io/Wild-Eats.github.io/"
  ),
  ("Wildify", "/images/Wildify.png", " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut magna nunc, vehicula non accumsan ut, blandit in enim. Aenean bibendum ac sapien euismod condimentum. Aenean faucibus nisi sed dui facilisis efficitur. Phasellus molestie feugiat massa eget malesuada. Maecenas feugiat non dolor a fringilla. Vestibulum ultricies at nulla malesuada gravida. Nam et leo vulputate, condimentum arcu eu, vehicula augue. Suspendisse auctor placerat ex vel tempor. Curabitur eu massa in erat laoreet ornare nec id mi. Suspendisse potenti. Donec sit amet massa a arcu egestas accumsan. Cras mi turpis, vulputate tempor porttitor nec, ornare a metus. Sed cursus egestas velit ut convallis. Proin bibendum finibus tortor, vitae consectetur ligula vehicula quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.", 
  "/images/wildify-hero.jpg", "/images/mockup-phone-wildify.png", "/images/mockup-charte-wildify.png", "https://github.com/H4lfbeard/Wildify"
  ),
  ("Veever", "/images/Veever.png", " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut magna nunc, vehicula non accumsan ut, blandit in enim. Aenean bibendum ac sapien euismod condimentum. Aenean faucibus nisi sed dui facilisis efficitur. Phasellus molestie feugiat massa eget malesuada. Maecenas feugiat non dolor a fringilla. Vestibulum ultricies at nulla malesuada gravida. Nam et leo vulputate, condimentum arcu eu, vehicula augue. Suspendisse auctor placerat ex vel tempor. Curabitur eu massa in erat laoreet ornare nec id mi. Suspendisse potenti. Donec sit amet massa a arcu egestas accumsan. Cras mi turpis, vulputate tempor porttitor nec, ornare a metus. Sed cursus egestas velit ut convallis. Proin bibendum finibus tortor, vitae consectetur ligula vehicula quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.", 
  "/images/veever-hero.jpg", "/images/mockup-phone.png", "/images/mockup-charte.png", "https://github.com/WildCodeSchool-2024-09/Veever_wild"
  );

