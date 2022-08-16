let radio = {
    stations:  [{
        name: 'Chill',
        song: [{
            title:'Operate',
            artist:'ASTR, The-Drum',
        }, 
        {
            title:'Cloud City',
            artist:'Hermitude',
        }, 
        {
            title:'Girl (feat. KATRANADA',
            artist:'The Internet',
        }
        ]
    },
    {
        name: 'nu-jazz',
        song: [{
            title:'Mystline',
            artist:'Nujabes',
        }, 
        {
            title:'Evening Comes 2',
            artist:'DJ Okawari',
        }, 
        {
            title:'All in Forms',
            artist: 'Bonobo',
        }
        ]
    }],
    
    //two variables
    //choose station and choose song


    useRadio(){
      let pickStation = Math.floor((Math.random() * 10)) % 2 //variable to pick station
      let pickSong = Math.floor((Math.random() * 10)) % 3 //variable to pick song
      let pick = radio.stations[pickStation].song[pickSong]
      console.log(`Now Playing ${pick.title} by ${pick.artist}`)

    } 

}

radio.useRadio();


//math.random choose random number between 0 and 1
//math.floor rounds number down to nearest integer