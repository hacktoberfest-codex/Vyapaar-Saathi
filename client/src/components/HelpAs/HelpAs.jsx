import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Botimg from '../../assets/bot.png';

const HelpAs = () => {
  const steps = [
    {
      id: '0',
      message: 'Hey Vyaparies!',
      trigger: '1',
    },
    {
      id: '1',
      message: 'Please write your username',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: `Hi {previousValue}, how can I help you?`,
      trigger: 'mainMenu',
    },
    {
      id: 'mainMenu',
      options: [
        { value: 'products', label: 'Products?', trigger: 'productsInfo' },
        { value: 'pricing', label: 'Pricing?', trigger: 'pricingInfo' },
        { value: 'help', label: 'Help', trigger: 'helpInfo' },
        { value: 'message', label: 'Can\'t Send Message?', trigger: 'messageInfo' },
        { value: 'order', label: 'Can\'t Place an Order?', trigger: 'orderInfo' },
        { value: 'account_issue', label: 'Issue not solved?', trigger: 'accountIssueOptions' },
      ],
    },
    {
      id: 'orderInfo',
      message: 'To place an order, please make sure you are logged in and have an account in Vyapaar Saathi.',
      trigger: 'mainMenu',
    },
    {
      id: 'messageInfo',
      message: 'To send a message, ensure you are logged in and have an account in Vyapaar Saathi.',
      trigger: 'mainMenu',
    },
    {
      id: 'productsInfo',
      message: 'We offer a wide range of products. You can easily contact hawkers in the chat for pricing and placing orders.',
      trigger: 'mainMenu',
    },
    {
      id: 'pricingInfo',
      message: 'Our pricing plans vary based on your needs. You can inquire about pricing through our chat app by providing your buying details to the hawkers.',
      trigger: 'mainMenu',
    },
    {
      id: 'helpInfo',
      message: 'Contact the admin at: 6295000285. If your problem is solved, please click "Problem Solved." If it\'s not solved, click "Email Support."',
      trigger: 'helpOptions',
    },
    {
      id: 'helpOptions',
      options: [
        { value: 'solved', label: 'Problem Solved', trigger: 'solvedAction' },
        { value: 'not_solved', label: 'Email Support', trigger: 'emailSupport' },
        { value: 'back_to_main', label: 'Back to Main Menu', trigger: 'mainMenu' },
      ],
    },
    {
      id: 'solvedAction',
      message: 'Great to hear that your problem is solved! If you have any more questions, feel free to ask.',
      end: true,
    },
    {
      id: 'emailSupport',
      message: 'Please send an email to hardcoder111@gmail.com for further assistance. Our support team will get back to you shortly.',
      end: true,
    },
    // Additional account issue handling steps
    {
      id: 'accountIssueOptions',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'accountIssueHelp' },
        { value: 'no', label: 'No', trigger: 'mainMenu' },
      ],
    },
    {
      id: 'accountIssueHelp',
      message: 'Please describe the issue you are facing with your account, and we will assist you further.',
      trigger: 'waitForUserInput',
    },
    {
      id: 'waitForUserInput',
      user: true,
      trigger: 'accountIssueConfirmation',
    },
    {
      id: 'accountIssueConfirmation',
      message: 'Thank you for providing the information. Our support team will investigate the issue and get back to you.',
      end: true,
    },
  ];
  
  
  
  const theme = {
    background: '#C9FF8F',
    headerBgColor: '#197B22',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
  };

  const config = {
    botAvatar: Botimg,
    floating: true,
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="Helping Assistant"
          steps={steps}
          {...config}
        />
      </ThemeProvider>
    </div>
  );
};

export default HelpAs;
