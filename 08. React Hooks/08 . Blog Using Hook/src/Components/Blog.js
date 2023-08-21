//Blogging App using Hooks
import { useState, useRef, useEffect, useReducer } from "react";
import { db } from "../firebaseinit";
import { collection, doc, setDoc,addDoc, getDocs } from "firebase/firestore"; 





function blogsReducer(state, action) {
    switch (action.type) {
        case "ADD":
            return [action.blog, ...state]

        case "REMOVE":
            return (state.filter((blog, index) => index !== action.index));

        default:
            return [];
    }
}

export default function Blog() {

    // const [title,setTitle] = useState("");
    // const [content,setContent] = useState("");
    const [formData, setformData] = useState({ title: "", content: "" })
    // const [blogs, setBlogs] =  useState([]);
    const [blogs, dispatch] = useReducer(blogsReducer, []);

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
    }, []);

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

    // Fetching data on  rendering

    useEffect(()=>{
        async function fetchData(){
            const snapShot = await getDocs(collection(db, "blogs"));
            console.log(snapShot);
            

            let blogs = snapShot.docs.map((doc)=>{
                     return {
                        id:doc.id,
    
                        ...doc.data()
                
    
            }});

            console.log(blogs);
            dispatch(blogs);
    
        }

        fetchData();
       
    },[]);

    async function handleSubmit(e) {
        e.preventDefault();

        // setBlogs([{ title: formData.title, content: formData.content }, ...blogs]);
        dispatch({ type: "ADD", blog: { title: formData.title, content: formData.content } });
        setformData({ title: "", content: "" });
        // Add a new document with a generated id.
        // const docRef = await addDoc(collection(db, "blogs"), {
        //     title: formData.title,
        //     content: formData.content,
        //     createdOn: new Date()
        // });
        // console.log("Document written with ID: ", docRef.id);

        // Add a new document   to replace id with a new id useful for generating new id myself  
        const docRef = doc(collection(db, "blogs"));

        // later...
        await setDoc(docRef,{
            title: formData.title,
            content: formData.content,
            createdOn: new Date()
        });
        //Setting focus on title after adding a blog
        titleRef.current.focus();
        console.log(blogs);
    }

    function removeBlog(i) {

        // setBlogs(blogs.filter((blog, index) => index !== i));
        dispatch({ type: "REMOVE", index: i })

    }

    return (
        <>
            <h1>Write a Blog!</h1>
            <div className="section">

                {/* Form for to write the blog */}
                <form onSubmit={handleSubmit}>
                    <Row label="Title">
                        <input className="input"
                            placeholder="Enter the Title of the Blog here.."
                            value={formData.title}
                            ref={titleRef}
                            onChange={(e) => setformData({ title: e.target.value, content: formData.content })}
                        />
                    </Row >

                    <Row label="Content">
                        <textarea className="input content"
                            placeholder="Content of the Blog goes here.."
                            value={formData.content}
                            onChange={(e) => setformData({ title: formData.title, content: e.target.value })}
                        />
                    </Row >

                    <button className="btn">ADD</button>
                </form>

            </div>

            <hr />

            {/* Section where submitted blogs will be displayed */}
            <h2> Blogs </h2>
            {blogs.map((blog, i) => (
                <div className="blog">
                    <h3>{blog.title}</h3>
                    <hr />
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
function Row(props) {
    const { label } = props;
    return (
        <>
            <label >{label}<br /></label>
            {props.children}
            <hr />
        </>
    )
}
