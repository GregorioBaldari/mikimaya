input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C D E F F E D C ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
})
music.play(music.stringPlayable("C5 F A E D F A B ", 240), music.PlaybackMode.UntilDone)
