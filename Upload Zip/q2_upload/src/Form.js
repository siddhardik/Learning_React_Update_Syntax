// Complete the Form Component and export it
import {name,email} from "./HomePage";

const handleSubmit=(e)=>{
  e.preventDefault();
}

const Form = () => (
  <>
    <div>
      <form onSubmit={handleSubmit} >
        {/* Create a h3, 2 inputs and 1 button here */}
      <h3>Login Page</h3>
      <input type="text" placeholder={name}/>
      <br/> <br/>
      <input type ="email" placeholder={email} />
      <br/> <br/>
      <button>Login</button>

      </form>
    </div>
  </>
);

export default Form;
