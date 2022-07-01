console.log("This is my Fetch method to get data using api key");
("use strict");

let apiKey = "b3e16e8614d14e0abfa53986a8b75147";

let newsAccordion = document.getElementById("newsAccordion");
fetch(
  ` https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${apiKey}`
)
  .then((response) => {
    let json = response.json();
    let articles = json.articles;
    let newsHtml = "";
    articles.forEach(function (element, index) {
      // console.log(element, index)
      let news = `<div class="card">
                        <div class="card-header" id="heading${index}">
                            <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                aria-expanded="false" aria-controls="collapse${index}">
                               <b>Breaking News ${index + 1}:</b> ${
        element["title"]
      }
                            </button>
                            </h2>
                        </div>

                        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                            <div class="card-body"> ${
                              element["content"]
                            }. <a href="${
        element["url"]
      }" target="_blank" >Read more here</a>  </div>
                        </div>
                    </div>`;
      newsHtml += news;
    });
  })
  .then((result) => {
    // console.log(result);
    newsAccordion.innerHTML = newsHtml;
  })
  .catch((error) => {
    console.log(error);
  });
