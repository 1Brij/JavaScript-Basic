//object destructing

const band=
{
    bandName: "led zeppelin",
    famousSong: "stairway to heaven"
};

const famousBand = band.bandName;
const famousMusic = band.famousSong;
console.log(famousBand, famousMusic);

//shortcut

 const band1=
 {
    bandName1: "TheLocalTrain",
    famousSong1: "AogeTumKabhi",
    DisbandYear1: 2022,
    popularLevel1: 1000/100
 };

 console.log(band1)
 let { bandName1, famousSong1, ...restProps}= band1;
 console.log(band);
 console.log(restProps);