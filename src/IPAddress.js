import React from 'react';
import './IPAddress.css';

class IPAddress extends React.Component {
  render() {
    const { ip, loading, error } = this.props;

    return (
      <div className="ip-address-component">
        <h1>IP Address React App Using AI</h1>

        <div id="ip-display">
          {loading && <p>Loading IP…</p>}
          {!loading && ip && <p>IP: {ip}</p>}
          {!loading && !ip && !error && <p>IP will appear here.</p>}
          {error && <p className="error">Error: {error}</p>}
        </div>
        <p className="ip-note">This is your IP Address...probably :P</p>
      </div>
    );
  }
}

export default IPAddress;
