import backImg from '../../assets/img/bg/background.jpg';
import logo200Image from 'assets/img/logo/vc-logo.jpg';
import React from 'react';
import {
  Button,
  Card,
  CardBody,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { loginWithJWT } from '../../redux/actions/auth/loginActions';
import { history } from '../../history';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class AuthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {},
    };
    console.log(history);
  }
  //handleInput
  handleInput = event => {
    event.persist();
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [event.target.name]: event.target.value,
      },
    }));
  };
  //Handle Form Submit
  handleFormSubmit = () => {
    //
    console.log('FORMDATA===', this.state.formData);
    // const data = this.state.role
    // console.log('DATATATA',data)
    this.props.dispatch(loginWithJWT(this.state.formData));
    // this.setState((prevState) => ({
    //   formData: {
    //     ...prevState.formData,
    //     role: data
    //   }
    // }),()=>console.log('Name content',this.state.formData))
  };
  render() {
    return (
      <Row
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: `url(${backImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 1500,
        }}
      >
        <Col md={6} lg={4}>
          <Card
            body
            style={{
              backgroundColor: '#c1c1c1',
            }}
          >
            <Form
              onSubmit={e => {
                e.preventDefault();
                this.handleFormSubmit();
              }}
            >
              <div className="text-center pb-4">
                <img
                  src={logo200Image}
                  className="rounded"
                  style={{ width: 60, height: 60, cursor: 'pointer' }}
                  alt="logo"
                  //onClick={onLogoClick}
                />
              </div>
              <FormGroup className="form-label-group position-relative has-icon-left">
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={this.handleInput}
                  // value={this.state.email}
                  // onChange={e => this.setState({ email: e.target.value })}
                />
              </FormGroup>
              <FormGroup className="form-label-group position-relative has-icon-left">
                <Label>Password</Label>
                <Input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={this.handleInput}
                />
              </FormGroup>

              <FormGroup className="d-flex justify-content-between align-items-center">
                <div className="float-right">
                  <Link to="/forgot-pass">Forgot Password?</Link>
                </div>
              </FormGroup>
              <Button
                className="bg-gradient-theme-left border-0"
                block
                type="submit"
              >
                Login
              </Button>
              <ToastContainer />
              <div className="text-center pt-1">
                <h6>or</h6>
                <h6>
                  <Button
                    color="primary"
                    block
                    className="bg-gradient-theme-left border-0"
                    onClick={() => {
                      history.push('/signup');
                    }}
                  >
                    Register
                  </Button>
                </h6>
              </div>
              {/* <div className="d-flex justify-content-between">
                <Button
                  size="md"
                  color="info"
                  className="bg-gradient-theme-left border-0"
                  outline
                  onClick={() => {
                    history.push('/pages/register');
                  }}
                >
                  Register
                </Button>
                <Button color="primary" type="submit">
                  Login
                </Button>
                <ToastContainer />
              </div> */}
            </Form>
            {/* <AuthForm
              authState={this.props.authState}
              onChangeAuthState={this.handleAuthState}
              onLogoClick={this.handleLogoClick}
            /> */}
          </Card>
        </Col>
      </Row>
    );
  }
}
const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps)(AuthPage);
