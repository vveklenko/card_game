$startAlert = document.querySelector(".start-alert");

setTimeout(() => {
    $startAlert.style.display = "none";
    main();
}, 2000);

const deck = [
    {
        id: 1,
        name: "Wolverine",
        url: "https://comicvine1.cbsistatic.com/uploads/scale_small/5/57023/7469590-wolverinerb.jpg",
        attack: 3,
        health: 2,
        price: 2,
    },
    {
        id: 2,
        name: "Venom",
        url: "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/5704676-venom2016001-sandoval-c4208.jpg",
        attack: 5,
        health: 5,
        price: 6,
    },
    {
        id: 3,
        name: "Beast",
        url: "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111123579/7166569-x-force_vol_6_6_textless.jpg",
        attack: 3,
        health: 4,
        price: 5,
    },
    {
        id: 4,
        name: "Thor",
        url: "https://comicvine1.cbsistatic.com/uploads/scale_small/11139/111399535/7551809-img_202009248_1046.jpg",
        attack: 5,
        health: 6,
        price: 6,
    },
    {
        id: 5,
        name: "Superman",
        url: "https://comicvine1.cbsistatic.com/uploads/scale_small/13/132327/6507037-28872490_1638064799604695_1250122498385004714_n.jpg",
        attack: 6,
        health: 3,
        price: 5,
    },
    {
        id: 6,
        name: "Doctor Strange",
        url: "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124259/7261353-rco022_1582718254.jpg",
        attack: 3,
        health: 4,
        price: 4,
    },
    {
        id: 7,
        name: "Iron Man",
        url: "https://comicvine1.cbsistatic.com/uploads/scale_small/11118/111187046/7560188-0157851318-EeSKH3CWkAAiO2j.jpg",
        attack: 2,
        health: 3,
        price: 3,
    },
    {
        id: 8,
        name: "Thor",
        url: "https://comicvine1.cbsistatic.com/uploads/scale_small/11139/111399535/7551809-img_202009248_1046.jpg",
        attack: 4,
        health: 2,
        price: 4,
    },
    {
        id: 9,
        name: "Rage",
        url: "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/191721-89903-rage.jpg",
        attack: 1,
        health: 2,
        price: 1,
    },
    {
        id: 10,
        name: "Wonder Woman",
        url: "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124259/7823846-ekkbzkcli3kgfjkr3pfdxe-1280-80.jpg",
        attack: 2,
        health: 3,
        price: 2,
    },
    {
        id: 11,
        name: "Aquaman",
        url: "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124259/6813787-732893_589a6c3085173ec7e7877d12a86293fede9c7f36.jpg",
        attack: 4,
        health: 2,
        price: 3,
    },
    {
        id: 12,
        name: "Black Widow",
        url: "https://comicvine1.cbsistatic.com/uploads/scale_small/1/14487/7835285-b7f54158-13c3-4646-bbee-033a765c570d.jpeg",
        attack: 2,
        health: 6,
        price: 4,
    },
    {
        id: 13,
        name: "Selene",
        url: "https://comicvine1.cbsistatic.com/uploads/scale_small/3/36274/972876-selene.jpg",
        attack: 5,
        health: 6,
        price: 6,
    },
    {
        id: 14,
        name: "Batman",
        url: "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124259/7899178-batman_vol_3_86_textless.jpg",
        attack: 4,
        health: 2,
        price: 4,
    },
    {
        id: 15,
        name: "Scarlet Witch",
        url: "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111123579/5091566-7852300467-latest",
        attack: 3,
        health: 3,
        price: 3,
    },
    {
        id: 16,
        name: "Black Cat",
        url: "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124259/7825237-rco022_1614187008.jpg",
        attack: 2,
        health: 4,
        price: 2,
    },
    {
        id: 17,
        name: "Namor",
        url: "https://comicvine1.cbsistatic.com/uploads/scale_small/11114/111141742/7789914-namor_the_best_defense_vol_1_1_stevens_variant_textless.jpg",
        attack: 1,
        health: 3,
        price: 2,
    },
    {
        id: 18,
        name: "Strom",
        url: "https://comicvine1.cbsistatic.com/uploads/scale_small/11114/111141742/7786648-x-men_vol_5_18_black_history_month_variant_textless.jpg",
        attack: 1,
        health: 1,
        price: 1,
    },
    {
        id: 19,
        name: "Wasp",
        url: "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100647/6039335-wasp.jpg",
        attack: 1,
        health: 2,
        price: 1,
    },
    {
        id: 20,
        name: "Iron Fist",
        url: "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124259/7823911-ironfisthod2021004-scaled.jpg",
        attack: 2,
        health: 2,
        price: 2,
    },
];

