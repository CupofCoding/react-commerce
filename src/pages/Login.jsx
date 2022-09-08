import styled from 'styled-components'
import { SetLink } from '../components/SetLink'

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
  font-weight: 300;
`;

const Logo = styled.h1`
  font-weight: bold;  
`

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
  
  &:hover{
      background-color: #206060;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          <SetLink to='/'><Logo>PeaStore.</Logo></SetLink>
        </Title>
        <Form>
          <Input placeholder='username'/>
          <Input placeholder='password'/>
          <Button>Login</Button>
          <Link to='/'>Forgot Password?</Link>
          <Link to='/register'>Create New Account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;