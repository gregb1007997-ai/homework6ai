import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import IPAddressContainer from './IPAddressContainer';

// Mount into the div#container in public/index.html
const container = document.getElementById('container');
if (container) {
  const root = createRoot(container);
  root.render(<IPAddressContainer />);
} else {
  // Fallback: log a helpful message if container element is missing
  // (useful when this file is run outside of the expected HTML)
  // eslint-disable-next-line no-console
  console.error('Could not find element with id "container" to mount React app.');
}

export default IPAddressContainer;
