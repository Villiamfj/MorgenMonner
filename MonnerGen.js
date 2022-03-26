const monners = [
    {name:"THE ORIGINAL",image:"https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2020/11/25/auto/800/786506354ea755361e072870e4ef5123.png?mod=v1_254a2659bb7b1c7ca12fab6609bef94c"},
    {name:"MULE",image:"https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2021/10/04/auto/800/6ab304dbafc7650e81b3b6de410332b7.png?mod=v1_89b31e9371d86dc6e4d96e3d80218cbd"},
    {name:"ABSOLUTELY ZERO",image:"https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2016/05/30/auto/800/789a69dbf8d1cd184227a914653fae85.png?mod=v1_eb16e0188b13655f6d7d5a2346226550"},
    {name:"THE DOCTOR",image: "https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2020/11/25/auto/800/5f6f4f7d9e8903e988fcd41fa09fec9f.png?mod=v1_7c24b94e1e2d6c8d0f4d7fea76590c1b"},
    {name:"ULTRA PARADISE",image: "https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2020/07/06/auto/800/fc9ea2b2525da898cdb0cd418bb6dc45.png?mod=v1_7bc1a34855bd9b67f0b3aed3da06821f"},
    {name:"ULTRA",image: "https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2016/10/05/auto/800/cd3a532014dc28421933f426d921f6da.png?mod=v1_da6f0dde227e368327ddd3b1dc23409c"},
    {name:"ULTRA VIOLET", image:"https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2019/03/26/auto/800/063b8eac1a68fb111d497c3c6fb984c7.png?mod=v1_e8eff231a4765e81431b7ba26c074002"},
    {name:"MANGO LOCO", image:"https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2019/04/18/auto/800/2c59d3eb36500e6908f5987d11993bd8.png?mod=v1_f7d93a1aca4f8e98ee0734a2a21e72e0"},
    {name:"PACIFIC PUNCH", image:"https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2021/03/17/auto/800/ec4aefd568154202aee1d405b327aaeb.png?mod=v1_ec1b2610582e4feacef7cd11742ec5bb"},
    {name:"PIPELINE PUNCH", image:"https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2020/03/05/auto/800/5c815ea59fda9af66ebb1e9c5f2d8039.png?mod=v1_85981f86f457c447a176a6cb55b6e24a"},
    {name:"PUNCH", image: "https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2020/04/20/auto/800/b8a6ce93b2888a8003cfdd8b4f4ebdc2.png?mod=v1_6c0a12b713a933c28b654fc9b0e5449c"},
    {name:"ULTRA FIESTA MANGO", image: "https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2021/09/15/auto/800/dffd857b8f083ab2f9a09a29b3f2659f.png?mod=v1_c7563dba853f15d53d67f5bc77d87e54"},
    {name:"MONARCH", image: "https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2021/04/28/auto/800/201063f5686f36a2a612862b433b43ee.png?mod=v1_82024746902c3f79b4a91783471d1d7e"}
]

//inserting optionals
chrome.storage.sync.get(['espresso'], (resultBool) => {
    if(resultBool.espresso)
        monners.push(
            {
                name:"ESPRESSO & MILK", 
                image:"https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2021/06/08/auto/800/7ee51fa2ea33054759a1214f116a68a4.png?mod=v1_8a35f825acf30200c1a440cbb70b1e92"
            },
            {
                name:"VANILLA ESPRESSO", 
                image: "https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2021/06/08/auto/800/4e3380a94faae0d6d839ae051e67d45e.png?mod=v1_57bdbd25161eba1843e0776c220161b3"
            }
        );
});

chrome.storage.sync.get(['secretMenu'], (resultBool) => {
    if(resultBool.secretMenu)
        monners.push(
            {
                name:"hov ej det var en sport-cola!", 
                image: "https://www.sjobeck.dk/Admin/Public/GetImage.ashx?width=800&height=800&crop=5&FillCanvas=True&DoNotUpscale=true&Compression=75&image=/Files/Images/Produkter/134.png"
            });
});

function GetTodaysMonner(today,monnerList){
    //getting todays monner
    let todaysMonner = selectMonner(today,monnerList);

    //get yesterdays monner
    let yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    let yesterdaysMonner = selectMonner(yesterday,monnerList);
    
    //compare the two and return a different monner to yesterdays
    if(todaysMonner.name == yesterdaysMonner.name){
        return FindNewMonner(todaysMonner,today,monnerList);
    }
    else return todaysMonner;
}

//finds a new monner by comparing later result at adding a year to the date
function FindNewMonner(lastMonner,lastDate,monnerList){
    let newDate = new Date();
    newDate.setFullYear(lastDate.getFullYear() + 1);
    let newMonner = selectMonner(newDate,monnerList);

    if(newMonner.name == lastMonner.name){
        return FindNewMonner(newMonner,newDate,monnerList);
    }
    else return newMonner;
}

//selects a monner from the list by using the mulberry32 function with data from the date
function selectMonner(date,monnerList){
    return monnerList[Math.floor(mulberry32(date.getMonth().toString() + date.getDate().toString() + date.getFullYear())() * monnerList.length)];
}

//Code taken from https://github.com/bryc/code/blob/master/jshash/PRNGs.md
//original writer of the algorithm https://gist.github.com/tommyettinger/46a874533244883189143505d203312c
function mulberry32(a) {
    return function() {
      var t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}

let todaysMonner = GetTodaysMonner(new Date(),monners);
document.body.innerHTML += "<h2>" + todaysMonner.name + "</h2>";
document.body.innerHTML += "<img src = \"" + todaysMonner.image + "\" + alt = \" picture of " + todaysMonner.name + "\">";


