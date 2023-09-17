import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Botimg from '../../assets/bot.png'

const HelpAs = () => {
  // const [username, setUsername] = useState('');

  const steps = [
    {
      id: '0',
      message: 'Hey Geek!',
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
        { value: 'Read About us', label: 'Read About us', trigger: 'read about us' },
        { value: 'search hawklers', label: 'Search hawkers', trigger: 'search hawkers' },
        { value: 'view chat', label: 'View chat', trigger: 'view chat' },
        { value: 'help', label: 'help', trigger: 'help' },
        // Add more options as needed
      ],
    },
    {
      id: 'read about us',
      message: 'You are now reading articles.',
      end: true,
    },
    {
      id: 'search hawkers',
      message: 'You are now searching for products.',
      end: true,
    },
    {
      id: 'view chat',
      message: 'You are now viewing your orders.',
      end: true,
    },
    {
      id: 'help',
      message: 'Are you a hawker in need of assistance?',
      trigger: 'hawkerOptions',
    },
    {
      id: 'hawkerOptions',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'providePhoneNumber' },
        { value: 'no', label: 'No', trigger: 'provideEmail' },
      ],
    },
    {
      id: 'providePhoneNumber',
      message: 'Please provide your phone number so we can assist you further.',
      user: true,
      trigger: 'hawkerSolved',
    },
    {
      id: 'hawkerSolved',
      message: 'Great! We will contact you soon. Is your issue resolved?',
      trigger: 'hawkerResolution',
    },
    {
      id: 'hawkerResolution',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No', trigger: 'provideEmail' },
      ],
    },
    {
      id: 'provideEmail',
      message: 'Please provide your email address so we can assist you via email.',
      user: true,
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
          headerTitle="Helping Assistent"
          steps={steps}
          {...config}
        />
      </ThemeProvider>
    </div>
  );
};

export default HelpAs;