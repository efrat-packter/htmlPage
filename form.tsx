import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import'bootstrap/dist/css/bootstrap.min.css'
export default function FormDisabledExample() {
  return (
    <div className="container-sm my-100">
    <Form action="./c#/a.html" >
   <h1>Please sign in</h1>
      <Form.Group className="mb-3">
        <Form.Control type='email' id="email" placeholder="Email address" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control type='password' id="password" placeholder="password " />
      </Form.Group>



      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          id="disabledFieldsetCheck"
          label="Remember me"
        />
      </Form.Group>
      
      <Button type="submit">Sign in</Button>

  </Form>
  </div>

  );
}