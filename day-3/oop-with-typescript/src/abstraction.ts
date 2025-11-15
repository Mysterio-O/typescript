/**
 * 
 * there are multiple ways to use abstraction
 * 
 * 1. with interface
 *  2. with abstract class
 * 
 */



// ===============================================================================
// ==================== WITH INTERFACE ========================================

interface MediaPlayer {
    play: () => void;
    pause: () => void;
    stop: () => void;
};


class MusicPlayer implements MediaPlayer {
    play() {
        console.log("playing music....");
    }
    pause() {
        console.log("music has been paused");
    }
    stop() {
        console.log("music has been stopped");
    }
}


const mp3_player = new MusicPlayer();

mp3_player.play();


// --------------------------------------------------------------------------------------------


// =================================================================================
// ============================= with abstract ========================================

abstract class VideoPlayerModel {
    abstract play(): void
    abstract pause(): void
    abstract stop(): void
}

class VideoPlayer extends VideoPlayerModel {
    play(): void {
        console.log("video started");
    };
    pause(): void {
        console.log("video paused");
    }
    stop(): void {
        console.log("video stopped")
    }
}

const mp4_player = new VideoPlayer();

mp4_player.pause();