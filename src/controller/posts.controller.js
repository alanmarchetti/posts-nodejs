const Post = require('../model/post.model');

exports.allPosts = async ( request, response ) => {
   try {
       const posts = await Post.find();
       response.status(200).json(posts);
   }catch(err) {
        return response.status(500).json({ message: error })
   }
}

exports.registerPost = async ( request, response ) => {
    const { title, description } = request.body;

    const newPost = new Post({
        title,
        description,
    });

    try {
       const savePosts = await newPost.save();
        response.status(201).json({ msg: 'Post cadastrado!', success: savePosts  });
    }catch (error){
        return response.status(400).json({ message: error })
    }
}

exports.getPost = async ( request, response ) => {
    const { postId } = request.params;
    try {
        const post  = await Post.findById( postId );
        response.status(200).json(post);
    }catch (error){
        response.status(400).json({ message: error});
    } 
}

exports.deletePost = async ( request, response ) => {
    const { postId } = request.params;
    try {
        const removePost = await Post.remove({ _id: postId });
        response.status(200).json(removePost);
    }catch (error){
        response.status(400).json({ message: error});
    }
}

exports.updatePost = async ( request, response ) => {
    const { title, description } = request.body;
    try {
        const updatePost = await Post.updateOne(
            { _id: request.params.postId }, 
            {$set : {
                title,
                description
            }}
            );
        response.status(200).json(updatePost);
    }catch (error){
        response.status(400).json({ message: error });
    }
}