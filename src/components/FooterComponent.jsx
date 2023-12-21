import React, { Component } from 'react';

export default class FooterComponent extends Component {
  render() {
    return (
      <div>
        <div style={{ marginBottom: '60px' }}>
        </div>

        <footer className='footer bg-lg active ' style={{ position: 'fixed', bottom: 0, width: '100%' , padding: '10px 0' }}>
          <span className='text-muted'>All Rights Reserved 2023 @bhagwatsolunke</span>
        </footer>
      </div>
    );
  }
}
