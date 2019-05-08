import { Selector } from 'testcafe';

fixture `Initial page`
   .page `localhost:8080`;

test('Check greeting in header', async t => {
   const messageHeader = Selector('#message');

   await t
       .expect(messageHeader.innerText).contains('Hello', 'message header contains text "Hello"');
},

test('Check closing in header', async t => {
   const messageHeader = Selector('#message');

   await t
       .expect(messageHeader.innerText).contains('World', 'message header contains text "World"');
},

test('Check message header', async t => {
   const messageHeader = Selector('#message');

   await t
       .expect(messageHeader.innerText).contains('Hello World', 'message header contains text "Hello World"');
});
