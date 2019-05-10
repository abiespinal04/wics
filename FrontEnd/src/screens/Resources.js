import React, { Component } from 'react';
import Wics from '../res/wics.png'
import Gallery from 'react-grid-gallery';


const Resources = () => {
    const IMAGES =
[{
        src: "https://scontent.cdninstagram.com/vp/6bbdd7f9042c6ca19950328c7e4c3c40/5D74AD77/t51.2885-15/sh0.08/e35/s640x640/41077603_170999450448790_143225229653663107_n.jpg?_nc_ht=scontent.cdninstagram.com",
        thumbnail: "https://scontent.cdninstagram.com/vp/6bbdd7f9042c6ca19950328c7e4c3c40/5D74AD77/t51.2885-15/sh0.08/e35/s640x640/41077603_170999450448790_143225229653663107_n.jpg?_nc_ht=scontent.cdninstagram.com",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "https://scontent.cdninstagram.com/vp/8767998e07028c928b90623434530e49/5D709D92/t51.2885-15/sh0.08/e35/s640x640/43747087_754387158239933_9044482239129649823_n.jpg?_nc_ht=scontent.cdninstagram.com",
        thumbnail: "https://scontent.cdninstagram.com/vp/8767998e07028c928b90623434530e49/5D709D92/t51.2885-15/sh0.08/e35/s640x640/43747087_754387158239933_9044482239129649823_n.jpg?_nc_ht=scontent.cdninstagram.com",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: "https://i2.wp.com/yourdream.liveyourdream.org/wp-content/uploads/2018/10/eniac-women-970x647-c.jpg?w=970&ssl=1",
        thumbnail: "https://i2.wp.com/yourdream.liveyourdream.org/wp-content/uploads/2018/10/eniac-women-970x647-c.jpg?w=970&ssl=1",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
    src: "https://media.npr.org/assets/img/2017/08/10/csmooc14-081-419be9b766d81e795bd47a5a78f0cb5e4d1fecd3-s1600-c85.jpg",
    thumbnail: "https://media.npr.org/assets/img/2017/08/10/csmooc14-081-419be9b766d81e795bd47a5a78f0cb5e4d1fecd3-s1600-c85.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},
{
    src: "https://lh3.googleusercontent.com/-50jrg6uEzJ0/XNXwSjC6iDI/AAAAAAAABIs/B9BHhcQkFKE7CS2JE5zwdv3ooWTqhuD8QCK8BGAs/s0/2019-05-10.png",
    thumbnail: "https://lh3.googleusercontent.com/-50jrg6uEzJ0/XNXwSjC6iDI/AAAAAAAABIs/B9BHhcQkFKE7CS2JE5zwdv3ooWTqhuD8QCK8BGAs/s0/2019-05-10.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},
{
    src: "https://www.cics.umass.edu/drupal/files/uploads/cswomen_low.jpg",
    thumbnail: "https://www.cics.umass.edu/drupal/files/uploads/cswomen_low.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},
{
    src: "https://lh3.googleusercontent.com/-71H1TWtTJUE/XNXwx8KMKFI/AAAAAAAABI0/OtWYhwjpkVM0gW-lYkMGG_8GwDSLgonQwCK8BGAs/s0/2019-05-10.png",
    thumbnail: "https://lh3.googleusercontent.com/-71H1TWtTJUE/XNXwx8KMKFI/AAAAAAAABI0/OtWYhwjpkVM0gW-lYkMGG_8GwDSLgonQwCK8BGAs/s0/2019-05-10.png",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},
{
    src: "https://cdn-images-1.medium.com/max/1600/1*ELbsev6Xb5MWrdl3R8ypJA.jpeg",
    thumbnail: "https://cdn-images-1.medium.com/max/1600/1*ELbsev6Xb5MWrdl3R8ypJA.jpeg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
}
]

    return ( 
        <div style={{alignSelf:'center'}}>
        
           <Gallery images={IMAGES}/>
        </div>
     );
}
 
export default Resources;