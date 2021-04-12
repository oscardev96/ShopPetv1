import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  StyleSheet,
  Platform,
  SafeAreaView,
} from 'react-native';
import IconF from 'react-native-vector-icons/FontAwesome';
import io from 'socket.io-client';
import {GiftedChat, Send} from 'react-native-gifted-chat';
import {FONTS, COLORS, height, width} from '../../constants/theme';
import {connect} from 'react-redux';
import API from '../../config/configAPI';
class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessages: [],
    };
  }

  componentDidMount() {
    this.socket = io('http://192.168.0.101:3001');
    this.getMessage();
    this.socket.on('chat message', msg => {
      this.setState(previousState => ({
        chatMessages: GiftedChat.append(previousState.chatMessages, msg),
      }));
      if (msg[0]['text'] === 'Skill') {
        const skills = [
          {
            _id: 1,
            text: 'Choose your skills',
            createdAt: new Date(),
            user: {
              _id: 2,
            },
            quickReplies: {
              type: 'radio', // or 'checkbox',
              keepIt: true,
              values: [
                {
                  title: 'NodeJS',
                  value: 'NodeJS',
                },
                {
                  title: '📷 ReactNative',
                  value: 'ReactNative',
                },
                {
                  title: 'Flutter',
                  value: 'Flutter',
                },
              ],
            },
          },
        ];
        this.setState(previousState => ({
          chatMessages: GiftedChat.append(previousState.chatMessages, skills),
        }));
      }
    });
  }
  getMessage = async () => {
    try {
      let result = await API.get('/chat');
      this.setState(previousState => ({
        chatMessages: GiftedChat.append(
          previousState.chatMessages,
          result.data,
        ),
      }));
    } catch (error) {
      console.log(error);
    }
  };
  _renderSend = props => (
    <Send
      {...props}
      alwaysShowSend={true}
      containerStyle={{
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <IconF name="paper-plane" size={25} color={COLORS.primary} />
    </Send>
  );

  onSend = messages => {
    this.socket.emit('chat message', messages);
    this.setState(previousState => ({}));
  };
  componentWillUnmount() {
    this.socket.disconnect();
  }
  onQuickReply(quickReply) {
    if (quickReply[0].title === 'NodeJS') {
      const skill = [
        {
          _id: 99,
          text: 'NodeJS',
          createdAt: new Date(),
          user: {
            _id: this.props.user._id,
          },
        },
      ];
      this.socket.emit('chat message', skill);
    } else if (quickReply[0].title === '📷 ReactNative') {
      const skill = [
        {
          _id: 84,
          text: 'ReactNAtive',
          createdAt: new Date(),
          user: {
            _id: this.props.user._id,
          },
        },
      ];
      this.socket.emit('chat message', skill);
    } else if (quickReply[0].title === 'Flutter') {
      const skill = [
        {
          _id: 85,
          text: 'Flutter',
          createdAt: new Date(),
          user: {
            _id: this.props.user._id,
          },
        },
      ];
      this.socket.emit('chat message', skill);
    }
    // infinite possibilities
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{height: height * 0.05}}>
          <Text style={{...FONTS.body2, textAlign: 'center'}}>Chat</Text>
        </View>
        <View
          style={{
            backgroundColor: COLORS.white,
            width: width,
            height:
              Platform.OS === 'ios' ? height * 0.8 - 10 : height * 0.75 + 5,
          }}>
          <GiftedChat
            showUserAvatar={true}
            messages={this.state.chatMessages}
            onSend={this.onSend}
            user={{
              _id: this.props.user._id,
              avatar: this.props.user.avatar,
              name: this.props.user.name,
            }}
            onQuickReply={quickReply => this.onQuickReply(quickReply)}
            renderSend={this._renderSend}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => ({
  user: state.userReducers.user,
});
export default connect(mapStateToProps)(ChatScreen);

const mapDispatchToProps = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
