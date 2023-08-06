import MovieCard from "./MovieCard";
import Student from "./Student";

export default function App(){
  return(
    <>
    {/* 
     <Student name ="Siddhartha" marks="88.43%" section="C"/>

    <Student name ="Bhutu"   section="A"/>

    <Student  marks ="86" section="D"/> */}
    <h1>Movie App</h1>
    <MovieCard />
   
    </>

  )
}


// default Props 
Student.defaultProps={
  name: "John Doe",
  marks:"75%"
}