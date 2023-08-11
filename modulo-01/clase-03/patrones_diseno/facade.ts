class AudioPlayerFacade {
    playAudio(file: string): void {
        console.log(`Playing audio file: ${file}`);
    }

    public static toEmpty(): AudioPlayerFacade {
        return new AudioPlayerFacade()
    }
}

class VideoPlayerFacade {
    playVideo(file: string): void {
        console.log(`Playing video file: ${file}`);
    }

    public static toEmpty(): VideoPlayerFacade {
        return new VideoPlayerFacade()
    }
}

class VolumeControlFacade {
    setVolume(level: number): void {
        console.log(`Setting volume to ${level}`);
    }

    public static toEmpty(): VolumeControlFacade {
        return new VolumeControlFacade()
    }
}

class ReproductorMultimediaFacade {
    private audioPlayer: AudioPlayerFacade = AudioPlayerFacade.toEmpty();
    private videoPlayer: VideoPlayerFacade = VideoPlayerFacade.toEmpty();
    private volumeControl: VolumeControlFacade = VolumeControlFacade.toEmpty();

    constructor() {
        this.audioPlayer = new AudioPlayerFacade();
        this.videoPlayer = new VideoPlayerFacade();
        this.volumeControl = new VolumeControlFacade();
    }

    reproducirMedios(file: string): void {
        if (file.endsWith('.mp3')) {
            this.audioPlayer.playAudio(file);
        } else if (file.endsWith('.mp4')) {
            this.videoPlayer.playVideo(file);
        } else {
            console.log(`Formato de archivo no soportado: ${file}`);
        }
    }

    ajustarVolumen(nivel: number): void {
        this.volumeControl.setVolume(nivel);
    }
}

// Uso del patrón Facade
const reproductor = new ReproductorMultimediaFacade();

reproductor.reproducirMedios('audio.mp3'); // Salida: Playing audio file: audio.mp3
reproductor.reproducirMedios('video.mp4'); // Salida: Playing video file: video.mp4

reproductor.ajustarVolumen(80); // Salida: Setting volume to 80
