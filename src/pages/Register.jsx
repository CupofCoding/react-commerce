import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.7)
    ),
    url("https://picsum.photos/1080/1920")
      center;
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  border-radius: 3.5px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  margin-bottom: 10px;
  padding: 10px;
  color: white;
  background-color: rgba(0, 128, 128, 0.9); 
  border: 2px solid rgba(0, 128, 128, 1); //Teal
  transition: 0.5sec ease;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.4s ease;
  
  &:hover{
      background-color: #206060;
  }
`;

const Agreement = styled.p`
  margin: 10px 0px;
  font-size: 12px;  
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an Account</Title>
        <Form>
          <Input placeholder='first name'/>
          <Input placeholder='last name'/>
          <Input placeholder='address'/>
          <Input placeholder='email'/>
          <Input placeholder='username'/>
          <Input placeholder='password'/>
          <Input placeholder='confirm password'/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;