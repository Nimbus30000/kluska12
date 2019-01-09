let zmienna = 10;

/*while (zmienna > 0) {
    console.log(zmienna)
    zmienna--;
}

do {
    console.log(zmienna);
    zmienna--;
}
while (zmienna > 0);*/

for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i == 8) {
        break;
    }
    else if(i==4){
        continue;
    }
}