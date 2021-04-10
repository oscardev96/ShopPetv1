import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Input, Label, Item, Icon, Form} from 'native-base';
import {width, height, COLORS, FONTS} from '../../constants/theme';
import IconF from 'react-native-vector-icons/FontAwesome';
import * as userActions from '../../redux/actions/userActions';
import {useDispatch, useSelector} from 'react-redux';
const UserScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const dataUser = route.params;
  const sheetRef = useRef(null);
  const [avatar, setAvatar] = useState(dataUser.avatar);
  const [email, setemail] = useState(dataUser.email);
  const [username, setusername] = useState(dataUser.username);
  const [phone, setphone] = useState(dataUser.phone);
  const [address, setaddress] = useState(dataUser.address);
  const [name, setname] = useState(dataUser.name);
  const SaveAction = () => {
    let data = {email, phone, address, username, name, avatar};
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <IconF
          size={20}
          name="arrow-left"
          style={{padding: 10}}
          onPress={() => {
            navigation.navigate('ProfileScreen');
          }}
        />
      </View>
      {/* END HEADER */}
      <View
        style={{
          height: height * 0.15,
          alignItems: 'center',
        }}>
        <Image style={styles.image} resizeMode="cover" source={{uri: avatar}} />

        <Text
          style={{...FONTS.h4, color: COLORS.primary, marginTop: 10}}
          onPress={() => {}}>
          Change photo
        </Text>
      </View>
      {/* END AVATAR */}
      <View style={styles.form}>
        <Form>
          <Item stackedLabel style={styles.itemInfo}>
            <Label style={{...FONTS.body4, color: COLORS.textSecond}}>
              Name
            </Label>
            <Input
              onChangeText={text => {
                setname(text);
              }}
              placeholder={dataUser.name}
              defaultValue={dataUser.name}
              style={styles.textIpnput}
            />
          </Item>
          <Item stackedLabel style={styles.itemInfo}>
            <Label style={{...FONTS.body4, color: COLORS.textSecond}}>
              Username
            </Label>
            <Input
              style={styles.textIpnput}
              onChangeText={text => {
                setusername(text);
              }}
              placeholder={
                dataUser.username ? dataUser.username : 'Make your User Name'
              }
              defaultValue={dataUser.username ? dataUser.username : ''}
            />
          </Item>
          <Item stackedLabel style={styles.itemInfo}>
            <Label style={{...FONTS.body4, color: COLORS.textSecond}}>
              Email
            </Label>
            <Input
              style={styles.textIpnput}
              onChangeText={text => {
                setemail(text);
              }}
              placeholder={dataUser.email}
              defaultValue={dataUser.email}
            />
          </Item>
          <Item stackedLabel style={styles.itemInfo}>
            <Label style={{...FONTS.body4, color: COLORS.textSecond}}>
              Phone
            </Label>
            <Input
              style={styles.textIpnput}
              keyboardType="numeric"
              onChangeText={text => {
                setphone(text);
              }}
              placeholder={
                dataUser.phone ? dataUser.phone.toString() : 'Your Phone Number'
              }
              defaultValue={dataUser.phone ? dataUser.phone.toString() : ''}
            />
          </Item>
          <Item stackedLabel style={styles.itemInfo}>
            <Label style={{...FONTS.body4, color: COLORS.textSecond}}>
              Address
            </Label>
            <Input
              style={styles.textIpnput}
              onChangeText={text => {
                setaddress(text);
              }}
              placeholder={dataUser.address ? dataUser.address : 'Your Address'}
              defaultValue={dataUser.address ? dataUser.address : ''}
            />
          </Item>
        </Form>
      </View>
      {/* END FORM */}
      <View
        style={{
          position: 'absolute',
          bottom: 30,
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            SaveAction();
          }}>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UserScreen;
const styles = StyleSheet.create({
  header: {
    height: height * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  icon: {
    color: '#333',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textimage: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  form: {
    width: width * 0.9,
    alignSelf: 'center',
  },
  itemInfo: {
    height: 80,
  },
  btn: {
    width: width * 0.8,
    backgroundColor: COLORS.primary,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  textIpnput: {...FONTS.body3, color: COLORS.text, marginTop: 5},
});
