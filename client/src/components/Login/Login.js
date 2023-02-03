import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { 
    Drawer, 
    Form, 
    Button, 
    Input,
    message,
} from 'antd';
import { 
    toggleLoginDrawer,
} from '../../store/user/userAction';

const Login = (props) => {

    const {
        toggleLoginDrawer,
        openLoginDrawer,
        userInfo,
    } = props;

    const onClose = () => {
        toggleLoginDrawer(false)
    };

    const onFinish = (values) => {
        toggleLoginDrawer(false)
    };

    const onFinishFailed = (errorInfo) => {
        message.error('Please fill in all the fields of the form',3);
    };

    return (
        <>
            <Drawer
                title="Login"
                width={720}
                onClose={onClose}
                visible={openLoginDrawer}
                bodyStyle={{ paddingBottom: 80 }}
            >
                <Form
                    name="loginForm"
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 13,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username',
                            },
                        ]}
                    >
                        <Input placeholder="Please enter your Username" />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 10,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Drawer>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        openLoginDrawer: state.user.openLoginDrawer,
        userInfo:state.user.userInfo,
    }
};

export default connect(mapStateToProps, { 
    toggleLoginDrawer, 
})(Login)
