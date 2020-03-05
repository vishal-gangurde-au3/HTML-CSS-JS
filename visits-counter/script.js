const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
  fetch(
    "https://api.countapi.xyz/update/default/92330a27-3c4a-4f1c-9eca-bce22f312d17/?amount=1"
  )
    .then(res => res.json())
    .then(res => {
      countEl.innerHTML = res.value;
    })
    .catch(err => console.log(err));
}