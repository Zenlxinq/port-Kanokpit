const listBody = document.querySelector(".ject2");

fetch("data.json")
  .then((response) => response.text())
  .then((text) => {

    console.log(text)
    const projectlist = JSON.parse(text)
    console.log(projectlist)

    for (const project of projectlist) {
      const div = document.createElement("div");
      div.innerHTML = `
        <div class="ya">
          <div class = "yayaya">
            <img src="${project.image1}" alt="ya" width="200">
            <img src="${project.image2}" alt="ya" width="200">
          </div>
          <div class = "rum">
          <h3>${project.title}</h3>
              <p class="word">${project.desc}</p>
          </div>
        </div>
      `;
      listBody.append(div);
    }
  });
