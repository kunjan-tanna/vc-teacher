import React from 'react';
import backImg from '../../assets/img/bg/background.jpg';

import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  FormGroup,
  Form,
  Input,
  Button,
  Label,
} from 'reactstrap';
import fgImg from '../../assets/img/pages/forgot-password.png';
import { history } from '../../history';
import { connect } from 'react-redux';
import { resetPass } from '../../redux/actions/auth/resetPassword';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPass: '',
    };
  }
  //handleInput
  handleInput = event => {
    event.persist();
    this.setState(prevState => ({
      newPass: {
        ...prevState.newPass,
        [event.target.name]: event.target.value,
      },
    }));
  };
  //Handle Form Submit
  handleFormSubmit = resetLink => {
    const obj = {
      resetLink: resetLink,
      newPass: this.state.newPass.password,
    };
    //
    // console.log('FORMDATA===', this.state.formData);
    this.props
      .dispatch(resetPass(obj))
      .then(res => {
        if (res.data) {
          // Add success message in Toast
          toast.success('Your Password hab been Changed', {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          setTimeout(() => {
            history.push('/login');
          }, 3000);
        } else {
          // show error message in Toast
          toast.error('"USER with a ResetLink does not exists', {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
      })
      .catch(error => {
        // show error message in Toast
        toast.error('"USER with a ResetLink does not exists', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        setTimeout(() => {
          history.push('/forgot-pass');
        }, 3000);
      });
  };
  render() {
    const search = this.props.location.search;
    const resetLink = search.split('=')[1];
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
            <CardTitle>
              <h4 className="mb-0 text-center">Recover your password</h4>
            </CardTitle>
            <Form
              onSubmit={e => {
                e.preventDefault();
                this.handleFormSubmit(resetLink);
              }}
            >
              <FormGroup className="form-label-group position-relative has-icon-left">
                <p className="px-2 auth-title">
                  Please enter your <strong>New Password</strong>
                </p>
              </FormGroup>
              <FormGroup className="form-label-group position-relative has-icon-left">
                <Label>Password</Label>
                <Input
                  type="password"
                  placeholder="Password"
                  name="password"
                  //value={this.state.newPass}
                  onChange={this.handleInput}
                />
              </FormGroup>

              <div className="text-center pt-1">
                <h6>
                  <Button
                    className="bg-gradient-theme-left border-0"
                    block
                    type="submit"
                  >
                    Recover Password
                  </Button>
                  <ToastContainer />
                </h6>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }
}
const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps)(ResetPassword);
