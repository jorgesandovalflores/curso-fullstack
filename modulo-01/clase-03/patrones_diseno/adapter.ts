// Objetivo (Target)
interface MediaPlayer {
    play(audioType: string, filename: string): void;
}

// Objeto a Adaptar (Adapter)
class AdvancedMediaPlayer {
    playVlc(filename: string): void {
        console.log(`Playing vlc file: ${filename}`);
    }

    playMp4(filename: string): void {
        console.log(`Playing mp4 file: ${filename}`);
    }

    public static toEmpty(): AdvancedMediaPlayer {
        return new AdvancedMediaPlayer()
    }
}

// Adaptador (Adaptee)
class MediaAdapter implements MediaPlayer {
    private advancedMusicPlayer: AdvancedMediaPlayer = AdvancedMediaPlayer.toEmpty();

    constructor(audioType: string) {
        if (audioType === 'vlc') {
            this.advancedMusicPlayer = new AdvancedMediaPlayer();
        }
    }

    play(audioType: string, filename: string): void {
        if (audioType === 'vlc') {
            this.advancedMusicPlayer.playVlc(filename);
        }
    }

    public static toEmpty(): MediaAdapter {
        return new MediaAdapter('')
    }
}

// Cliente
class AudioPlayer implements MediaPlayer {
    private mediaAdapter: MediaAdapter = MediaAdapter.toEmpty();

    play(audioType: string, filename: string): void {
        if (audioType === 'mp3') {
            console.log(`Playing mp3 file: ${filename}`);
        } else if (audioType === 'vlc') {
            this.mediaAdapter = new MediaAdapter(audioType);
            this.mediaAdapter.play(audioType, filename);
        }
    }
}

// Uso del patrón Adapter
const audioPlayer = new AudioPlayer();

audioPlayer.play('mp3', 'song.mp3'); // Salida: Playing mp3 file: song.mp3
audioPlayer.play('vlc', 'movie.vlc'); // Salida: Playing vlc file: movie.vlc
