import React from 'react';

import { Footer } from '@/components/Footer/Footer';
import Layout from '@/components/Layout/Layout';
import Nav from '@/components/Nav/Nav';

function Contacts() {
  return (
    <Layout>
      <div className="contacts">
        <span className="contacts__title">Отправьте нам сообщение</span>
        <p className="contacts__text">
          Если у вас есть какие-то вопросы или предложение по сотрудничеству -
          напишите на почту &nbsp;
          <a href="mailto:secular@butic64.ru">secular@butic64.ru</a>
        </p>
      </div>
    </Layout>
  );
}

export default Contacts;
