
import styles from './index.css';
import { Flex, Button } from 'antd-mobile';

export default function () {
  return (
    <Flex className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>
          To get started, edit <code>src/pages/index.js</code> and save to reload.
        </li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">Getting Started</a>
        </li>
      </ul>
      <Button>default</Button>
      <Button type="primary">default</Button>
    </Flex>
  );
}
