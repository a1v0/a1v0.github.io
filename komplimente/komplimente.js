function komplimente() {
    const name = nameWithCaps(document.getElementById("name").value);
    const output = document.getElementById("output");
    output.innerHTML = "";
    output.style.display = "block";

    let compliments;
    if (document.getElementById("du").checked) {
        compliments = [
            `${name}, du bist wunderbar!`,
            `Immer bin ich dankbar, dass es dich gibt.`,
            `Ich wünsche, ich hätte so einen coolen Namen wie ${name}.`,
            `Deine lieben Worte sind Musik in meinen Ohren`,
            `Du hast eine äußerst sportliche Figur, ${name}. Ganz wie in einer Zeitschrift.`
        ];
    } else {
        compliments = [
            `${name}, Ihre Größe zu quantifizieren, würde Ihnen einen Bärendienst erweisen.`,
            `Sie bringen Farbe in einen grauen Tag.`,
            `Ich muss an Sie denken, immer wenn ich mich in einem Museum befinde. "${name} ist so gebildet", denke ich mir dann.`,
            `Geben Sie mir doch bitte den Namen Ihres Zahnarztes: Sie haben so schöne Zähne.`,
            `Sie sind völlig über jeden Vorwurf erhaben, ${name}.`
        ];
    }

    let i = 0;
    const interval = setInterval(() => {
        output.innerHTML += `<p>${compliments[i++]}</p>`;
        if (i >= compliments.length) clearInterval(interval);
    }, 2000);
}

function nameWithCaps(name) {
    name = name.split("");
    name[0] = name[0].toUpperCase();
    return name.join("");
}
