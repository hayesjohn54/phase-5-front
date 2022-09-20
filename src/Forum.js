import { useState, React} from "react";
import CommentContainer from "./CommentContainer";

function Forum({comments, setComments}){
    const [values, setValues] = useState({
        title: "",
        comment: ""
    })

        
    
      


    function handleSubmit(event){
        event.preventDefault()
        event.target.reset()
        setComments(comments=>[...comments,values])
        fetch('http://127.0.0.1:3000/comments',{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
        })
        .then(data => {
            if (!data.ok) {
              throw Error(data.status);
             }
             return data.json();
            }).then(update => {
            console.log(update);
            }).catch(e => {
            console.log(e);
            })}


            const handleTitle = (event) => {
                setValues({...values, title: event.target.value})
            }
            const handleComment = (event) => {
                setValues({...values, comment: event.target.value})
            }
            
            
  return(
 
    <div className="forum-container">
        <div>
            <CommentContainer comments={comments}/>
        </div>
        <header className="forumHeader">Discuss</header>
        
        <form className="acds-forum" onSubmit={handleSubmit}>
           <div className="titleBox"> <input
                onChange={handleTitle}
                value={values.title}
                className="forum-title"
                placeholder="Title"
                name="forumTitle" />
            </div>
            <div className="imageBox">
            <input  
                onChange={handleComment}
                value={values.comment}
                className="forum-comment"
                placeholder="Comment"
                name="forumcomment" />
            </div>
            
            
            
            
            <input className="submit" type="submit"/>
        </form>
        
    </div>
)
    };

export default Forum;