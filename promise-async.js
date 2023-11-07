const biscuit = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newbiscuit = { name: 'Biscotti Cookies' };

function getbiscuit() {
  setTimeout(() => {
    let outcome = ['  '];

    biscuit.forEach((biscuit) => {
      outcome += `<li>${biscuit.name}</li>`;
    });
    document.body.innerHTML = outcome;
  }, 3000);
}

function createCookie(newbiscuit) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      biscuit.push(newbiscuit);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('There are no biscuits');
      }
    }, 2000);
  });
}

// Progression 7: creating a new async function

// calling the new async function

async function end() {
  await createbiscuit(newbiscuit);

  getbiscuit();
}

end();