function main() {
    const myInfo = {
        username: "Andrey",
        stones: 1,
        health: 20,
        cards: []
    }
    
    const enemyInfo = {
        username: "Sasha",
        stones: 1,
        health: 20,
        cards: []
    }
    
    let move = 0;
    let timerId = null;

    const $myCardsList = document.querySelector(".js_my_cards_list"),
        $enemyCardsList = document.querySelector(".js_enemy_cards_list"),
        $enemyStones = document.querySelector(".js_enemy_elixir"),
        $myStones = document.querySelector(".js_my_elixir"),
        $enemyMain = document.querySelector(".js_enemy_main"),
        $myHealth = document.querySelector(".js_my_health"),
        $enemyHealth = document.querySelector(".js_enemy_health"),
        $myMain = document.querySelector(".js_my_main"),
        $resultsModal = document.querySelector(".js_results_modal"),
        $modalInfo = document.querySelector(".js_modal_info"),
        $time = document.querySelector(".js_time");

    //helpers
    const makeRandomArr = (a, b) => {
        return Math.random() - 0.5;
    };

    const randomInteger = (min, max) => {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    };

    //main
    const appendCards = (curCards, parent) => {
        parent.innerHTML = "";

        for (let i = 0; i < 3; i++) {
            const { id, name, price, attack, health, url } = curCards[i];
            parent.insertAdjacentHTML(
                "beforeend",
                `
                <div class="card" data-id="${id}">
                    <img class="card-bg" src="${url}" alt="card">
                    <div class="card-info">
                        <div class="card-price">
                            <img src="../icons/gem.svg" alt="gem">
                            <span>${price}</span>
                        </div>
                        <div class="card-attack">
                            <img src="../icons/battle.svg" alt="battle">
                            <span>${attack}</span>
                        </div>
                        <div class="card-health">
                            <img src="../icons/heart.svg" alt="heart">
                            <span>${health}</span>
                        </div>
                    </div>
                    <div class="card-title">
                        <h6>${name}</h6>
                    </div>
                </div>
                `
            );
        }
    };

    const changeMove = () => {

        const myCards = document.querySelectorAll(
            ".js_my_cards_list .card"
        );

        const enemyCards = document.querySelectorAll(
            ".js_enemy_cards_list .card"
        );

        myCards.forEach((card) => {
            card.classList.remove("selectd", "active");
        });

        enemyCards.forEach((card) => {
            card.classList.remove("selectd", "active");
        });

        $myMain.classList.remove("active");
        $enemyMain.classList.remove("active");

        move = 1;
        step();
    }

    const displayTimer = () => {
        let seconds = 30;
        $time.textContent = seconds;
        timerId = setInterval(() => {
            seconds--;
            $time.textContent = seconds;

            if (seconds === 0) {
                changeMove();
            }
        }, 1000);
    }

    const displayHealth = () => {
        $myHealth.textContent = myInfo.health;
        $enemyHealth.textContent = enemyInfo.health;
    }

    const displayStones = () => {
        $enemyStones.textContent = enemyInfo.stones;
        $myStones.textContent = myInfo.stones;
    }

    function step() {
        if (myInfo.health <= 0) {
            myInfo.health = 0;
            displayHealth();
            $modalInfo.textContent = "LOSE!";
            $resultsModal.style.display = "flex";
        } else if (enemyInfo.health <= 0) {
            enemyInfo.health = 0;
            displayHealth();
            $modalInfo.textContent = "WIN!";
            $resultsModal.style.display = "flex";
        } else {
            clearInterval(timerId);
            displayTimer();

            if (!move) {
                //мой ход
                const myCards = document.querySelectorAll(
                    ".js_my_cards_list .card"
                );
    
                myCards.forEach((card) => {
                    const currentCard = deck.find(c => {
                        return c.id == card.dataset.id
                    });
    
                    if (currentCard.price <= myInfo.stones) {
                        card.classList.add("active");
                    }
    
                    card.addEventListener("click", myAttack);
                });
            } else {
                //ход противника
                const enemyCards = document.querySelectorAll(
                    ".js_enemy_cards_list .card"
                );
    
                for (let i = 0; i < enemyCards.length; i++) {
                    const currentCard = deck.find(c => {
                        return c.id == enemyCards[i].dataset.id
                    });
    
                    if (currentCard.price <= enemyInfo.stones) {
                        enemyCards[i].classList.add("active");
                        enemyCards[i].addEventListener("click", enemyAttack);
                        setTimeout(() => {
                            enemyCards[i].click();
                        }, 3000);
                        break;
                    }
                }
            }
        }
    }

    const damageCard = (enemyCard, myCard) => {
        if (myCard && myCard.classList.contains("selected")) {
            const mCard = myInfo.cards.find(c => {
                return c.id == myCard.dataset.id
            });

            const enCard = enemyInfo.cards.find(c => {
                return c.id == enemyCard.dataset.id
            });

            enCard.health -= mCard.attack;
            mCard.health -= enCard.attack;

            if (mCard.health <= 0) {
                myCard.style.display = "none";

                const newCards = myInfo.cards.filter((c => c.id !== mCard.id));
                const lastCard = deck.find(c => {
                    return c.id == mCard.id
                });
                newCards.push(lastCard);

                myInfo.cards = newCards;
            } 


            if (enCard.health <= 0) {
                enemyCard.style.display = "none";

                const newCards = enemyInfo.cards.filter((c => c.id !== enCard.id));
                const lastCard = Object.assign({}, deck.find(c => {
                    return c.id == enCard.id
                }));

                newCards.push(lastCard);

                enemyInfo.cards = newCards;
            }

            appendCards(myInfo.cards, $myCardsList);
            appendCards(enemyInfo.cards, $enemyCardsList);

            document.querySelectorAll(
                ".js_enemy_cards_list .card"
            ).forEach(card => {
                card.classList.remove("active");
            });

            $enemyMain.classList.remove("active");
            myInfo.stones = myInfo.stones < 6 ? ++myInfo.stones : myInfo.stones;
            displayStones();

            move = 1;
            step();
        }
    }

    const damageMyCard = (myCard, enemyCard) => {
        if (enemyCard && enemyCard.classList.contains("selected")) {
            const enCard = enemyInfo.cards.find(c => {
                return c.id == enemyCard.dataset.id
            });

            const mCard = myInfo.cards.find(c => {
                return c.id == myCard.dataset.id
            });

            enCard.health -= mCard.attack;
            mCard.health -= enCard.attack;

            if (enCard.health <= 0) {
                enemyCard.style.display = "none";

                const newCards = enemyInfo.cards.filter((c => c.id !== enCard.id));
                const lastCard = deck.find(c => {
                    return c.id == enCard.id
                });
                newCards.push(lastCard);

                enemyInfo.cards = newCards;
            } 


            if (mCard.health <= 0) {
                myCard.style.display = "none";

                const newCards = myInfo.cards.filter((c => c.id !== mCard.id));
                const lastCard = Object.assign({}, deck.find(c => {
                    return c.id == mCard.id
                }));

                newCards.push(lastCard);

                myInfo.cards = newCards;
            }

            appendCards(myInfo.cards, $myCardsList);
            appendCards(enemyInfo.cards, $enemyCardsList);

            document.querySelectorAll(
                ".js_my_cards_list .card"
            ).forEach(card => {
                card.classList.remove("active");
            });

            $myMain.classList.remove("active");
            enemyInfo.stones = enemyInfo.stones < 6 ? ++enemyInfo.stones : enemyInfo.stones;
            displayStones();

            move = 0;
            step();
        }
    }

    const damageMain = (myCard) => {
        if (myCard && myCard.classList.contains("selected")) {
            const card = myInfo.cards.find(c => {
                return c.id == myCard.dataset.id
            });
    
            enemyInfo.health -= card.attack;
    
            displayHealth();
            myCard.classList.remove("selected");
            myCard.style.display = "none";

            const newCards = myInfo.cards.filter((c => c.id !== card.id));
            const lastCard = Object.assign({}, deck.find(c => {
                return c.id == card.id
            }));

            newCards.push(lastCard);

            myInfo.cards = newCards;
            appendCards(myInfo.cards, $myCardsList);
            
            document.querySelectorAll(
                ".js_enemy_cards_list .card"
            ).forEach(card => {
                card.classList.remove("active");
            });

            $enemyMain.classList.remove("active");

            myInfo.stones = myInfo.stones < 6 ? ++myInfo.stones : myInfo.stones;
            displayStones();

            move = 1;
            step();
        }
    }

    const damageMyMain = (enemyCard) => {
        if (enemyCard && enemyCard.classList.contains("selected")) {
            const card = enemyInfo.cards.find(c => {
                return c.id == enemyCard.dataset.id
            });
    
            myInfo.health -= card.attack;
    
            displayHealth();
            enemyCard.classList.remove("selected");
            enemyCard.style.display = "none";

            const newCards = enemyInfo.cards.filter((c => c.id !== card.id));
            const lastCard = Object.assign({}, deck.find(c => {
                return c.id == card.id
            }));

            newCards.push(lastCard);

            enemyInfo.cards = newCards;
            appendCards(enemyInfo.cards, $enemyCardsList);
            
            document.querySelectorAll(
                ".js_my_cards_list .card"
            ).forEach(card => {
                card.classList.remove("active");
            });

            $myMain.classList.remove("active");

            enemyInfo.stones = enemyInfo.stones < 6 ? ++enemyInfo.stones : enemyInfo.stones;
            displayStones();

            move = 0;
            step();
        }
    }

    const myAttack = (e) => {
        const selectedCard = e.target;

        selectedCard.classList.toggle("selected");

        if (selectedCard.classList.contains("selected")) {
            document.querySelectorAll(
                ".js_my_cards_list .card"
            ).forEach(card => {
                card.classList.remove("active");
            });

            const enemyCards = document.querySelectorAll(
                ".js_enemy_cards_list .card"
            );

            enemyCards.forEach((card) => {
                card.classList.add("active");

                card.addEventListener("click", () => {
                    card.style.transform = "translateY(100px)";
                    selectedCard.style.transform = "translateY(-100px)";

                    setTimeout(() => {
                        card.style.transform = "translateY(0px)";
                        selectedCard.style.transform = "translateY(0px)";
                        damageCard(card, selectedCard);
                    }, 1000)
                });
            });

            $enemyMain.addEventListener("click", () => {
                selectedCard.style.transform = "translateY(-100px)";
                $enemyMain.style.borderColor = "red";

                setTimeout(() => {
                    selectedCard.style.transform = "translateY(0px)";
                    $enemyMain.style.borderColor = "rgb(14, 12, 41)";
                    damageMain(selectedCard);
                }, 1000)
            });

            $enemyMain.classList.add("active");
        } else {
            document.querySelectorAll(
                ".js_my_cards_list .card"
            ).forEach(card => {
                const currentCard = deck.find(c => {
                    return c.id == card.dataset.id
                });

                if (currentCard.price <= myInfo.stones) {
                    card.classList.add("active");
                }
            });

            const enemyCards = document.querySelectorAll(
                ".js_enemy_cards_list .card"
            );

            console.log("wedwe")

            enemyCards.forEach((card) => {
                card.classList.remove("active")
            })

            $enemyMain.classList.remove("active");
        }
    }

    const enemyAttack  = (e) => {
        const selectedCard = e.target;

        selectedCard.classList.toggle("selected");

            if (selectedCard.classList.contains("selected")) {
                document.querySelectorAll(
                    ".js_enemy_cards_list .card"
                ).forEach(card => {
                    card.classList.remove("active");
                });
    
                const myCards = document.querySelectorAll(
                    ".js_my_cards_list .card"
                );
    
                myCards.forEach((card) => {
                    card.classList.add("active");
    
                    card.addEventListener("click", () => {
                        card.style.transform = "translateY(-100px)";
                        selectedCard.style.transform = "translateY(10px)";
                    
                        setTimeout(() => {
                            card.style.transform = "translateY(0px)";
                            selectedCard.style.transform = "translateY(0px)";
                            damageMyCard(card, selectedCard);
                        }, 1000)
                    });
                });
    
                $myMain.addEventListener("click", () => {
                    selectedCard.style.transform = "translateY(100px)";
                    $myMain.style.borderColor = "red";
                
                    setTimeout(() => {
                        selectedCard.style.transform = "translateY(0px)";
                        $myMain.style.borderColor = "rgb(14, 12, 41)";

                        damageMyMain(selectedCard);
                    }, 1000)
                });

                const random = randomInteger(0, 17);

                setTimeout(() => {
                    if (random >= 3) {
                        $myMain.click();
                    } else {
                        myCards[random].click();
                    }
                }, 3000)
                
                $myMain.classList.add("active");
            } else {
                document.querySelectorAll(
                    ".js_enemy_cards_list .card"
                ).forEach(card => {
                    const currentCard = deck.find(c => {
                        return c.id == card.dataset.id
                    });
    
                    if (currentCard.price <= enemyInfo.stones) {
                        card.classList.add("active");
                    }
                });
    
                const myCards = document.querySelectorAll(
                    ".js_my_cards_list .card"
                );
    
                myCards.forEach((card) => {
                    card.classList.remove("active")
                })
    
                $myMain.classList.remove("active");
            }
    }

    const initGame = () => {
        //for me
        for (let i = 0; i < deck.length; i++) {
            myInfo.cards[i] = Object.assign({}, deck[i]);
        }

        let temp = false;
    
        myInfo.cards = myInfo.cards.sort(makeRandomArr);

        for (let i = 0; i < 3; i++) {
            if (myInfo.cards[i].price == 1) {
                temp = true;
                break;
            }
        }

        while (!temp) {
            myInfo.cards = myInfo.cards.sort(makeRandomArr);

            for (let i = 0; i < 3; i++) {
                if (myInfo.cards[i].price == 1) {
                    temp = true;
                    break;
                }
            }
        }

        appendCards(myInfo.cards, $myCardsList);

        temp = false;

        //for enemy

        for (let i = 0; i < deck.length; i++) {
            enemyInfo.cards[i] = Object.assign({}, deck[i]);
        }

        enemyInfo.cards = enemyInfo.cards.sort(makeRandomArr);

        for (let i = 0; i < 3; i++) {
            if (enemyInfo.cards[i].price == 1) {
                temp = true;
                break;
            }
        }

        while (!temp) {
            enemyInfo.cards = enemyInfo.cards.sort(makeRandomArr);

            for (let i = 0; i < 3; i++) {
                if (enemyInfo.cards[i].price == 1) {
                    temp = true;
                    break;
                }
            }
        }

        appendCards(enemyInfo.cards, $enemyCardsList);

        displayStones();

        move = randomInteger(0, 1);

        if (!move) {
            //мой ход
            const myCards = document.querySelectorAll(
                ".js_my_cards_list .card"
            );

            myCards.forEach((card) => {
                const currentCard = deck.find(c => {
                    return c.id == card.dataset.id
                });

                if (currentCard.price <= myInfo.stones) {
                    card.classList.add("active");
                }

                card.addEventListener("click", myAttack);
            });
            displayTimer();
        } else {
            //ход противника
            const enemyCards = document.querySelectorAll(
                ".js_enemy_cards_list .card"
            );

            for (let i = 0; i < enemyCards.length; i++) {
                const currentCard = deck.find(c => {
                    return c.id == enemyCards[i].dataset.id
                });

                if (currentCard.price <= enemyInfo.stones) {
                    enemyCards[i].classList.add("active");
                    enemyCards[i].addEventListener("click", enemyAttack);
                    setTimeout(() => {
                        enemyCards[i].click();
                    }, 3000);
                    break;
                }
            }
            displayTimer();
        }
    };

    initGame();
}
