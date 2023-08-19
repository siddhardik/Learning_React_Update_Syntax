//Blogging App using Hooks
import { useState, useRef, useEffect } from "react";

export default function Blog(){

    // const [title,setTitle] = useState("");
    // const [content,setContent] = useState("");
    const [formData, setformData] = useState({title:"", content:""})
    const [blogs, setBlogs] =  useState([]);
    
    //useRef hook initialized
    const titleRef = useRef(null);

    // 1. Combination of componentDidMount and componentDidUpdate
    // Runs on mount and then every upadate
    // useEffect(() => {
    //   console.log("Running useEffect");
    // });

    // 2. Just runs on mount because it has no dependency
    // Focus in Title input on mount
    useEffect(() => {
        titleRef.current.focus();
    },[]);

    useEffect(() => {
        // 3. Required to add Title of the latest blog as page's title
        // Show Dependency Injection of blogs
        // Helps us avoid rerun logic on title and content change
        // Still has both DidMount and DidUpdate feature
        
        console.log("Runs on Blogs Mount/Update!!");
        if (blogs.length && blogs[0].title) {
          document.title = blogs[0].title;
        } else {
          document.title = "No blogs!";
        }
      }, [blogs]);

    function handleSubmit(e){
        e.preventDefault();

        setBlogs([{title: formData.title,content:formData.content}, ...blogs]);
        setformData({title:"", content:""});
        //Setting focus on title after adding a blog
        titleRef.current.focus();
        console.log(blogs);
    }

    function removeBlog(i){

        setBlogs( blogs.filter((blog,index)=> index !== i));
 
     }

    return(
        <>
        <h1>Write a Blog!</h1>
        <div className="section">

        {/* Form for to write the blog */}
            <form onSubmit={handleSubmit}>
                <Row label="Title">
                        <input className="input"
                                placeholder="Enter the Title of the Blog here.."
                                value={formData.title}
                                ref = {titleRef}
                                onChange = {(e) => setformData({title: e.target.value, content:formData.content})}
                        />
                </Row >

                <Row label="Content">
                        <textarea className="input content"
                                placeholder="Content of the Blog goes here.."
                                value={formData.content}
                                onChange = {(e) => setformData({title: formData.title,content: e.target.value})}
                        />
                </Row >
         
                <button className = "btn">ADD</button>
            </form>
                     
        </div>

        <hr/>

        {/* Section where submitted blogs will be displayed */}
        <h2> Blogs </h2>
        {blogs.map((blog,i) => (
            <div className="blog">
                <h3>{blog.title}</h3>
                <hr/>
                <p>{blog.content}</p>

                <div className="blog-btn">
                        <button onClick={() => {
                            removeBlog(i)
                        }}
                        className="btn remove">

                            Delete

                        </button>
                </div>
            </div>
        ))}
        
        </>
        )
    }

//Row component to introduce a new row section in the form
function Row(props){
    const{label} = props;
    return(
        <>
        <label>{label}<br/></label>
        {props.children}
        <hr />
        </>
    )
}
