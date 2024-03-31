import React from 'react';

import { ContactForm } from '@/components/ContactForm/ContactForm';
import Layout from '@/components/Layout/Layout';

function Contacts() {
  return (
    <Layout title={`Бутик 64 Контакты`} description="" keywords="">
      <div className="contacts">
        <div className="contacts__container">
          {' '}
          <h3>Отправьте нам сообщение</h3>
          <p>
            Если у вас есть какие-то вопросы или предложения по сотрудничеству -
            заполните форму ниже
          </p>
          <ContactForm />
          <ul className="contacts__people">
            <li>
              <span className="contacts__people__post">ГЛАВНЫЙ РЕДАКТОР</span>
              <div>
                <span className="contacts__people__name">
                  Екатерина Паравина
                </span>
                <a href="tel:+79063050000">+7 906 305-00-00</a>
              </div>
            </li>
            <li>
              <span className="contacts__people__post">ШЕФ РЕДАКТОР</span>
              <div>
                <span className="contacts__people__name">Елена Машинская</span>
                <a href="tel:+79271597555">+7 927 159-75-55</a>
              </div>
            </li>
          </ul>
        </div>

        <a
          href="https://metrika.yandex.ru/stat/?id=96743045&amp;from=informer"
          target="_blank"
          rel="nofollow"
          className="contacts__counter__container"
        >
          <img
            src="https://informer.yandex.ru/informer/96743045/3_1_FFFFFFFF_EFEFEFFF_0_pageviews"
            className="contacts__counter"
            alt="Яндекс.Метрика"
            title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)"
          />
        </a>
      </div>
    </Layout>
  );
}

export default Contacts;
