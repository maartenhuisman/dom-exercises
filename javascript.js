// your JavaScript file

const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const pContent = document.createElement('p');
pContent.classList.add('pContent');
pContent.textContent = "Hey I'm red!";
pContent.style.color = 'red';

container.appendChild(pContent);

const h3Content = document.createElement('h3');
h3Content.classList.add('h3Content');
h3Content.textContent = "I'm a blue h3!";
h3Content.style.color = 'blue';

container.appendChild(h3Content);

const blackPinkDiv = document.createElement('div');
blackPinkDiv.classList.add('blackPinkDiv');
blackPinkDiv.style.cssText = 'background-color: pink; border-color: black; border-width: medium';

const bpdH1Content = document.createElement('h1');
bpdH1Content.classList.add('bpdH1Content');
bpdH1Content.textContent = "I'm in a div";

blackPinkDiv.appendChild(bpdH1Content);

const bpdPContent = document.createElement('p');
bpdPContent.classList.add('bpdPContent');
bpdPContent.textContent = "ME TOO!";

blackPinkDiv.appendChild(bpdPContent);

container.appendChild(blackPinkDiv);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello Beelke!");

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
  alert("Hello World");
});

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });