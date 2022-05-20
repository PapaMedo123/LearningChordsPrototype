
// const {Renderer, Stave}= Vex.Flow;
const VF = Vex.Flow

//AUTO
//const yourStaveNotesForTrebleStave = [
//   new VF.StaveNote({ clef: "treble", keys: ["G/4"], duration: "2" }),
//   new VF.StaveNote({ clef: "treble", keys: ["G/4"], duration: "4" }),
//   new VF.StaveNote({ clef: "treble", keys: ["G/4"], duration: "4" })
// ];

// Create an SVG renderer and attach it to the DIV element named "boo".
const div = document.getElementById('output');
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

var key = Array.from(document.querySelectorAll('path'))

const yourStaveNotes = []

const notesCheck = []

function drawChord(){

    let notes = document.getElementById("input").value
    notes = notes.split(/[ ,]+/)
    console.log(notes)
    document.getElementById("input").value = ""
    let output = document.getElementById("form_output")

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
            output.value += note
        }
    })
    formatter.formatToStave(
        yourStaveNotes,
        mainStave,
        {
            // align_rests: true
        })

    yourStaveNotes.forEach(voice => voice.draw(context, mainStave))
}


// MANUAL Too hard
/*
var key = Array.from(document.querySelectorAll('path'))
const yourStaveNotes = [false,false,false,false,false]
const svgTag = document.getElementById("svg")

key.forEach(k => {
    k.addEventListener('click', () => {

        if(key[0] === k){
            if (!yourStaveNotes[0]){
                let inHtml = "<g class='vf-note' pointer-events='bounding-box'><g class='vf-stem' pointer-events='bounding-box'><path stroke-width='1.5' stroke-dasharray='none' fill='none' stroke='black' d='M234.33712 238L234.33712 205'></path></g><g class='vf-notehead' pointer-events='bounding-box'><path stroke-width='0.3' stroke-dasharray='none' fill='black' stroke='none' d='M227.08432 245.0544C230.67856 245.0544,235.08712 241.74096,235.08712 238.3152C235.08712 236.23728,233.45848 234.9456,231.15592 234.9456C226.71928 234.9456,223.15312 238.23096,223.15312 241.6848C223.15312 243.7908,224.89408 245.0544,227.08432 245.0544'></path></g></g><g class='vf-modifiers'></g>"
                let g = document.createElementNS("http://www.w3.org/2000/svg", "g");
                g.setAttribute("class","vf-stavenote")
                g.setAttribute("id","noteF/5")
                g.innerHTML = inHtml
                svgTag.appendChild(g)
                yourStaveNotes[0] = true
            }
        }
        if(key[1] === k){
            if (!yourStaveNotes[1]){
                let inHtml = '<g class="vf-note" pointer-events="bounding-box"><g class="vf-stem" pointer-events="bounding-box"><path stroke-width="1.5" stroke-dasharray="none" fill="none" stroke="black" d="M234.33712 248L234.33712 215"></path></g><g class="vf-notehead" pointer-events="bounding-box"><path stroke-width="0.3" stroke-dasharray="none" fill="black" stroke="none" d="M227.08432 255.0544C230.67856 255.0544,235.08712 251.74096,235.08712 248.3152C235.08712 246.23728,233.45848 244.9456,231.15592 244.9456C226.71928 244.9456,223.15312 248.23096,223.15312 251.6848C223.15312 253.7908,224.89408 255.0544,227.08432 255.0544"></path></g></g><g class="vf-modifiers"></g>'
                let g = document.createElementNS("http://www.w3.org/2000/svg", "g");
                g.setAttribute("class","vf-stavenote")
                g.setAttribute("id","noteD/5")
                g.innerHTML = inHtml
                svgTag.appendChild(g)
                yourStaveNotes[1] = true
            }
        }
        if(key[2] === k){
            if (!yourStaveNotes[2]){
                let inHtml = '<g class="vf-note" pointer-events="bounding-box"><g class="vf-stem" pointer-events="bounding-box"><path stroke-width="1.5" stroke-dasharray="none" fill="none" stroke="black" d="M234.33712 258L234.33712 225"></path></g><g class="vf-notehead" pointer-events="bounding-box"><path stroke-width="0.3" stroke-dasharray="none" fill="black" stroke="none" d="M227.08432 265.0544C230.67856 265.0544,235.08712 261.74096,235.08712 258.3152C235.08712 256.23728,233.45848 254.9456,231.15592 254.9456C226.71928 254.9456,223.15312 258.23096,223.15312 261.6848C223.15312 263.7908,224.89408 265.0544,227.08432 265.0544"></path></g></g><g class="vf-modifiers"></g>'
                let g = document.createElementNS("http://www.w3.org/2000/svg", "g");
                g.setAttribute("class","vf-stavenote")
                g.setAttribute("id","noteB/4")
                g.innerHTML = inHtml
                svgTag.appendChild(g)
                yourStaveNotes[2] = true
            }
        }
        if(key[3] === k){
            if (!yourStaveNotes[3]){
                let inHtml = '<g class="vf-note" pointer-events="bounding-box"><g class="vf-stem" pointer-events="bounding-box"><path stroke-width="1.5" stroke-dasharray="none" fill="none" stroke="black" d="M234.33712 268L234.33712 235"></path></g><g class="vf-notehead" pointer-events="bounding-box"><path stroke-width="0.3" stroke-dasharray="none" fill="black" stroke="none" d="M227.08432 275.0544C230.67856 275.0544,235.08712 271.74096,235.08712 268.3152C235.08712 266.23728,233.45848 264.9456,231.15592 264.9456C226.71928 264.9456,223.15312 268.23096,223.15312 271.6848C223.15312 273.7908,224.89408 275.0544,227.08432 275.0544"></path></g></g><g class="vf-modifiers"></g>'
                let g = document.createElementNS("http://www.w3.org/2000/svg", "g");
                g.setAttribute("class","vf-stavenote")
                g.setAttribute("id","noteG/4")
                g.innerHTML = inHtml
                svgTag.appendChild(g)
                yourStaveNotes[3] = true
            }
        }
        if(key[4] === k){
            if (!yourStaveNotes[4]){
                let inHtml = '<g class="vf-note" pointer-events="bounding-box"><g class="vf-stem" pointer-events="bounding-box"><path stroke-width="1.5" stroke-dasharray="none" fill="none" stroke="black" d="M234.33712 278L234.33712 245"></path></g><g class="vf-notehead" pointer-events="bounding-box"><path stroke-width="0.3" stroke-dasharray="none" fill="black" stroke="none" d="M227.08432 285.0544C230.67856 285.0544,235.08712 281.74096,235.08712 278.3152C235.08712 276.23728,233.45848 274.9456,231.15592 274.9456C226.71928 274.9456,223.15312 278.23096,223.15312 281.6848C223.15312 283.7908,224.89408 285.0544,227.08432 285.0544"></path></g></g><g class="vf-modifiers"></g>'
                let g = document.createElementNS("http://www.w3.org/2000/svg", "g");
                g.setAttribute("class","vf-stavenote")
                g.setAttribute("id","noteE/4")
                g.innerHTML = inHtml
                svgTag.appendChild(g)
                yourStaveNotes[4] = true
            }
        }
    })
})
*/

