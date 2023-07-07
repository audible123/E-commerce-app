import React, { useState } from "react";


const SignUP = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    
  };


  return (
    <Form onSubmit={handleSubmit}>
      <Input type="email" placeholder="Email" value={email} onChange={setEmail} />
      <Input type="password" placeholder="Password" value={password} onChange={setPassword} />
      <Button type="submit">SignUP</Button>
    </Form>
  );
};
export default SignUP;

