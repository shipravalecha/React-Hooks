// import React from 'react';
// import ReactDOM from 'react-dom';
//
// class Mycomponent extends React.Component {
//   render() {
//     return (
//       <div>
//       <h1>React Again!!!</h1>
//       <h1>Will start with React Native</h1>
//       </div>
//     );
//   }
// }
//
// ReactDOM.render(<Mycomponent />, document.getElementById('root'));
/////////////////////////////////////////////////////////////////////////////////////
// import React from 'react';
// import { Text,View } from 'react-native';
// import ReactDOM from 'react-dom';
//
// export default class Mycomp extends React.Component {
//   render() {
//     return (
//       <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
//       <Text>hello world!!!</Text>
//       </View>
//     );
//   }
// }
/////////////////////////////////////////////////////////////////////////////////////
// import React from 'react';
// import { Text, View, Image } from 'react-native';
//
// export default class Mycomp extends React.Component {
//   render() {
//     let pic = {
//       uri = "abcd";
//     }
//     return (
//       <Image source={pic} style={{width:193, height: 193}} />
//     );
//   }
// }
/////////////////////////////////////////////////////////////////////////////////////
// import React from 'react';
// import { Text, View, Image } from 'react-native';
//
// class Mycomp extends React.Component {
//   render() {
//     return (
//       <View style={{alignItems: "center"}}>
//       <Text>Hello {this.props.name}!</Text>
//       </View>
//     );
//   }
// }
//
// class ParentClass extends React.Component {
//   render() {
//     return (
//       <View style={{alignItems: "center"}}>
//       <Mycomp name="shipra" />
//       <Mycomp name="abhishek" />
//       </View>
//     );
//   }
// }
/////////////////////////////////////////////////////////////////////////////////////
// import React from 'react';
// import { Text, View, Image } from 'react-native';
//
// class Mycomp extends React.Component {
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       isVisible: true
//     };
//   }
//
//   setInterval(this.setState({
//     isVisible: !isVisible
//   }), 1000);
//
//   render() {
//     if(!this.state.isVisible) {
//       return null;
//     }
//     return (
//       <Text>{this.props.text}</Text>
//     );
//   }
// }
//
// class Comp extends React.Component {
//   render() {
//     return (
//       <View style={{alignItems: "center"}}>
//         <MyComp text="Hi" />
//         <MyComp text="Hi" />
//         <MyComp text="Hi" />
//         <MyComp text="Hi" />
//       </View>
//     );
//   }
// }
/////////////////////////////////////////////////////////////////////////////////////


// import React, { Component } from 'react';
// import { AppRegistry, Text, TextInput, View } from 'react-native';
//
// export default class PizzaTranslator extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {text: ''};
//   }
//
//   render() {
//     return (
//       <View style={{padding: 10}}>
//         <TextInput
//           style={{height: 40}}
//           placeholder="Type here to translate!"
//           onChangeText={(text) => this.setState({text})}
//         />
//         <Text style={{padding: 10, fontSize: 42}}>
//           {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//         </Text>
//       </View>
//     );
//   }
// }
//
// render() {
//     return (
//     <View style={{padding: 10}}>
//         <TextInput
//           style={{height: 40}}
//           placeholder="enter here"
//           onChangeText={(text) => this.setState({text})}
//            />
//         <Text style={{padding:10, fontSize: 42}}>
//           {this.state.text.split(' ').map((word) => {word && 'hi'}).join(' ')}
//         </Text>
//     </View>
//     );
//   }
// }
// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => PizzaTranslator);





// import React from 'react';
//
// import ReactDOM from 'react-dom';
//
// class Mycomp extends React.Component {
//
//   state = {
//     name: 'shipra'
//   };
//
//   handleClick = () => {
//     let name = (this.state.name === 'shipra') ? 'abhishek' : 'shipra';
//     this.setState({
//       name
//     });
//   }
//   render() {
//
//     return (
//       <h1 onClick={this.handleClick}>
//         My name is {this.state.name}
//       </h1>
//     );
//   }
// }
//
//
// ReactDOM.render(<Mycomp />, document.getElementById('root'));





import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

ReactDOM.render(<App />, document.getElementById('root'));
