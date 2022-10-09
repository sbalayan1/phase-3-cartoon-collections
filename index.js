function bigShoeSize() {
    players = [...gameObject()['home']['players'], ...gameObject()['away']['players']]
    max = -Infinity
    [{name: bob, shoe: 1}, {name: jordan, shoe: 2}]
    for (let i = 0; i<players; i++) {
        if (players[i].shoe > max) {
            max = player[i].shoe
        }
    }
    
}