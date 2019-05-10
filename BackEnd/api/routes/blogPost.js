const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const BlogPost = require('../models/blogPost');


router.get('/', (req,res,next) =>{
    BlogPost.find()
   .exec()
   .then(docs => {
       console.log(docs);
    //    if(docs.length >= 0 )
       res.status(200).json(docs)
    //    else{
    //        res.status(404).json({
    //            message: 'No entries found'
    //        })
    //    }
   })
   .catch(err => {
       console.log(err);
       res.status(500).json({
           error:err
       })
   })
});

router.post('/', (req,res,next) => {
   
    const blogPost = new BlogPost({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        post: req.body.post,
        // telephone: req.body.telephone
    });
    blogPost.save()
    .then(result => {
        console.log(result)
        res.status(201).json({
            message:'Handling POST request to /products',
            createdPost: result
        })
    }).catch(err => {
        console.log(err),
        res.status(500).json({
            error:err
        })
    })

});

router.get('/:postId', (req,res,next) => {
    const id = req.params.postId;
    Post.findById(id)
    .exec()
    .then(doc => {
        console.log(doc);
        if(doc){
            res.status(200).json('From Database',doc)
        }else{
            res.status(404).json({
                message:'No valid entry found for provided ID'
            });
        }
       
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        })
    })

})

router.patch('/:postId', (req,res,next) => {
    const id = req.params.postId;
    const updateOps = {}
    for(const ops of req.body){
        updateOps[ops.propsName] == ops.value
    }
    Post.update({_id: id}, {$set:updateOps}).exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result)
    })
    .cathc( err => {
        res.status(400).json({
            error:err
        })
    })

});

router.delete('/:postId', (req,res,next) => {
    const id = req.params.postId
    Post.remove({_id : id }).exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
 });

module.exports = router;