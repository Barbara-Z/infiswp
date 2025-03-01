620: select distinct author_id as id from views where author_id = viewer_id order by author_id asc;

1148: select * from cinema where id % 2 = 1 and description != 'boring' order by rating desc;