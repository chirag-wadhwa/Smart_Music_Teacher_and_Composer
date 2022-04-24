import React from "react";
// import { connect } from "react-redux";
import _ from "lodash";
import { KeyboardShortcuts, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";
import { connect } from "react-redux";
import SoundfontProvider from '../components/SoundfontProvider'
import PianoWithRecording from '../components/PianoWithRecording'
// import LessonSelectorList from '../UI/LessonSelectorList';

import classes from './Piano.module.css';

// webkitAudioContext fallback needed to support Safari
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = "https://d1pzp51pvbm36p.cloudfront.net";

class PianoPage extends React.Component {


  state = {
    octave: 4,
    recording: {
      mode: "RECORDING",
      events: [],
      currentTime: 0,
      currentEvents: []
    },
    noteRange: {
      first: MidiNumbers.fromNote("c4"),
      last: MidiNumbers.fromNote("b4")
    },
    keyboardShortcuts: KeyboardShortcuts.create({
      firstNote: MidiNumbers.fromNote("c4"),
      lastNote: MidiNumbers.fromNote("b4"),
      keyboardConfig: KeyboardShortcuts.HOME_ROW
    }),
    // lesson: 0,
  };

  constructor(props) {
    super(props);
    this.scheduledEvents = [];
  }

  componentDidUpdate(prevProps) {
    console.log(this.props)
    if (this.props.lesson !== prevProps.lesson || this.props.song !== prevProps.song) {
      console.log("hello");
      if (this.props.lesson === 1 || this.props.lesson === 4) {
        console.log("1")
        let keys = [
          { key: 'a', midiNumber: 60 },
          { key: 'w', midiNumber: 61 },
          { key: 's', midiNumber: 62 },
          { key: 'e', midiNumber: 63 },
          { key: 'd', midiNumber: 64 },
          { key: 'f', midiNumber: 65 },
          { key: 't', midiNumber: 66 },
          { key: 'g', midiNumber: 67 },
          { key: 'y', midiNumber: 68 },
          { key: 'h', midiNumber: 69 },
          { key: 'u', midiNumber: 70 },
          { key: 'j', midiNumber: 71 }
        ]
        this.setState(state => ({
          ...state,
          noteRange: {
            first: MidiNumbers.fromNote("c4"),
            last: MidiNumbers.fromNote("b4")
          },
          keyboardShortcuts: keys,
        }));
        let h = KeyboardShortcuts.create({
          firstNote: MidiNumbers.fromNote("c4"),
          lastNote: MidiNumbers.fromNote("b4"),
          keyboardConfig: KeyboardShortcuts.HOME_ROW
        });
        console.log(h);
      }

      else if (this.props.lesson === 2) {
        console.log("2")
        let keys = [
          { key: 'a', midiNumber: 60 },
          { key: 'w', midiNumber: 61 },
          { key: 's', midiNumber: 62 },
          { key: 'e', midiNumber: 63 },
          { key: 'd', midiNumber: 64 },
          { key: 'f', midiNumber: 65 },
          { key: 't', midiNumber: 66 },
          { key: 'g', midiNumber: 67 },
          { key: 'y', midiNumber: 68 },
          { key: 'h', midiNumber: 69 },
          { key: 'u', midiNumber: 70 },
          { key: 'j', midiNumber: 71 },
          { key: 'k', midiNumber: 72 },
          { key: 'o', midiNumber: 73 },
          { key: 'l', midiNumber: 74 },
          { key: 'p', midiNumber: 75 },
          { key: ';', midiNumber: 76 },
          { key: "'", midiNumber: 77 },
          { key: "]", midiNumber: 78 },
        ]
        // let keys = [
        //   {key: 'a', midiNumber: 55},
        //   {key: 'w', midiNumber: 56},
        //   {key: 's', midiNumber: 57},
        //   {key: 'e', midiNumber: 58},
        //   {key: 'd', midiNumber: 59},
        //   {key: 'f', midiNumber: 60},
        //   {key: 't', midiNumber: 61},
        //   {key: 'g', midiNumber: 62},
        //   {key: 'y', midiNumber: 63},
        //   {key: 'h', midiNumber: 64},
        //   {key: 'j', midiNumber: 65},
        //   {key: 'i', midiNumber: 66},
        //   {key: 'k', midiNumber: 67},
        //   {key: 'o', midiNumber: 68},
        //   {key: 'l', midiNumber: 69},
        // ]
        this.setState(state => ({
          ...state,
          noteRange: {
            first: MidiNumbers.fromNote("c4"),
            last: MidiNumbers.fromNote("f#5")
            // first: MidiNumbers.fromNote("g3"),
            // last: MidiNumbers.fromNote("a4")
          },
          keyboardShortcuts: keys,
        }));
      }
      else if (this.props.lesson === 3) {
        if (this.props.song === 0) {
          console.log("1")
          let keys = [
            { key: 'a', midiNumber: 60 },
            { key: 'w', midiNumber: 61 },
            { key: 's', midiNumber: 62 },
            { key: 'e', midiNumber: 63 },
            { key: 'd', midiNumber: 64 },
            { key: 'f', midiNumber: 65 },
            { key: 't', midiNumber: 66 },
            { key: 'g', midiNumber: 67 },
            { key: 'y', midiNumber: 68 },
            { key: 'h', midiNumber: 69 },
            { key: 'u', midiNumber: 70 },
            { key: 'j', midiNumber: 71 }
          ]
          this.setState(state => ({
            ...state,
            noteRange: {
              first: MidiNumbers.fromNote("c4"),
              last: MidiNumbers.fromNote("b4")
            },
            keyboardShortcuts: keys,
          }));
          let h = KeyboardShortcuts.create({
            firstNote: MidiNumbers.fromNote("c4"),
            lastNote: MidiNumbers.fromNote("b4"),
            keyboardConfig: KeyboardShortcuts.HOME_ROW
          });
          console.log(h);
        }
        if (this.props.song === 1) {
          let keys = [
            { key: 'a', midiNumber: 67 },
            { key: 'w', midiNumber: 68 },
            { key: 's', midiNumber: 69 },
            { key: 'e', midiNumber: 70 },
            { key: 'd', midiNumber: 71 },
            { key: 'f', midiNumber: 72 },
            { key: 't', midiNumber: 73 },
            { key: 'g', midiNumber: 74 },
            { key: 'y', midiNumber: 75 },
            { key: 'h', midiNumber: 76 },
            { key: 'j', midiNumber: 77 },
            { key: 'i', midiNumber: 78 },
            { key: 'k', midiNumber: 79 },
          ]
          this.setState(state => ({
            ...state,
            noteRange: {
              first: MidiNumbers.fromNote("g4"),
              last: MidiNumbers.fromNote("g5")
            },
            keyboardShortcuts: keys,
          }));
          let h = KeyboardShortcuts.create({
            firstNote: MidiNumbers.fromNote("g4"),
            lastNote: MidiNumbers.fromNote("g5"),
            keyboardConfig: KeyboardShortcuts.HOME_ROW
          });
          console.log(h);
        }




        if (this.props.song === 2) {
          let keys = [
            { key: 'a', midiNumber: 55 },
            { key: 'w', midiNumber: 56 },
            { key: 's', midiNumber: 57 },
            { key: 'e', midiNumber: 58 },
            { key: 'd', midiNumber: 59 },
            { key: 'f', midiNumber: 60 },
            { key: 't', midiNumber: 61 },
            { key: 'g', midiNumber: 62 },
            { key: 'y', midiNumber: 63 },
            { key: 'h', midiNumber: 64 },
            { key: 'j', midiNumber: 65 },
            { key: 'i', midiNumber: 66 },
            { key: 'k', midiNumber: 67 },
          ]
          this.setState(state => ({
            ...state,
            noteRange: {
              first: MidiNumbers.fromNote("g3"),
              last: MidiNumbers.fromNote("g4")
            },
            keyboardShortcuts: keys,
          }));
          let h = KeyboardShortcuts.create({
            firstNote: MidiNumbers.fromNote("g4"),
            lastNote: MidiNumbers.fromNote("g5"),
            keyboardConfig: KeyboardShortcuts.HOME_ROW
          });
          console.log(h);
        }


      }





      else if (this.props.lesson === 4) {
        console.log("4")
        let keys = [
          { key: 'a', midiNumber: 60 },
          { key: 'w', midiNumber: 61 },
          { key: 's', midiNumber: 62 },
          { key: 'e', midiNumber: 63 },
          { key: 'd', midiNumber: 64 },
          { key: 'f', midiNumber: 65 },
          { key: 't', midiNumber: 66 },
          { key: 'g', midiNumber: 67 },
          { key: 'y', midiNumber: 68 },
          { key: 'h', midiNumber: 69 },
          { key: 'u', midiNumber: 70 },
          { key: 'j', midiNumber: 71 },
          { key: 'k', midiNumber: 72 },
          { key: 'o', midiNumber: 73 },
          { key: 'l', midiNumber: 74 },
          { key: 'p', midiNumber: 75 },
          { key: ';', midiNumber: 76 },
          { key: "'", midiNumber: 77 },
          { key: "]", midiNumber: 78 },
        ]
        // let keys = [
        //   {key: 'a', midiNumber: 55},
        //   {key: 'w', midiNumber: 56},
        //   {key: 's', midiNumber: 57},
        //   {key: 'e', midiNumber: 58},
        //   {key: 'd', midiNumber: 59},
        //   {key: 'f', midiNumber: 60},
        //   {key: 't', midiNumber: 61},
        //   {key: 'g', midiNumber: 62},
        //   {key: 'y', midiNumber: 63},
        //   {key: 'h', midiNumber: 64},
        //   {key: 'j', midiNumber: 65},
        //   {key: 'i', midiNumber: 66},
        //   {key: 'k', midiNumber: 67},
        //   {key: 'o', midiNumber: 68},
        //   {key: 'l', midiNumber: 69},
        // ]
        this.setState(state => ({
          ...state,
          noteRange: {
            first: MidiNumbers.fromNote("c4"),
            last: MidiNumbers.fromNote("f#5")
            // first: MidiNumbers.fromNote("g3"),
            // last: MidiNumbers.fromNote("a4")
          },
          keyboardShortcuts: keys,
        }));
      }

    }
  }

  // noteRange = {
  //   first: MidiNumbers.fromNote("c" + this.state.octave),
  //   last: MidiNumbers.fromNote("b" + (+this.state.octave))
  // };

  // keyboardShortcuts = KeyboardShortcuts.create({
  //   firstNote: this.state.noteRange.first,
  //   lastNote: this.state.noteRange.last,
  //   keyboardConfig: KeyboardShortcuts.HOME_ROW
  // });

  getRecordingEndTime = () => {
    if (this.state.recording.events.length === 0) {
      return 0;
    }
    return Math.max(
      ...this.state.recording.events.map((event) => event.time + event.duration)
    );
  };

  setRecording = (value) => {
    this.setState({
      recording: Object.assign({}, this.state.recording, value)
    });
  };

  onClickPlay = () => {
    this.setRecording({
      mode: "PLAYING"
    });
    // let i = 0;
    let startAndEndTimes = _.uniq(
      _.flatMap(this.state.recording.events, (event) => [
        event.time,
        event.time + event.duration
      ])
    );
    // console.log(startAndEndTimes);
    // startAndEndTimes = _.uniq(startAndEndTimes);
    console.log(startAndEndTimes);
    console.log(this.state.recording.events);
    startAndEndTimes.forEach((time) => {
      this.scheduledEvents.push(
        setTimeout(() => {
          const currentEvents = this.state.recording.events.filter((event) => {
            return event.time <= time && event.time + event.duration > time;
          });
          this.setRecording({
            currentEvents
          });
        }, time * 1000)
      );
      // this.scheduledEvents.push(setTimeout(() => {console.log("hello")}, 1000));
    });
    // Stop at the end
    setTimeout(() => {
      this.onClickStop();
    }, this.getRecordingEndTime() * 1000);
  };

  onClickStop = () => {
    this.scheduledEvents.forEach((scheduledEvent) => {
      clearTimeout(scheduledEvent);
    });
    this.setRecording({
      mode: "RECORDING",
      currentEvents: []
    });
  };

  onClickClear = () => {
    this.onClickStop();
    this.setRecording({
      events: [],
      mode: "RECORDING",
      currentEvents: [],
      currentTime: 0
    });
  };

  onSelectOctave = (e) => {
    e.preventDefault();
    this.setState(state => ({
      ...state,
      octave: e.target.value,
      noteRange: {
        first: MidiNumbers.fromNote("c" + e.target.value),
        last: MidiNumbers.fromNote("b" + e.target.value)
      },
      keyboardShortcuts: KeyboardShortcuts.create({
        firstNote: MidiNumbers.fromNote("c" + e.target.value),
        lastNote: MidiNumbers.fromNote("b" + e.target.value),
        keyboardConfig: KeyboardShortcuts.HOME_ROW
      })
    }));
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: "center" }}>
        <h1
          className={classes.header}
        // style={{ textAlign: 'center' }}
        >
          KEYBOARD
        </h1>
        {(this.props.lesson === 0 || this.props.lesson === 1 || this.props.lesson === 4) ? <label htmlFor="octaves" className={classes.label}>Choose Octave Number:</label> : null}
        {(this.props.lesson === 0 || this.props.lesson === 1 || this.props.lesson === 4) ? <select name="octaves" id="octaves" onChange={this.onSelectOctave} value={this.state.octave} className={classes.dropDown}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select>
          : null}
        <div id="piano" className="mt-5">
          <SoundfontProvider
            instrumentName="acoustic_grand_piano"
            audioContext={audioContext}
            hostname={soundfontHostname}
            render={({ isLoading, playNote, stopNote }) => (
              <PianoWithRecording
                recording={this.state.recording}
                setRecording={this.setRecording}
                noteRange={this.state.noteRange}
                width={500}
                playNote={playNote}
                stopNote={stopNote}
                disabled={isLoading}
                keyboardShortcuts={this.state.keyboardShortcuts}
              />
            )}
          />
        </div>
        {/* <div className="mt-5">
          <button onClick={this.onClickPlay}>Play</button>
          <button onClick={this.onClickStop}>Stop</button>
          <button onClick={this.onClickClear}>Clear</button>
        </div>
        <div className="mt-5">
          <strong>Recorded notes</strong>
          <div>{JSON.stringify(this.state.recording.events)}</div>
        </div> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // auth: state.auth,
    lesson: state.lesson
  };
}

export default connect(mapStateToProps, {})(PianoPage);