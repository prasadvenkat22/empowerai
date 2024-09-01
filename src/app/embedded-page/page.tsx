import React from 'react';

const EmbeddedPage: React.FC = () => {
  return (
    <div className="w-full h-screen">
      <iframe
        src="http://165.227.97.62:8501/"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="Embedded Content"
      />
    </div>
  );
};

export default EmbeddedPage;
