const wrapper = document.querySelector(".wrapper"), searchInput = wrapper.querySelector("input"), infoText = wrapper.querySelector(".info-text"), synonyms = wrapper.querySelector(".synonyms .list");
//else statement adds definition components
function data(result, word) {
    if (result.title) infoText.innerHTML = `Can't find the meaning of <span>"${word}"</span>.`;
    else {
        wrapper.classList.add("active");
        let definitions = result[0].meanings[0].definitions[0], phontetics = `${result[0].meanings[0].partOfSpeech}  /${result[0].phonetics[0].text}/`;
        document.querySelector(".word p").innerText = result[0].word;
        document.querySelector(".word span").innerText = phontetics;
        document.querySelector(".meaning span").innerText = definitions.definition;
        document.querySelector(".example span").innerText = definitions.example;
        //if there is a synonym, the synonym section will be displayed.
        if (definitions.synonyms[0] == undefined) synonyms.parentElement.style.display = "none";
        else {
            synonyms.parentElement.style.display = "block";
            synonyms.innerHTML = "";
            for(let i = 0; i < 5; i++){
                let tag = `<span onclick="search('${definitions.synonyms[i]}')">${definitions.synonyms[i]},</span>`;
                tag = i == 4 ? tag = `<span onclick="search('${definitions.synonyms[i]}')">${definitions.synonyms[4]}</span>` : tag;
                synonyms.insertAdjacentHTML("beforeend", tag);
            }
        }
    }
}
//search function
function search(word) {
    fetchApi(word);
    searchInput.value = word;
}
//dictionary API, retrieves content from word searched
function fetchApi(word) {
    wrapper.classList.remove("active");
    infoText.style.color = "#000";
    infoText.innerHTML = `Press SHOW/HIDE to reveal results.`;
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(url).then((response)=>response.json()
    ).then((result)=>data(result, word)
    ).catch(()=>{
        infoText.innerHTML = `Can't find the meaning of <span>"${word}"</span>.`;
    });
}
//searches word after user inputs enter
searchInput.addEventListener("keyup", (e)=>{
    let word = e.target.value.replace(/\s+/g, ' ');
    if (e.key == "Enter" && word) fetchApi(word);
});
//button toggle for showing dictionary contents
function hideDef() {
    var x = document.getElementById("diccontents");
    if (x.style.display === "none") x.style.display = "block";
    else x.style.display = "none";
}

//# sourceMappingURL=index.129e2507.js.map
