import { AuthItem, AuthLink, AuthList } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <AuthList>
      <AuthItem>
        <AuthLink to="login">LogIn</AuthLink>
      </AuthItem>
      <AuthItem>
        <AuthLink to="register">Register</AuthLink>
      </AuthItem>
    </AuthList>
  );
};

export default AuthNav;