document.getElementById("button").addEventListener("click", function() {
    let scripture = document.getElementById("input").value;

    console.log(scripture);

    if (scripture !== "") {
        const newButton = document.createElement("button");
        newButton.innerHTML="\u274C";

        const newList = document.createElement("li");
        newList.textContent = scripture;
        newList.appendChild(newButton);

        document.getElementById("chapterList").appendChild(newList);

        document.getElementById("input").value = "";
    }
});