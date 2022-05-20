const VF = Vex.Flow

//AUTO
//const yourStaveNotesForTrebleStave = [
//   new VF.StaveNote({ clef: "treble", keys: ["G/4"], duration: "2" }),
//   new VF.StaveNote({ clef: "treble", keys: ["G/4"], duration: "4" }),
//   new VF.StaveNote({ clef: "treble", keys: ["G/4"], duration: "4" })
// ];

// Create an SVG renderer and attach it to the DIV element named "boo".
const div = document.getElementById('output_notes');
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

// Configure the rendering context.
renderer.resize(500, 100);
const context = renderer.getContext();

// Create a stave of width 400 at position 10, 40 on the canvas.
var stave = new VF.Stave(150, 0, 200);

// Add a clef and time signature.
stave.addClef('treble').addTimeSignature('4/4');

// Connect it to the rendering context and draw!
var mainStave = stave.setContext(context).draw();

const timeSignatureNumerator = 4,
    timeSignatureDenominator = 4;

var formatter = new VF.Formatter();

const yourStaveNotes = []

const notesCheck = []

let notes = ["c/4","e/4","g/4"]

notes.forEach(note => {
    if(!notesCheck.includes(note)){
        notesCheck.push(note)
        let new_note = new VF.StaveNote({clef: "treble", keys: [note], duration: "2"})

        var new_voice = new VF.Voice({
            num_beats: timeSignatureNumerator,
            beat_value: timeSignatureDenominator,
            resolution: VF.RESOLUTION
        });

        new_voice.setStrict(false)
        new_voice.addTickable(new_note);
        yourStaveNotes.push(new_voice)
    }
})

console.log(yourStaveNotes)

formatter.formatToStave(
    yourStaveNotes,
    mainStave,
    {
        // align_rests: true
    })

yourStaveNotes.forEach(voice => voice.draw(context, mainStave))

