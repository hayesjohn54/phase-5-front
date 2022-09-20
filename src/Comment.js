function Comment({ comment }){
    return(
        
        
        <div className="comment-block">      
            <div className="comment">
                <h1 className="comment-title"> {comment.title}</h1>

                <p className="comment-comment">{comment.comment}</p>
            </div>
            </div>
       
            
        
    )
}

export default Comment;