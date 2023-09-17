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
      trigger: '4',
    },
    {
      id: '4',
      options: [
        { value: 'products', label: 'Our Products', trigger: 'productsInfo' },
        { value: 'pricing', label: 'Pricing', trigger: 'pricingInfo' },
        { value: 'help', label: 'Help', trigger: 'helpInfo' },
      ],
    },
    {
      id: 'productsInfo',
      message: 'We offer a wide range of products. You can easily contact hawkers in the chat for pricing and placing orders.',
      trigger: 'backToMainMenu', // Change this to a unique value for a different path
    },
    {
      id: 'pricingInfo',
      message: 'Our pricing plans vary based on your needs. You can easily inquire about pricing through our chat app.',
      trigger: 'backToMainMenu', // Change this to a unique value for a different path
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
        { value: 'back_to_main', label: 'Back to Main Menu', trigger: '4' }, // Go back to the main menu
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
    {
      id: 'backToMainMenu',
      message: 'Going back to the main menu...',
      trigger: '4', // Go back to the main menu
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
