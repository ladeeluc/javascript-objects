var playlist = { 
    Elton_John: 'Rocketman',
    CariB: 'Backin_it_up'
}

function updatePlaylist(playlist, artist, song){
playlist[artist] = 'song'
return playlist
}

function removeFromPlaylist(playlist, artist){
    delete playlist[artist]
    return playlist
}