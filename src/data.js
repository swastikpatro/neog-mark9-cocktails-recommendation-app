import "./styles.css";

const data = [
  {
    name: "151 Florida Bushwacker",
    image:
      "https://www.thecocktaildb.com/images/media/drink/rvwrvv1468877323.jpg",
    id: "14588",
    category: "Shake",
    rating: 2,
    desc: "This is 151 Florida Bushwacker. this is the desc of the product. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda placeat impedit, ratione earum tempora?",
  },
  {
    name: "Avalanche",
    image:
      "https://www.thecocktaildb.com/images/media/drink/uppqty1472720165.jpg",
    id: "16419",
    category: "Shake",
    rating: 4.5,
    desc: "This is Avalanche. this is the desc of the product. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda placeat impedit, ratione earum tempora?",
  },
  {
    name: "Baby Eskimo",
    image:
      "https://www.thecocktaildb.com/images/media/drink/wywrtw1472720227.jpg",
    id: "15511",
    category: "Shake",
    rating: 3.2,
    desc: "This is Baby Eskimo. this is the desc of the product. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda placeat impedit, ratione earum tempora?",
  },
  {
    name: "Banana Milk Shake",
    image:
      "https://www.thecocktaildb.com/images/media/drink/rtwwsx1472720307.jpg",
    id: "12654",
    category: "Shake",
    rating: 1.3,
    desc: "This is Banana Milk Shake. this is the desc of the product. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda placeat impedit, ratione earum tempora?",
  },
  {
    name: "Banana Strawberry Shake",
    image:
      "https://www.thecocktaildb.com/images/media/drink/vqquwx1472720634.jpg",
    id: "12656",
    category: "Shake",
    rating: 3.7,
    desc: "This is Banana Strawberry Shake. this is the desc of the product. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda placeat impedit, ratione earum tempora?",
  },
  {
    name: "410 Gone",
    image:
      "https://www.thecocktaildb.com/images/media/drink/xtuyqv1472669026.jpg",
    id: "12730",
    category: "Ordinary",
    rating: 2.3,
    desc: "This is 410 Gone. this is the desc of the product. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda placeat impedit, ratione earum tempora?",
  },
  {
    name: "501 Blue",
    image:
      "https://www.thecocktaildb.com/images/media/drink/ywxwqs1461867097.jpg",
    id: "12732",
    category: "Ordinary",
    rating: 4.1,
    desc: "This is 501 Blue. this is the desc of the product. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda placeat impedit, ratione earum tempora?",
  },
  {
    name: "A. J.",
    image:
      "https://www.thecocktaildb.com/images/media/drink/l74qo91582480316.jpg",
    id: "12734",
    category: "Ordinary",
    rating: 4.8,
    desc: "This is A. J.. this is the desc of the product. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda placeat impedit, ratione earum tempora?",
  },
  {
    name: "Adam",
    image:
      "https://www.thecocktaildb.com/images/media/drink/v0at4i1582478473.jpg",
    id: "12736",
    category: "Ordinary",
    rating: 4.5,
    desc: "This is Adam. this is the desc of the product. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda placeat impedit, ratione earum tempora?",
  },
  {
    name: "Alexander",
    image:
      "https://www.thecocktaildb.com/images/media/drink/0clus51606772388.jpg",
    id: "12738",
    category: "Ordinary",
    rating: 3.1,
    desc: "This is Alexander. this is the desc of the product. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda placeat impedit, ratione earum tempora?",
  },
  {
    name: "Boomerang",
    image:
      "https://www.thecocktaildb.com/images/media/drink/3m6yz81504389551.jpg",
    id: "12744",
    category: "Ordinary",
    rating: 0.9,
    desc: "This is Boomerang. this is the desc of the product. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda placeat impedit, ratione earum tempora?",
  },
  {
    name: "110 in the shade",
    image:
      "https://www.thecocktaildb.com/images/media/drink/xxyywq1454511117.jpg",
    id: "15423",
    category: "Beer",
    rating: 3.2,
    desc: "This is 110 in the shade. this is the desc of the product. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda placeat impedit, ratione earum tempora?",
  },
  {
    name: "Black & Tan",
    image:
      "https://www.thecocktaildb.com/images/media/drink/rwpswp1454511017.jpg",
    id: "13282",
    category: "Beer",
    rating: 4.3,
    desc: "This is Black & Tan. this is the desc of the product. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda placeat impedit, ratione earum tempora?",
  },
  {
    name: "Black and Brown",
    image:
      "https://www.thecocktaildb.com/images/media/drink/wwuvxv1472668899.jpg",
    id: "16403",
    category: "Beer",
    rating: 4.7,
    desc: "This is Black and Brown. this is the desc of the product. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda placeat impedit, ratione earum tempora?",
  },
  {
    name: "Buccaneer",
    image:
      "https://www.thecocktaildb.com/images/media/drink/upvtyt1441249023.jpg",
    id: "17035",
    category: "Beer",
    rating: 2.2,
    desc: "This is Buccaneer. this is the desc of the product. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda placeat impedit, ratione earum tempora?",
  },
  {
    name: "1-900-FUK-MEUP",
    image:
      "https://www.thecocktaildb.com/images/media/drink/uxywyw1468877224.jpg",
    id: "15395",
    category: "Shot",
    rating: 4.1,
    desc: "This is 1-900-FUK-MEUP. this is the desc of the product. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda placeat impedit, ratione earum tempora?",
  },
  {
    name: "24k nightmare",
    image:
      "https://www.thecocktaildb.com/images/media/drink/yyrwty1468877498.jpg",
    id: "17060",
    category: "Shot",
    rating: 4.8,
    desc: "This is 24k nightmare. this is the desc of the product. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda placeat impedit, ratione earum tempora?",
  },
  {
    name: "252",
    image:
      "https://www.thecocktaildb.com/images/media/drink/rtpxqw1468877562.jpg",
    id: "15288",
    category: "Shot",
    rating: 3.3,
    desc: "This is 252. this is the desc of the product. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda placeat impedit, ratione earum tempora?",
  },
  {
    name: "3 Wise Men",
    image:
      "https://www.thecocktaildb.com/images/media/drink/wxqpyw1468877677.jpg",
    id: "13899",
    category: "Shot",
    rating: 2.8,
    desc: "This is 3 Wise Men. this is the desc of the product. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda placeat impedit, ratione earum tempora?",
  },
  {
    name: "747",
    image:
      "https://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg",
    id: "14229",
    category: "Shot",
    rating: 3.7,
    desc: "This is 747. this is the desc of the product. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda placeat impedit, ratione earum tempora?",
  },
  {
    name: "155 Belmont",
    image:
      "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
    id: "15346",
    category: "Cocktail",
    rating: 3.5,
    desc: "This is 155 Belmont. this is the desc of the product. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda placeat impedit, ratione earum tempora?",
  },
  {
    name: "57 Chevy with a White License Plate",
    image:
      "https://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg",
    id: "14029",
    category: "Cocktail",
    rating: 3.1,
    desc: "This is 57 Chevy with a White License Plate. this is the desc of the product. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda placeat impedit, ratione earum tempora?",
  },
  {
    name: "747 Drink",
    image:
      "https://www.thecocktaildb.com/images/media/drink/i9suxb1582474926.jpg",
    id: "178318",
    category: "Cocktail",
    rating: 4.7,
    desc: "This is 747 Drink. this is the desc of the product. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda placeat impedit, ratione earum tempora?",
  },
  {
    name: "9 1/2 Weeks",
    image:
      "https://www.thecocktaildb.com/images/media/drink/xvwusr1472669302.jpg",
    id: "16108",
    category: "Cocktail",
    rating: 1.7,
    desc: "This is 9 1/2 Weeks. this is the desc of the product. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda placeat impedit, ratione earum tempora?",
  },
  {
    name: "A Gilligan's Island",
    image:
      "https://www.thecocktaildb.com/images/media/drink/wysqut1461867176.jpg",
    id: "16943",
    category: "Cocktail",
    rating: 2.7,
    desc: "This is A Gilligan's Island. this is the desc of the product. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda placeat impedit, ratione earum tempora?",
  },
  {
    name: "A True Amaretto Sour",
    image:
      "https://www.thecocktaildb.com/images/media/drink/rptuxy1472669372.jpg",
    id: "17005",
    category: "Cocktail",
    rating: 3.9,
    desc: "This is A True Amaretto Sour. this is the desc of the product. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda placeat impedit, ratione earum tempora?",
  },
  {
    name: "A.D.M. (After Dinner Mint)",
    image:
      "https://www.thecocktaildb.com/images/media/drink/ruxuvp1472669600.jpg",
    id: "14560",
    category: "Cocktail",
    rating: 3.7,
    desc: "This is A.D.M. (After Dinner Mint). this is the desc of the product. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda placeat impedit, ratione earum tempora?",
  },
].sort((a, b) => a.rating - b.rating);

export default data;
