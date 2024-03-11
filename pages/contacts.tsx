import React from 'react';

import { ContactForm } from '@/components/ContactForm/ContactForm';
import { Footer } from '@/components/Footer/Footer';
import Layout from '@/components/Layout/Layout';
import Nav from '@/components/Nav/Nav';

function Contacts() {
  return (
    <Layout>
      <div className="contacts">
        <h3>Отправьте нам сообщение</h3>
        <p>
          Если у вас есть какие-то вопросы или предложения по сотрудничеству -
          заполните форму ниже
        </p>
        <ContactForm />
      </div>
    </Layout>
  );
}

export default Contacts;
