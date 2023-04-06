let showList = [];

fetch("./tv-shows.json")
  .then((resp) => resp.json())
  .then((data) => {
    showList = data;
    setShows(data);
  });

function setShows(data) {
  const list = document.querySelector(".tvShowList");
  list.innerHTML = ""; // clear the list
  data.forEach((item) => {
    list.innerHTML += `
    <div class="col-md-3">
      <div class="card" style="width: 18rem;">
        <img src=${
          item.show.image ? item.show.image.medium : ""
        } class="card-img-top" alt="tv show image">
        <div class="card-body">
          <h5 class="card-title">${item.show.name}</h5>
          
          <a href=${item.show.url} class="btn btn-warning">Detail</a>
          <p class="card-text"></p>
        </div>
      </div>
    </div>
    `;
  });
}
