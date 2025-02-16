/*const liste = document.getElementById("liste");
for (i = 1; i <= 10; i++) {
    console.log(i);
    const item = document.createElement("li");
    item.innerHTML += `${i}`;
    liste.appendChild(item);
}*/


for (i = 1; i <= 10; i++) {
    console.log(i);
    document.getElementById("liste").innerHTML += `<li>${i}`;
}