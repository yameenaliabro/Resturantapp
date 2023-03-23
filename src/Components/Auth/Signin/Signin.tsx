import { Button, Form, Input, message } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
const SignIn = () => {
    let navigate = useNavigate();
  return (
    <>
      <div className="signin">
        <section className="signin__main">
          <div className="signin__body">
            <h2>Login</h2>
            <Form
              wrapperCol={{
                span: 24,
              }}
              layout="horizontal"
              size="large"
              style={{
                maxWidth: 400,
                width: "100%",
              }}
            >
              {/* <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Email is required" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item> */}
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "User Name is required" },
                  {  message: "Please enter a valid user name" },
                  {
                    min: 5, 
                    message: "Username must be minimum 5 characters.",
                  },
                ]}
              >
                <Input placeholder="User Name" type="text" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Password is required",
                    whitespace: true,
                  },
                  { min: 6, message: "Password must be at least 6 characters" },
                ]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>

              <Form.Item className="form-item-button">
                <Button type="primary" htmlType="submit" >
                  Sign In
                </Button>
              </Form.Item>
            </Form>
            <Button
              onClick={() => navigate("/signup")}
              type="link"
              className=""
            >
              Create Account
            </Button>
          </div>
        </section>
        <Outlet/>
      </div>
    </>
  );
};

export default SignIn;