/*
<svg width="500" height="500" viewBox="0 0 500 500" style="width: 500px; height: 500px;">
<g class="vf-stave" id="vf-auto1000">
<path stroke-width="1" stroke-dasharray="none" fill="none" stroke="#999999" d="M150 240L350 240"></path>
<path stroke-width="1" stroke-dasharray="none" fill="none" stroke="#999999" d="M150 250L350 250"></path>
<path stroke-width="1" stroke-dasharray="none" fill="none" stroke="#999999" d="M150 260L350 260"></path>
<path stroke-width="1" stroke-dasharray="none" fill="none" stroke="#999999" d="M150 270L350 270"></path>
<path stroke-width="1" stroke-dasharray="none" fill="none" stroke="#999999" d="M150 280L350 280"></path>
<rect x="150" y="239.5" width="1" height="41" fill="black"></rect>
<g class="vf-clef" id="vf-auto1003"><path stroke-width="0.3" stroke-dasharray="none" fill="black" stroke="none" d="M168.711104 255.844288C168.660416 255.41344,168.711104 255.388096,168.9392 255.16C172.892864 251.48512,175.883456 246.847168,175.883456 241.246144C175.883456 238.078144,174.996416 234.935488,173.50112000000001 232.755904C172.943552 231.944896,172.005824 230.93113599999998,171.60032 230.93113599999998C171.09344 230.93113599999998,169.95296 231.868864,169.243328 232.679872C166.53152 235.67046399999998,165.64448 240.232384,165.64448 244.033984C165.64448 246.137536,165.923264 248.519872,166.176704 250.015168C166.252736 250.446016,166.27808 250.52204799999998,165.847232 250.902208C160.57568 255.236032,155 260.456896,155 267.832C155 274.168,159.333824 280.199872,168.280256 280.199872C169.116608 280.199872,170.07968 280.12384,170.814656 279.971776C171.194816 279.895744,171.270848 279.8704,171.34688 280.301248C171.777728 282.759616,172.335296 285.927616,172.335296 287.651008C172.335296 293.04928,168.68576000000002 293.708224,166.53152 293.708224C164.554688 293.708224,163.61696 293.125312,163.61696 292.643776C163.61696 292.390336,163.94643200000002 292.28896,164.782784 292.010176C165.923264 291.680704,167.215808 290.717632,167.215808 288.588736C167.215808 286.58656,165.948608 284.863168,163.718336 284.863168C161.285312 284.863168,159.81536 286.814656,159.81536 289.070272C159.81536 291.427264,161.234624 295.026112,166.759616 295.026112C169.19264 295.026112,173.931968 293.910976,173.931968 287.72704C173.931968 285.623488,173.273024 282.176704,172.892864 279.895744C172.816832 279.464896,172.842176 279.515584,173.349056 279.287488C177.04928 277.817536,179.482304 274.725568,179.482304 270.594496C179.482304 265.9312,176.060864 261.800128,170.687936 261.800128C169.750208 261.800128,169.750208 261.800128,169.623488 261.141184M172.157888 236.582848C173.349056 236.582848,174.337472 237.57126399999999,174.337472 239.57344C174.337472 243.62848,170.865344 246.9232,168.001472 249.432256C167.748032 249.660352,167.595968 249.609664,167.519936 249.128128C167.367872 248.1904,167.29184 246.948544,167.29184 245.78271999999998C167.29184 240.08032,169.927616 236.582848,172.157888 236.582848M168.17888 261.445312C168.280256 262.1296,168.280256 262.104256,167.621312 262.307008C164.427968 263.3968,162.324416 266.286016,162.324416 269.403328C162.324416 272.672704,164.047808 275.004352,166.53152 275.866048C166.835648 275.967424,167.266496 276.0688,167.519936 276.0688C167.79872 276.0688,167.950784 275.891392,167.950784 275.663296C167.950784 275.409856,167.672 275.30848,167.41856 275.207104C165.872576 274.54816,164.782784 272.976832,164.782784 271.304128C164.782784 269.200576,166.202048 267.654592,168.43232 267.020992C169.015232 266.868928,169.091264 266.919616,169.167296 267.32512L170.992064 278.197696C171.068096 278.6032,171.017408 278.6032,170.485184 278.704576C169.902272 278.805952,169.167296 278.881984,168.43232 278.881984C162.045632 278.881984,157.91456 275.333824,157.91456 270.265024C157.91456 268.110784,158.29472 265.221568,161.310656 261.800128C163.515584 259.367104,165.188288 257.998528,166.886336 256.629952C167.266496 256.325824,167.34252800000002 256.376512,167.41856 256.756672M170.687936 267.249088C170.611904 266.792896,170.662592 266.69152,171.09344 266.742208C174.058688 266.995648,176.491712 269.47936,176.491712 272.672704C176.491712 274.979008,175.097792 276.82912,173.070272 277.868224C172.639424 278.070976,172.563392 278.070976,172.48736 277.640128"></path></g>
<g class="vf-timesignature" id="vf-auto1005"><path stroke-width="0.3" stroke-dasharray="none" fill="black" stroke="none" d="M208.75408 252.61936L208.75408 245.05504C208.75408 244.78576,208.7296 244.46752,208.33792 244.46752C208.01968 244.46752,207.84832 244.54096,207.628 244.78576L204.27424 248.82496C204.15184 249.0208,203.956 249.21664,203.956 249.65728L203.956 252.61936L199.20688 252.61936C202.02208 250.22032,207.67696 242.21536,207.77488 241.77472L207.79936 241.67680000000001C207.79936 241.35856,207.55456 241.16272,207.28528 241.16272C206.96704 241.16272,205.52272 241.21168,204.88624 241.21168C204.24976 241.21168,202.65856 241.16272,202.38927999999999 241.16272C202.07104 241.16272,201.58144 241.26064,201.58144 241.82368C201.58144 246.18112,198.10528 251.1016,197.05264 252.5704L196.8568 252.86416C196.8568 252.86416,196.8568 252.88864,196.8568 252.88864L196.80784 252.9376C196.7344 253.10896,196.70992 253.23136,196.70992 253.35376C196.70992 253.69648,196.9792 253.94128,197.41984 253.94128L203.956 253.94128L203.956 256.16896C203.956 257.12368,203.19712 257.39296,202.56064 257.39296C201.9976 257.39296,201.7528 257.7112,201.7528 258.0784C201.7528 258.42112,201.8752 258.8128,202.41376 258.8128L209.92912 258.8128C210.27184 258.8128,210.63904 258.568,210.63904 258.0784C210.63904 257.5888,210.1984 257.36848,209.85568 257.36848C209.51296 257.36848,208.75408 257.14816,208.75408 256.02208L208.75408 253.94128L211.32448 253.94128C211.69168 253.94128,211.86304 253.69648,211.86304 253.28032C211.86304 252.86416,211.71616 252.61936,211.32448 252.61936"></path><path stroke-width="0.3" stroke-dasharray="none" fill="black" stroke="none" d="M208.75408 272.61936L208.75408 265.05504C208.75408 264.78576,208.7296 264.46752,208.33792 264.46752C208.01968 264.46752,207.84832 264.54096,207.628 264.78576L204.27424 268.82496C204.15184 269.0208,203.956 269.21664,203.956 269.65728L203.956 272.61936L199.20688 272.61936C202.02208 270.22032,207.67696 262.21536,207.77488 261.77472L207.79936 261.6768C207.79936 261.35856,207.55456 261.16272,207.28528 261.16272C206.96704 261.16272,205.52272 261.21168,204.88624 261.21168C204.24976 261.21168,202.65856 261.16272,202.38927999999999 261.16272C202.07104 261.16272,201.58144 261.26064,201.58144 261.82368C201.58144 266.18112,198.10528 271.1016,197.05264 272.5704L196.8568 272.86416C196.8568 272.86416,196.8568 272.88864,196.8568 272.88864L196.80784 272.9376C196.7344 273.10896,196.70992 273.23136,196.70992 273.35376C196.70992 273.69648,196.9792 273.94128,197.41984 273.94128L203.956 273.94128L203.956 276.16896C203.956 277.12368,203.19712 277.39296,202.56064 277.39296C201.9976 277.39296,201.7528 277.7112,201.7528 278.0784C201.7528 278.42112,201.8752 278.8128,202.41376 278.8128L209.92912 278.8128C210.27184 278.8128,210.63904 278.568,210.63904 278.0784C210.63904 277.5888,210.1984 277.36848,209.85568 277.36848C209.51296 277.36848,208.75408 277.14816,208.75408 276.02208L208.75408 273.94128L211.32448 273.94128C211.69168 273.94128,211.86304 273.69648,211.86304 273.28032C211.86304 272.86416,211.71616 272.61936,211.32448 272.61936"></path></g>
<rect x="350" y="239.5" width="1" height="41" fill="black"></rect>
</g>
</svg>
 */

