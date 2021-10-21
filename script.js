const dados = [

    {
        titulo: "Entertainment",
    },

    {
        titulo: "Sports",
    },

    {
        titulo: "Food",
    },

    {
        titulo: "Health",
    },

    {
        titulo: "Curiosities",
    },

    {
        titulo: "Magic Kingdom Theme Park",
        img: "https://media.discordapp.net/attachments/839096248975491082/900488270566293564/look_dos_personagens_2_1.png",
        texto: "Magic Kingdom Theme Park (at Walt Disney World Resort) Based on Disney, the world's most famous amusement theme park: Magic Kingdom is one of the best vacation travel options you could ever imagine. With lots of great food, and the funniest attractions, this Theme Park will definitely be at the top of your travel list. Being the most visited park in the world isn't easy, so the Magic Kingdom park must hold the best parades, the most interesting hidden adventures, and the happiest and sunniest people you could meet! This is the most magical place you will ever see! Full of princes and princesses, beautiful theaters, and attractions that will most likely make you cry. Make sure you already have your ticket to visit these beautiful activities sometime!" 
    },

    {
        titulo: "Which One is Better?",
        img: "https://media.discordapp.net/attachments/839096248975491082/900488713560289310/fall-movies-index-1628968089.png?width=597&height=593",
        texto: "The movies The Conjuring 3 (horror) and Five feet apart (romance/drama) are quite different in their characteristics. Five feet apart is better than the conjuring 3 at demonstrating the character's feelings and far away more reflective because of the character's life history.[...]" 
    },

    {
        titulo: "All About Comparing ",
        img: "https://www.estudokids.com.br/wp-content/uploads/2019/06/esportes-ingles.jpg",
        texto: "There are several differences between volleyball and football. Football is older than volleyball, it was created in China 5,000 years ago, while volleyball was created approximately 100 years ago in the United States.[...]" 
    },

    {
        titulo: "Birthday’s origin",
        img: "https://cdn.pumpitupparty.com/uploads/2020/08/happy-birthday-candles-picture-id1202880334.jpg",
        texto: "In ancient Rome, there was the habit of celebrating the birthday of a person. There weren’t parties like we know today, but cakes were prepared and offers were made.[...]" 
    },

    {
        titulo: "Walk of fame",
        img: "https://media.discordapp.net/attachments/839096248975491082/900487887303368715/hollywood-walk-of-fame.png?width=960&height=540",
        texto: "Even if you have never visited Los Angeles, you have probably heard about the most famous sidewalk in the world: the Hollywood Walk of Fame. Every year, around 10 million[...]" 
    },

    {
        titulo: "Department Store",
        img: "https://media.discordapp.net/attachments/839096248975491082/900488203054751804/herald-sq-2.png",
        texto: "The first department store was created in Paris, in 1850. It was conceived as a big place with a lot of options in products and brands. They wouldn’t sell just a specific product:[...]"
    },

    {
        titulo: "The first North American capital",
        img: "https://images-ext-2.discordapp.net/external/V-h2zJcI2GJ0zhMNGOyUwzpQdnz9WqmG129hsDkdHOM/https/www.viagempreferida.com.br/wp-content/uploads/2020/01/estatua-da-liberdade-nova-york.jpg?width=764&height=593",
        texto: "New York was the first American national capital, from 1785 to 1790. The city played an important role in the establishment of a new government after the defeat of the British and the Treaty of Paris, which ended the post-American[...]" 
    }

];

window.addEventListener("DOMContentLoaded", function(){

    const Entertainment = document.querySelector("#t1");
    Entertainment.innerHTML = dados[0].titulo;

    const Sports = document.querySelector("#t2");
    Sports.innerHTML = dados[1].titulo;

    const Food = document.querySelector("#t3");
    Food.innerHTML = dados[2].titulo;

    const Health = document.querySelector("#t4");
    Health.innerHTML = dados[3].titulo;

    const Curiosities = document.querySelector("#t5");
    Curiosities.innerHTML = dados[4].titulo;

    const MagicKingdom = document.querySelector("#t6");
    MagicKingdom.innerHTML = dados[5].titulo;

    const Birthday = document.querySelector("#t8");
    Birthday.innerHTML = dados[8].titulo;

    const Walk = document.querySelector("#t10");
    Walk.innerHTML = dados[9].titulo;

    const Store = document.querySelector("#t12");
    Store.innerHTML = dados[10].titulo;

    const WhichOne = document.querySelector("#t17");
    WhichOne.innerHTML = dados[6].titulo;

    const AllAbout = document.querySelector("#t19");
    AllAbout.innerHTML = dados[7].titulo;

    const NewYork = document.querySelector("#t21");
    NewYork.innerHTML = dados[11].titulo;




    const MagicImg = document.querySelector("#ImagemG");
    MagicImg.src = dados[5].img;

    const EsporteImg = document.querySelector("#t15");
    EsporteImg.src = dados[7].img;

    const WalkofFameImg = document.querySelector("#Imagem2");
    WalkofFameImg.src = dados[9].img;

    const NYImg = document.querySelector("#t16");
    NYImg.src = dados[11].img;

    const MoviesImg = document.querySelector("#t14");
    MoviesImg.src = dados[6].img;

    const BirthdayImg = document.querySelector("#ImagemI");
    BirthdayImg.src = dados[8].img;

    const StoreImg = document.querySelector("#Imagem3");
    StoreImg.src = dados[10].img;




    const MagicP = document.querySelector("#t7");
    MagicP.innerHTML = dados[5].texto;

    const EsporteP = document.querySelector("#t20");
    EsporteP.innerHTML = dados[7].texto;

    const WalkofFameP = document.querySelector("#t11");
    WalkofFameP.innerHTML = dados[9].texto;

    const NYP= document.querySelector("#t13");
    NYP.innerHTML = dados[10].texto;

    const MoviesP = document.querySelector("#t18");
    MoviesP.innerHTML = dados[6].texto;

    const BirthdayP = document.querySelector("#t9");
    BirthdayP.innerHTML = dados[8].texto;

    const StoreP = document.querySelector("#t22");
    StoreP.innerHTML = dados[11].texto;
})