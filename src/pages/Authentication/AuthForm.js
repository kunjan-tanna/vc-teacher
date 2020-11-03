import React from 'react';
import backImg from '../../assets/img/bg/background.jpg';
import logo200Image from 'assets/img/logo/vc-logo.jpg';
import {
  Button,
  CardHeader,
  CardBody,
  Card,
  CardTitle,
  Row,
  Col,
  Form,
  FormGroup,
  CustomInput,
  Label,
  Input,
} from 'reactstrap';
import { connect } from 'react-redux';
import Select from 'react-select';
import * as globalActions from '../../redux/actions/global';
import * as registerActions from '../../redux/actions/auth/registerActions';
import { history } from '../../history';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import registerImg from '../../assets/img/sidebar/sidebar-13.jpg';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: this.props.roles,
      erroMsg: false,
      formData: {},
    };
  }
  componentDidMount() {
    this.props.dispatch(globalActions.getRole());
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const updatedObject = {};

    // roles
    if (
      nextProps.roles &&
      nextProps.roles.length &&
      nextProps.roles !== prevState.roles
    ) {
      const roles = nextProps.roles.map(item => {
        return {
          label: item.roleName,
          value: item._id,
        };
      });
      Object.assign(updatedObject, { roles: roles });
    }

    return Object.keys(updatedObject).length !== 0 ? updatedObject : null;
  }
  handleRole = (name, data) => {
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: data.value,
      },
    }));
    // ()=>console.log('---setState---',this.state.formData,name,data)
  };
  //handle avatar
  handleavtar = event => {
    event.persist();
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [event.target.name]: event.target.files[0],
      },
    }));
  };
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
    if (this.state.formData.roleId) {
      this.props
        .dispatch(registerActions.RegUsers(this.state.formData))
        .then(res => {
          if (res.data) {
            toast.success('Regtister Successfully', {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
            setTimeout(() => {
              history.push('/login');
            }, 2000);
          } else {
            toast.error('Register not Successfully', {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          }
        })

        .catch(error => {
          // show error message in Toast
          toast.error('Register not Successfully', {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        });
    } else {
      this.setState({ erroMsg: true });
      // show error message in Toast
      toast.error('Please Enter the Role', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
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
              <Row>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group position-relative has-icon-left">
                    <Label>First Name</Label>
                    <strong className="text-danger">*</strong>
                    <Input
                      type="text"
                      required
                      placeholder="First Name"
                      name="firstName"
                      onChange={this.handleInput}
                      // value={this.state.email}
                      // onChange={e => this.setState({ email: e.target.value })}
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group position-relative has-icon-left">
                    <Label>Last Name</Label>
                    <strong className="text-danger">*</strong>
                    <Input
                      type="text"
                      required
                      placeholder="Last Name"
                      name="lastName"
                      onChange={this.handleInput}
                      // value={this.state.email}
                      // onChange={e => this.setState({ email: e.target.value })}
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group position-relative has-icon-left">
                    <Label>Email</Label>
                    <strong className="text-danger">*</strong>
                    <Input
                      type="email"
                      required
                      placeholder="Email"
                      name="email"
                      onChange={this.handleInput}
                      // value={this.state.email}
                      // onChange={e => this.setState({ email: e.target.value })}
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group position-relative has-icon-left">
                    <Label>Password</Label>
                    <strong className="text-danger">*</strong>
                    <Input
                      type="password"
                      required
                      placeholder="Password"
                      name="password"
                      onChange={this.handleInput}
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group position-relative has-icon-left">
                    <Label>Role</Label>
                    <strong className="text-danger">*</strong>
                    <Select
                      isClearable={false}
                      options={this.state.roles}
                      className="React"
                      classNamePrefix="select"
                      id="roleId"
                      name="roleId"
                      onChange={data => this.handleRole('roleId', data)}
                    />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup className="form-label-group position-relative has-icon-left">
                    <Label>Mobile No.</Label>
                    <strong className="text-danger">*</strong>
                    <Input
                      type="number"
                      required
                      placeholder="Mobile No."
                      name="mobile"
                      onChange={this.handleInput}
                      // value={this.state.email}
                      // onChange={e => this.setState({ email: e.target.value })}
                    />
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <FormGroup className="form-label-group position-relative has-icon-left">
                    <Label>Image</Label>
                    <strong className="text-danger">*</strong>
                    <Input
                      type="file"
                      required
                      id="avtar"
                      name="avtar"
                      onChange={this.handleavtar}
                    />
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <FormGroup className="form-label-group position-relative has-icon-left">
                    <Label>Address</Label>
                    <Input
                      type="textarea"
                      placeholder="Address"
                      name="address"
                      onChange={this.handleInput}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Button
                className="bg-gradient-theme-left border-0"
                block
                type="submit"
              >
                Register
              </Button>
              <ToastContainer />
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }
}
const mapStateToProps = state => {
  return {
    //Once data are store in dispatch variable so whenever use it variable to call like this in below:
    roles: state.global.roles,
  };
};
export default connect(mapStateToProps)(AuthForm);
