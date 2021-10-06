const monners = [
    {name:"standard",image:"https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2020/11/25/auto/800/786506354ea755361e072870e4ef5123.png?mod=v1_254a2659bb7b1c7ca12fab6609bef94c"},
    {name:"ginger",image:"https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2021/10/04/auto/800/6ab304dbafc7650e81b3b6de410332b7.png?mod=v1_89b31e9371d86dc6e4d96e3d80218cbd"},
    {name:"absolutes zero",image:"https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2016/05/30/auto/800/789a69dbf8d1cd184227a914653fae85.png?mod=v1_eb16e0188b13655f6d7d5a2346226550"},
    {name:"the docter",image: "https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2020/11/25/auto/800/5f6f4f7d9e8903e988fcd41fa09fec9f.png?mod=v1_7c24b94e1e2d6c8d0f4d7fea76590c1b"},
    {name:"Hamilton", image:"https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2018/05/10/auto/800/fd74cdb2bf3467cd78d1ca0a4d9ab29d.png?mod=v1_3fb90284f50ff17c71de3ff0490812de"},
    {name:"ultra paradise",image: "https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2020/07/06/auto/800/fc9ea2b2525da898cdb0cd418bb6dc45.png?mod=v1_7bc1a34855bd9b67f0b3aed3da06821f"},
    {name:"ultra",image: "https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2016/10/05/auto/800/cd3a532014dc28421933f426d921f6da.png?mod=v1_da6f0dde227e368327ddd3b1dc23409c"},
    {name:"ultra citron", image:"https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2017/09/04/auto/800/0d08b8a91cc88ddf95151ef3144596e6.png?mod=v1_eab61302197adbcb0a6763d8fece6fef"},
    {name:"ultra violet", image:"https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2019/03/26/auto/800/063b8eac1a68fb111d497c3c6fb984c7.png?mod=v1_e8eff231a4765e81431b7ba26c074002"},
    {name:"mango loco", image:"https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2019/04/18/auto/800/2c59d3eb36500e6908f5987d11993bd8.png?mod=v1_f7d93a1aca4f8e98ee0734a2a21e72e0"},
    {name:"pacific punch", image:"https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2021/03/17/auto/800/ec4aefd568154202aee1d405b327aaeb.png?mod=v1_ec1b2610582e4feacef7cd11742ec5bb"},
    {name:"pipeline punch", image:"https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2020/03/05/auto/800/5c815ea59fda9af66ebb1e9c5f2d8039.png?mod=v1_85981f86f457c447a176a6cb55b6e24a"},
    {name:"punch", image: "https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2020/04/20/auto/800/b8a6ce93b2888a8003cfdd8b4f4ebdc2.png?mod=v1_6c0a12b713a933c28b654fc9b0e5449c"}
]

const expressoMonners = [
    {name:"espresso & milk", image:"https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2021/06/08/auto/800/7ee51fa2ea33054759a1214f116a68a4.png?mod=v1_8a35f825acf30200c1a440cbb70b1e92" },
    {name:"vanilla espresso", image: "https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2021/06/08/auto/800/4e3380a94faae0d6d839ae051e67d45e.png?mod=v1_57bdbd25161eba1843e0776c220161b3"}
]

function GetRandomMonner(includeExpresso){
    let monnerList;
    if(includeExpresso){
        monnerList = monners.concat(expressoMonners);
    }
    else{
        monnerList = monners;
    }

    return monnerList[Math.floor(Math.random() * monnerList.length) ];
}

function GetTodaysMonner(includeExpresso){
    let monnerList;
    if(includeExpresso){
        monnerList = monners.concat(expressoMonners);
    }
    else{
        monnerList = monners;
    }

    //getting the date
    let d = new Date();
    
    return monnerList[(d.getDate() + d.getMonth().toString()) % monnerList.length];
}

let todaysMonner = GetTodaysMonner(true);
document.body.innerHTML += "<h2>" + todaysMonner.name + "</h2>";
document.body.innerHTML += "<img src = \"" + todaysMonner.image + "\" + alt = \" picture of " + todaysMonner.name + "\">";
