import React from 'react';

const ConversationItems = ({ name = '', lastMessage, timeStamp }) => {
  return (
    <div className='conversation-container'>
      <p className='con-icon'>{name ? name[0] : 'N/A'}</p>
      <p className='con-title'>{name}</p>
      <p className='con-lastMessage'>{lastMessage}</p>
      <p className='con-timeStamp'>{timeStamp}</p>
    </div>
  );
};

export default ConversationItems;
