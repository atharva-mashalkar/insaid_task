import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { Spin, Layout, Divider, Row, Col, Image, Button, Timeline } from "antd";
import { SmileOutlined } from '@ant-design/icons';
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

    const showContactUsDrawer = () => {
        toggleContactUsDrawer(true);
    };


    return (
        <Layout>
            <Header />
            <Content style={{ padding: '0px 0px', height: '100%'}}>
                <Row style= {{backgroundColor: 'white', padding: '30px 0px'}}>
                    <Col align="center" span={24}>
                        <h2 style={{fontSize: '50px', fontWeight:'bolder', color:'black'}}>About Us</h2>
                        <p style={{fontSize: '15px', textAlign:'justify', color:'black'}}>
                        I find inspiration in ad copy that takes little space to reflect a strong message. Sure, you’ll need to write much more than a couple of sentences for your content marketing, but simplicity has merit. How well you write always sets the stage for what’s to come.
                        Content writing isn’t an easy task. Whether you craft words for B2B or B2C audiences, the challenges can be many. I’ve created a diverse set of tips, tools, and resources to aid in shaping and modifying your work. It’s not an exhaustive collection. Some ideas may seem familiar. Others will be fresh. 
                        My hope is that you’ll walk away with some insights or new tools to help address or minimize the content creation challenges you face.
                        I find inspiration in ad copy that takes little space to reflect a strong message. Sure, you’ll need to write much more than a couple of sentences for your content marketing, but simplicity has merit. How well you write always sets the stage for what’s to come.
                        Content writing isn’t an easy task. Whether you craft words for B2B or B2C audiences, the challenges can be many. I’ve created a diverse set of tips, tools, and resources to aid in shaping and modifying your work. It’s not an exhaustive collection. Some ideas may seem familiar. Others will be fresh. 
                        My hope is that you’ll walk away with some insights or new tools to help address or minimize the content creation challenges you face.
                        </p>
                    </Col>
                </Row>
                <Row style={{backgroundColor:'#001529', padding: '20px 0px'}}>
                    <Col align="center" span={12} style={{padding:'0px 10px'}}>
                        <h2 style={{color:'white', fontSize:'40px', fontWeight:'bolder'}}>Motivation</h2>
                        <p style={{color: 'white', fontSize:'15px', textAlign:'justify'}}>
                        In 2019, Spotify gained notice with its Spotify Everywhere meme-themed campaign. For example, on one billboard, the left side read: “Me: It’s Okay; the breakup was mutual.” On the right side, it read: “Also Me: Sad Indie” (complete with the app’s music search imagery). The simple, creatively delivered message went deep into a full range of emotions familiar to countless people.
                        In 2019, Spotify gained notice with its Spotify Everywhere meme-themed campaign. For example, on one billboard, the left side read: “Me: It’s Okay; the breakup was mutual.” On the right side, it read: “Also Me: Sad Indie” (complete with the app’s music search imagery). The simple, creatively delivered message went deep into a full range of emotions familiar to countless people.
                        </p>
                    </Col>
                    <Col align="center" span={12} style={{padding:'0px 10px'}}>
                        <h2 style={{color:'white', fontSize:'40px', fontWeight:'bolder'}}>Objective</h2>
                        <p style={{color:'white', fontSize:'15px', textAlign:'justify'}}>
                        The COVID-19 pandemic led to numerous ad campaigns that underscore the value of brevity. Nike handled it this way: “If you ever dreamed of playing for millions around the world, now is your chance. Play inside, play for the world.”
                        The COVID-19 pandemic led to numerous ad campaigns that underscore the value of brevity. Nike handled it this way: “If you ever dreamed of playing for millions around the world, now is your chance. Play inside, play for the world.”                        
                        The COVID-19 pandemic led to numerous ad campaigns that underscore the value of brevity. Nike handled it this way: “If you ever dreamed of playing for millions around the world, now is your chance. Play inside, play for the world.”                       
                        </p>
                    </Col>
                </Row>
                <Row style={{backgroundColor:'white', padding:'30px 10px'}} align='center'>
                    <Col align='center' span={10}>
                        <h2 style={{fontSize: '50px', fontWeight:'bolder', color:'black'}}>Our Timeline</h2>
                        <Timeline>
                            <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                            <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                            <Timeline.Item color="red">
                            <p>Solve initial network problems 1</p>
                            <p>Solve initial network problems 2</p>
                            <p>Solve initial network problems 3 2015-09-01</p>
                            </Timeline.Item>
                            <Timeline.Item>
                            <p>Technical testing 1</p>
                            <p>Technical testing 2</p>
                            <p>Technical testing 3 2015-09-01</p>
                            </Timeline.Item>
                            <Timeline.Item color="gray">
                            <p>Technical testing 1</p>
                            <p>Technical testing 2</p>
                            <p>Technical testing 3 2015-09-01</p>
                            </Timeline.Item>
                            <Timeline.Item color="gray">
                            <p>Technical testing 1</p>
                            <p>Technical testing 2</p>
                            <p>Technical testing 3 2015-09-01</p>
                            </Timeline.Item>
                            <Timeline.Item color="#00CCFF" dot={<SmileOutlined />}>
                            <p>Custom color testing</p>
                            </Timeline.Item>
                        </Timeline>
                    </Col>
                </Row>
                <Row style= {{backgroundColor: '#001529', padding: '50px 0px'}} >
                    <Col 
                        align='center'
                        span={24}
                    >
                        <Button
                        size="large"
                        style={{ borderRadius: '10px' , backgroundColor: 'white', color: 'black', fontSize:'15px', fontWeight:'bold'}}
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
