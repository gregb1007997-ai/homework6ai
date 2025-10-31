import React from 'react';

/**
 * IPAddressContainer
 * - Class-based React component (per request)
 * - Holds ip, loading, and error in state
 * - Exposes a public async `fetchIPAddress(url, options)` method that will perform an AJAX
 *   call and update component state. The server details will be provided later; the method
 *   is ready to be called once you provide the URL and desired behavior.
 */
import React from 'react';

// Global XMLHttpRequest instance
let xhr;

class IPAddressContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ip_address: '...',
      loading: false,
      error: null,
    };

    // Bind the processRequest method as requested
    this.processRequest = this.processRequest.bind(this);
  }

  componentDidMount() {
    // Create new XMLHttpRequest
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://ipinfo.io/json?token=2277ce4bac0347', true);
    xhr.send();
    xhr.addEventListener('readystatechange', this.processRequest, false);
  }

  /**
   * Process request wrapper. Handles the XMLHttpRequest response.
   */
  processRequest() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        this.setState({ 
          ip_address: response.ip,
          loading: false,
          error: null
        });
      } else {
        this.setState({
          error: `Failed to fetch IP: ${xhr.status}`,
          loading: false
        });
      }
    }
  }



  render() {
    const { ip_address, loading, error } = this.state;

    return (
      <div className="ip-address-container">
        <h1>IP Address React App Using AI</h1>

        <div id="ip-display">
          {loading && <p>Loading IP…</p>}
          {!loading && ip_address && <p>IP: {ip_address}</p>}
          {!loading && !ip_address && !error && <p>IP will appear here.</p>}
          {error && <p className="error">Error: {error}</p>}
        </div>
      </div>
    );
  }
}

export default IPAddressContainer;
