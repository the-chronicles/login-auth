import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';

function SignupScreen() {

  function signupHandler({email, password}) {
    createUser()
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
