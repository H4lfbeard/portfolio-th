
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

