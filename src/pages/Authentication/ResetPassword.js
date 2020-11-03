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
//import { forgotPass } from '../../redux/actions/auth/forgotPassword';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {},
    };
  }
  //handleInput
  handleInput = event => {
    event.persist();
    this.setState(
      prevState => ({
        formData: {
          ...prevState.formData,
          [event.target.name]: event.target.value,
        },
      }),
      () => console.log('Name Input', event.target.value),
    );
  };
  //Handle Form Submit
  handleFormSubmit = () => {
    //
    // console.log('FORMDATA===', this.state.formData);
    // this.props
    //   .dispatch(forgotPass(this.state.formData))
    //   .then(res => {
    //     console.log('RRRRRR', res);
    //     if (res.data) {
    //       // Add success message in Toast
    //       toast.success('Email has been sent, kindly Follow the instruction', {
    //         position: toast.POSITION.BOTTOM_RIGHT,
    //       });
    //     } else {
    //       // show error message in Toast
    //       toast.error('Something went wrong', {
    //         position: toast.POSITION.BOTTOM_RIGHT,
    //       });
    //     }
    //   })
    //   .catch(error => {
    //     // show error message in Toast
    //     toast.error('Something went wrong', {
    //       position: toast.POSITION.BOTTOM_RIGHT,
    //     });
    //   });
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
            <CardTitle>
              <h4 className="mb-0 text-center">Recover your password</h4>
            </CardTitle>
            <Form
              onSubmit={e => {
                e.preventDefault();
                this.handleFormSubmit();
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
