const randomButton = document.querySelector('.dice');

randomButton.addEventListener('click', async function(event) {
  try {
    const slip_id = Math.floor(Math.random() * 100);
    await fetchAPI(slip_id);
  } catch (error) {
    console.error(error);
  }
});

async function fetchAPI(slip_id) {
  try {
    const res = await fetch(`https://api.adviceslip.com/advice/${slip_id}`);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();
    updateUI(data);
  } catch (error) {
    console.error(error);
  }
}

function updateUI(advice) {
  const content = document.querySelector('.container__content');
  const id = document.querySelector('.id');
  content.innerHTML = advice.slip.advice;
  id.innerHTML = advice.slip.id;
}
