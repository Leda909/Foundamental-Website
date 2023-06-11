function KeyPress(event) {
    let soundUrl = "";
    switch (event.id) {
      case "a":
        soundUrl = 'http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Piano%20Key%20C8-2877-Free-Loops.com.mp3';
        break;
      case "b":
        soundUrl = 'https://freesound.org/data/previews/203/203502_1622584-lq.mp3';
        break;
      case "c":
        soundUrl = 'https://freesound.org/data/previews/203/203500_1622584-lq.mp3';
        break;
      case "d":
        soundUrl = 'https://freesound.org/data/previews/203/203499_1622584-lq.mp3';
        break;
      case "e":
        soundUrl = 'https://freesound.org/data/previews/203/203495_1622584-lq.mp3';
        break;
      case "f":
        soundUrl = 'https://freesound.org/data/previews/203/203493_1622584-lq.mp3';
        break;
      case "g":
        soundUrl = 'https://freesound.org/data/previews/203/203492_1622584-lq.mp3';
        break;
      case "h":
        soundUrl = 'https://freesound.org/data/previews/203/203491_1622584-lq.mp3';
        break;
      case "j":
        soundUrl = 'http://www.vibrationdata.com/Kawai_fourth_A_D.mp3';
        break;
      case "k":
        soundUrl = 'http://www.vibrationdata.com/piano_A_sharp.mp3';
        break;
      case "l":
        soundUrl = 'http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Piano%20Key%20C6-2871-Free-Loops.com.mp3';
        break;
      case "m":
        soundUrl = 'http://artsites.ucsc.edu/faculty/nauert/sample_exam/Ex_03.mp3';
        break;
      case "n":
        soundUrl = 'http://www.vibrationdata.com/piano_C_sharp.mp3';
        break;
      case "o":
        soundUrl = 'http://mrclan.com/fastdl/tfc/sound/a3.wav';
        break;
      case "p":
        soundUrl = 'http://mrclan.com/fastdl/tfc/sound/a.wav';
        break;
      case "q":
        soundUrl = 'http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Piano%20Key%20C-2859-Free-Loops.com.mp3';
        break;
      default:
        soundUrl = 'http://cd.textfiles.com/10000soundssongs/WAV/0010101.WAV';
    }
  
    let audio = new Audio(soundUrl);
    audio.play();
  }

// https://www.findsounds.com/ISAPI/search.dll?start=1&keywords=piano&seed=21