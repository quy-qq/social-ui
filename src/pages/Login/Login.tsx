
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { LockOutlined, UserOutlined,FacebookOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import { signInWithEmailAndPassword, FacebookAuthProvider } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSubmit } from '../../services/auth.service';
import { auth } from '../../config/firebase/firebase';
import { loginSuccess } from '../../store/actions/auth';
import config from '../../config';
const cx = classNames.bind(styles)

function Login() {
const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [state, setState] = useState({
        username: '',
        password: '',
        loading: false,
    });
 const handleSubmit = async (event:any) => {
        try {
            setState({
              username: '',
              password: '',
              loading: true,
            });
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('userCredential:', userCredential);
            let token = await userCredential.user.getIdToken();
            const response = await loginSubmit(token);
            console.log('response:', response);
            dispatch(loginSuccess(response.data.user));
            if (response) {
                navigate(config.routes.home);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (  
     <div className={cx("wrapper")}>
        <h2>Login</h2>
         <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={handleSubmit}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </Form.Item>
       <div className="login-button facebook" >
          <FacebookOutlined /> Sign In with Facebook
        </div>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
    </div>
     );
}

export default Login;