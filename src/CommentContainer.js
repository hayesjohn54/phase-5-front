import React from "react";
import Comment from "./Comment";

function CommentContainer({comments}){
    const renderComment= comments?.map(comment=><Comment key={comment.id} comment={comment}/>)
    console.log(comments)
    return(
        <div className="comment_container">
            {renderComment}
        </div>
    )

}

export default CommentContainer