/*
* F/5
* <g class="vf-stavenote" id="vf-auto1010"><g class="vf-note" pointer-events="bounding-box"><g class="vf-stem" pointer-events="bounding-box"><path stroke-width="1.5" stroke-dasharray="none" fill="none" stroke="black" d="M234.33712 238L234.33712 205"></path></g><g class="vf-notehead" pointer-events="bounding-box"><path stroke-width="0.3" stroke-dasharray="none" fill="black" stroke="none" d="M227.08432 245.0544C230.67856 245.0544,235.08712 241.74096,235.08712 238.3152C235.08712 236.23728,233.45848 234.9456,231.15592 234.9456C226.71928 234.9456,223.15312 238.23096,223.15312 241.6848C223.15312 243.7908,224.89408 245.0544,227.08432 245.0544"></path></g></g><g class="vf-modifiers"></g></g>
* D/5
* <g class="vf-stavenote" id="vf-auto1010"><g class="vf-note" pointer-events="bounding-box"><g class="vf-stem" pointer-events="bounding-box"><path stroke-width="1.5" stroke-dasharray="none" fill="none" stroke="black" d="M234.33712 248L234.33712 215"></path></g><g class="vf-notehead" pointer-events="bounding-box"><path stroke-width="0.3" stroke-dasharray="none" fill="black" stroke="none" d="M227.08432 255.0544C230.67856 255.0544,235.08712 251.74096,235.08712 248.3152C235.08712 246.23728,233.45848 244.9456,231.15592 244.9456C226.71928 244.9456,223.15312 248.23096,223.15312 251.6848C223.15312 253.7908,224.89408 255.0544,227.08432 255.0544"></path></g></g><g class="vf-modifiers"></g></g>
* B/4
* <g class="vf-stavenote" id="vf-auto1010"><g class="vf-note" pointer-events="bounding-box"><g class="vf-stem" pointer-events="bounding-box"><path stroke-width="1.5" stroke-dasharray="none" fill="none" stroke="black" d="M234.33712 258L234.33712 225"></path></g><g class="vf-notehead" pointer-events="bounding-box"><path stroke-width="0.3" stroke-dasharray="none" fill="black" stroke="none" d="M227.08432 265.0544C230.67856 265.0544,235.08712 261.74096,235.08712 258.3152C235.08712 256.23728,233.45848 254.9456,231.15592 254.9456C226.71928 254.9456,223.15312 258.23096,223.15312 261.6848C223.15312 263.7908,224.89408 265.0544,227.08432 265.0544"></path></g></g><g class="vf-modifiers"></g></g>
* G/4
* <g class="vf-stavenote" id="vf-auto1010"><g class="vf-note" pointer-events="bounding-box"><g class="vf-stem" pointer-events="bounding-box"><path stroke-width="1.5" stroke-dasharray="none" fill="none" stroke="black" d="M234.33712 268L234.33712 235"></path></g><g class="vf-notehead" pointer-events="bounding-box"><path stroke-width="0.3" stroke-dasharray="none" fill="black" stroke="none" d="M227.08432 275.0544C230.67856 275.0544,235.08712 271.74096,235.08712 268.3152C235.08712 266.23728,233.45848 264.9456,231.15592 264.9456C226.71928 264.9456,223.15312 268.23096,223.15312 271.6848C223.15312 273.7908,224.89408 275.0544,227.08432 275.0544"></path></g></g><g class="vf-modifiers"></g></g>
* E/4
* <g class="vf-stavenote" id="vf-auto1015"><g class="vf-note" pointer-events="bounding-box"><g class="vf-stem" pointer-events="bounding-box"><path stroke-width="1.5" stroke-dasharray="none" fill="none" stroke="black" d="M234.33712 278L234.33712 245"></path></g><g class="vf-notehead" pointer-events="bounding-box"><path stroke-width="0.3" stroke-dasharray="none" fill="black" stroke="none" d="M227.08432 285.0544C230.67856 285.0544,235.08712 281.74096,235.08712 278.3152C235.08712 276.23728,233.45848 274.9456,231.15592 274.9456C226.71928 274.9456,223.15312 278.23096,223.15312 281.6848C223.15312 283.7908,224.89408 285.0544,227.08432 285.0544"></path></g></g><g class="vf-modifiers"></g></g>
* */