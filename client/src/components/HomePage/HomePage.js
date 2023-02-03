import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { Spin, Layout, Divider, Row, Col, Image, Button } from "antd";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Signup from "../Signup";
import Login from "../Login";
import ContactUs from '../ContactUs';
import {
    toggleContactUsDrawer,
} from '../../store/user/userAction';
// import { useHistory } from "react-router-dom";

const { Content } = Layout;

const HomePage = (props) => {
    // let history = useHistory();

    const {
        userInfo,
        toggleContactUsDrawer
    } = props;

    // useEffect(() => {
    //     if(userInfo && !openSignupDrawer && !openLoginDrawer){
    //         history.push('/dashboard')
    //     }
    // }, [userInfo])

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // },[]);

    const showContactUsDrawer = () => {
        toggleContactUsDrawer(true);
    };


    return (
        <Layout>
            <Header />
            <Content style={{ padding: '30px 0px', height: '100%'}}>
                <Row>
                    <Col 
                        align='center'
                        span={24}
                    >
                        <Button
                        size="large"
                        style={{ borderRadius: '10px' }}
                        onClick={showContactUsDrawer}
                    >
                        Contact Us
                    </Button>
                    </Col>
                </Row>
                <Signup />
                <Login/>
                <ContactUs/>
            </Content>
            <Footer/>
        </Layout>
    )

}

const mapStateToProps = (state) => {
    return {
        userInfo:state.user.userInfo,
        
    }
}

export default connect(
    mapStateToProps,
    {
        toggleContactUsDrawer
    }
)(HomePage)
