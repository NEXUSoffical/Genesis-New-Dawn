import { JSDOM } from 'jsdom';
import fs from 'fs';

(async () => {
  const html = fs.readFileSync('dist/index.html', 'utf8');
  const dom = new JSDOM(html, {
    url: 'http://localhost/',
    runScripts: 'dangerously',
    resources: 'usable'
  });
  dom.window.console.log = (...args) => console.log('LOG:', ...args);
  dom.window.console.error = (...args) => console.error('ERROR:', ...args);
  dom.window.addEventListener('error', (event) => {
    console.error('UNHANDLED ERROR:', event.error);
  });
  
  // Wait a bit for scripts to load and run
  await new Promise(r => setTimeout(r, 2000));
})();
