import item1 from "./images/item1.jpg";
import item2 from "./images/item2.jpg";
import item3 from "./images/item3.jpg";
import item4 from "./images/item4.jpg";
import item5 from "./images/item5.jpg";
const menu = {
   lot1:{
       item1:{
           name:"Regular breakfast",
           image:item1,
           desc: "A complex breakfast with multiple options for both hot and cold buffet",
           price:24.95,
           status:"available"
       },
       item2:{
           name:"Continental breakfast",
           image:item2,
           desc: "The buffet without a hot section",
           price:17.95,
           status:"available"
       }
    },
    lot2:{
        item3:{
            name:"Hot selection",
            image:item3,
            desc: "Any combination made out of hot buffet",
            price:11.95,
            status:"available"
        },
        item4:{
            name:"Toast&coffee",
            image:item4,
            desc: "A lovely combination of freshly made croiissant and house coffee",
            price:7.95,
            status:"available"
        },
        item5:{
            name:"Coffee",
            image:item5,
            desc: "A selection of house brewed coffee",
            price:3.45,
            status:"available"
        },
        item6:{
            name:"Continental breakfast",
            image:item2,
            desc: "The buffet without a hot section",
            price:17.95,
            status:"available"
        },
        item7:{
            name:"Regular breakfast",
            image:item1,
            desc: "A complex breakfast with multiple options for both hot and cold buffet",
            price:24.95,
            status:"available"
        }
    }
};
export default menu;