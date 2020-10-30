import React from 'react';

import styles from './index.css';

class SimplePage extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.content}>3333{children}</div>
      </div>
    );
  }
}

export default SimplePage;
