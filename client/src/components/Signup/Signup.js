import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { 
    Drawer, 
    Form, 
    Button, 
    Input,
    message
} from 'antd';
import { 
    toggleSignupDrawer, 
 } from '../../store/user/userAction';

const Signup = (props) => {

    const {
        toggleSignupDrawer,
        openSignupDrawer,
        processing_reg,
    } = props;

    // useEffect(() => {
    //     if(req_success){
    //         message.success('User successfully registered!',0.8)
    //         .then(()=> {
    //             toggleSignupDrawer(false)
    //             history.push('/dashboard')
    //         })
    //     }
    //     return () => {
    //         clearProps()
    //     }
    // },[req_success]);

    // useEffect(() => {
    //     if(failed_req && openSignupDrawer){
    //         if (failed_req.msg === "User Already Registered"){
    //             message.error('The username is already taken. Please try another username',3);
    //         }
    //         else{
    //             message.error('Something went wrong. Please check the form again and submit', 3);
    //         }
    //     }
    // },[failed_req]);

    const onClose = () => {
        toggleSignupDrawer(false)
    };

    const onFinish = (values) => {
        toggleSignupDrawer(false)
    };

    const onFinishFailed = (errorInfo) => {
        message.error('Please fill in all the fields of the form',3);
    };

    return (
        <>
            <Drawer
                title="Signup"
                width={720}
                onClose={onClose}
                visible={openSignupDrawer}
                bodyStyle={{ paddingBottom: 80 }}
            >
                <Form
                    name="signupForm"
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
                        name="firstName"
                        label="First Name"
                        rules={[{ required: true, message: 'Please enter your First Name' }]}
                    >
                        <Input placeholder="Please enter your First Name" />
                    </Form.Item>
                    <Form.Item
                        name="lastName"
                        label="Last Name"
                        rules={[{ required: true, message: 'Please enter your Last Name' }]}
                    >
                        <Input placeholder="Please enter your Last Name" />
                    </Form.Item>
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
                        <Button type="primary" htmlType="submit" loading={processing_reg}>
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
        openSignupDrawer: state.user.openSignupDrawer
    }
};

export default connect(mapStateToProps, { 
    toggleSignupDrawer, 
})(Signup)
