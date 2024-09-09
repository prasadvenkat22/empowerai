import React from 'react';

const EmbeddedPage: React.FC = () => {
  return (
    <div className="w-screen h-screen flex">
      <iframe
        src="http://165.227.97.62:8501/"
        className="w-full h-full border-none"
        title="Embedded Content"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
};

export default EmbeddedPage;
