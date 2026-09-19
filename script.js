// =================================
// PAGE 1 → PAGE 2
// =================================

function showBirthday() {

    document.getElementById("welcome").classList.remove("active");

    document.getElementById("birthday").classList.add("active");


    // Start background music

    const music = document.getElementById("bgMusic");

    music.volume = 1.0;


    music.play()

        .then(() => {

            console.log("Music is playing!");

        })

        .catch((error) => {

            console.log("Music error:", error);

        });

}



// =================================
// PAGE 2 → PAGE 3
// =================================

function showMemories() {

    document.getElementById("birthday").classList.remove("active");

    document.getElementById("memories").classList.add("active");

}



// =================================
// PAGE 3 → PAGE 4
// =================================

function showVideo() {

    document.getElementById("memories").classList.remove("active");

    document.getElementById("video").classList.add("active");

    // Pause background music while video plays
    const music = document.getElementById("bgMusic");

    music.pause();
}



// =================================
// PAGE 4 → PAGE 5
// =================================

function showReasons() {

    // Stop the video
    const video = document.querySelector(".birthday-video");

    if (video) {
        video.pause();
    }

    // Hide video page
    document.getElementById("video").classList.remove("active");

    // Show 21 Reasons page
    document.getElementById("reasons").classList.add("active");

    // Play the SAME birthday music
    const music = document.getElementById("bgMusic");

    music.play()
        .then(() => {
            console.log("Birthday music is playing!");
        })
        .catch((error) => {
            console.log("Music error:", error);
        });
}


// =================================
// PAGE 5 → PAGE 6
// =================================

function showLetter() {

    document.getElementById("reasons").classList.remove("active");

    document.getElementById("letter").classList.add("active");

    // Continue the SAME birthday music
    const music = document.getElementById("bgMusic");

    music.play()
        .catch((error) => {
            console.log("Music error:", error);
        });
}


// =================================
// PAGE 6 → PAGE 7
// =================================

function showFinal() {

    document.getElementById("letter").classList.remove("active");

    document.getElementById("final").classList.add("active");

}