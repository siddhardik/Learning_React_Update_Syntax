// Complete the HomePage Component and export it
let name="YourName";
let email= "xyz@pqr.com";

import Form from "./Form";
function HomePage() {
  return (
    <div className="Homepage">
      {/* Create a h1 tag and render Form Component here */}
      <h1>HomePage</h1>

      <Form/>
    </div>
  );
}


export { HomePage};

export {name, email};