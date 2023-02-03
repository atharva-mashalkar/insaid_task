import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { 
    Drawer, 
    Form, 
    Button, 
    Input,
    InputNumber,
    message,
} from 'antd';
import { 
    toggleContactUsDrawer, 
    clearProps,
    registerInquiry
 } from '../../store/user/userAction';

 import { useHistory } from "react-router-dom";

const Signup = (props) => {

    let history = useHistory();

    const { TextArea } = Input;

    const {
        toggleContactUsDrawer,
        openContactUsDrawer
    } = props;

    const {
        registerInquiry,
        clearProps,
        processing_reg,
        req_success,
        failed_req
    } = props;

    useEffect(() => {
        if(req_success){
            message.success('Request successfully registered!',0.8)
            .then(()=> {
                toggleContactUsDrawer(false)
                history.push('/')
            })
        }
        return () => {
            clearProps()
        }
    },[req_success]);

    useEffect(() => {
        if(failed_req && openContactUsDrawer){
            message.error('The form is incorrectly filled. Plese try again.',3);
        }
    },[failed_req]);

    const onClose = () => {
        toggleContactUsDrawer(false)
    };

    const onFinish = (values) => {
        if(values.phoneNumber.toString().length > 10){
            message.error('Please input correct Phone Number',3);
        }
        else if(!values.emailId.includes("@")){
            message.error('Please input correct Email Id',3);
        }
        else{
            registerInquiry(values);
        }
    };

    const onFinishFailed = (errorInfo) => {
        message.error('Please fill in all the fields of the form',3);
    };

    const onChange = (value) => {
        console.log('changed', value);
        if (value.length() > 10){
            message.error('Please!',0.8)
        }
    };

    return (
        <>
            <Drawer
                title="Contact Us"
                width={720}
                onClose={onClose}
                visible={openContactUsDrawer}
                bodyStyle={{ paddingBottom: 80 }}
            >
                <Form
                    name="contactUs"
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
                        label="Email ID"
                        name="emailId"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Email Id',
                            },
                        ]}
                    >
                        <Input placeholder="Please enter your Email Id" />
                    </Form.Item>
                    <Form.Item
                        label="Phone Number"
                        name="phoneNumber"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Phone Number',
                            },
                        ]}
                    >
                        <InputNumber style={{
                                        width: '100%',
                                    }}/>
                    </Form.Item>
                    <Form.Item
                        label="Inquiry"
                        name="inquiry"
                        rules={[
                            {
                                required:true,
                                message: 'Please mention your request in the form'

                            }
                        ]}>
                        <TextArea rows={4} placeholder="Please mention your request over here"/>
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 10,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit" loading={processing_reg} >
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
        openContactUsDrawer: state.user.openContactUsDrawer,
        failed_req: state.user.failed_req,
        processing_reg: state.user.processing_reg,
        req_success: state.user.req_success
    }
};

export default connect(mapStateToProps, { 
    toggleContactUsDrawer, 
    clearProps,
    registerInquiry
})(Signup)
