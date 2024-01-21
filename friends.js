let arr = ["Kate", "Yelena", "Natasha"];
    let friends = [
        { name: "Kate", roll: 1, image: "https://images.app.goo.gl/kKFGBAndWC4cpdfy7" },
        { name: "Yelena", roll: 2, image: "https://images.app.goo.gl/Zkq1m21hUs3j1fzMA" },
        { name: "Natasha", roll: 3, image: "https://images.app.goo.gl/w8Vsi15uDmSnb1QB9" },
    ];

    let friendsElem = document.querySelector('#friendsWrapper');
    friendsElem.style.display = "flex";
    friendsElem.style.flexWrap = "wrap";
    friendsElem.style.gap = "10px";

    friends.forEach((friend, index) => {
        // Wrapper
        let friendItem = document.createElement('div');
        friendItem.classList.add("friend-item");
        friendItem.style.display = "flex";
        friendItem.style.flexDirection = "column";

        // Image
        let imageElem = document.createElement('img');
        imageElem.style.borderRadius = "10px";
        imageElem.style.width = "100px";
        imageElem.style.height = "100px";
        imageElem.src = friend.image;

        // Name
        let nameElem = document.createElement('span');
        nameElem.innerText = friend.name;

        // Roll
        let rollElem = document.createElement('span');
        rollElem.innerText = friend.roll;

        // Inserting new items into the wrapper
        friendItem.appendChild(imageElem);
        friendItem.appendChild(nameElem);
        friendItem.appendChild(rollElem);

        // Inserting new items into the container
        friendsElem.appendChild(friendItem);
    });

    const Navbar = () =>{
        
        return(
            <nav></nav>
        )

    }
    export default Navbar;