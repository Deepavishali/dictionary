const url = "https://api.dictionaryapi.dev/api/v2/entries/en";
const result = document.getElementById("result");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url}/${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `<br>
            <p class="word-meaning">
            <h3>
                 Definition :&nbsp; ${data[0].meanings[0].definitions[0].definition}
                </p>
                </h3>

                <p class="word-example">
                <h3>
                  Example :&nbsp;  ${data[0].meanings[0].definitions[0].example || "Example not found"}
                  </h3>
                </p>`;
             })
        .catch(() => {
            result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
        });
});
