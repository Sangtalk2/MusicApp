import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from './src/pages/Settings';
import Orders from './src/pages/Orders';
import Delivery from './src/pages/Delivery';
import SignUp from './src/pages/SignUp';
import SignIn from './src/pages/SignIn';
import { useState } from 'react';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { Image, StyleSheet, Pressable, Text, TouchableHighlight, TouchableOpacity, View, PanResponder } from 'react-native';
import { useCallback } from 'react';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  MyPage: undefined;
};
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type DetailsScreenProps = NativeStackScreenProps<ParamListBase, 'Details'>;
type MypageScreenProps = NativeStackScreenProps<ParamListBase, 'MyPage'>;

const page = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0.1, 0.1, 0.1, 0.07)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 3,
    borderRadius: 5,
  },
  container2: {
    backgroundColor: 'rgba(0.1, 0.1, 0.1, 0.1)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 3,
    borderRadius: 5,
    flexDirection: 'row'
  },
  MusicContainer: {
    paddingVertical: 5,
    paddingHorizontal: 25,
    marginHorizontal: 3,
  },
  MusicBox: {
    backgroundColor: 'rgba(0.1, 0.1, 0.1, 0.07)',
    paddingVertical: 9.5,
    paddingHorizontal: 10,
    marginVertical: 4,
    width: 350,
    height: 70,
    flexDirection: 'row'
  },
  MusicStyle: {
    backgroundColor: 'gray',
    marginRight: 10,
    width: 50,
    height: 50,
  },
  Logo: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    width: 35,
    height: 35,
    borderWidth: 1,
    marginTop: 3,
    marginRight: 15,
    marginLeft: 15
  },
  player: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    width: 100,
    height: 100,
    borderWidth: 1,
    marginRight: 30
  },
  mypagebox1: {
    paddingLeft: 40,
    paddingTop: 30,
    backgroundColor: 'rgba(0.1,0.1,0.1,0.1)',
    flex: 1
  },
  logoutbutton: {
    color: 'white',
    marginVertical: 10,
    borderColor: 'rgba(0.1, 0.1, 0.1, 0.15)',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: 'rgba(0.1, 0.1, 0.1, 0.15)'
  }
});

function HomeScreen({ navigation }: HomeScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Details');
  }, [navigation]);

  return (
    <>
      <View style={{ flex: 1, backgroundColor: 'rgba(0.1, 0.1, 0.1, 0.1)', alignItems: 'center', justifyContent: 'center', paddingTop: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={page.container}><Text>벚꽃 </Text></View>
          <View style={page.container}><Text>잔잔한</Text></View>
          <View style={page.container}><Text>휴식 </Text></View>
          <View style={page.container}><Text>여행 </Text></View>
          <View style={page.container}><Text>비오는 날 </Text></View>
        </View>
      </View>
      <View style={{ flex: 7, backgroundColor: 'rgba(0.1, 0.1, 0.1, 0.1)', alignItems: 'flex-start', justifyContent: 'center' }}>
        <View style={page.MusicContainer}>
          <Text style={{ fontWeight: 'bold', marginBottom: 5, marginTop: 50 }}>Today's Music!</Text>
          <View style={page.MusicBox}><TouchableOpacity onPress={onClick}><View style={page.MusicStyle}></View></TouchableOpacity><Text>사랑인가봐 - 멜로망스</Text></View>
          <View style={page.MusicBox}><TouchableOpacity onPress={onClick}><View style={page.MusicStyle}></View></TouchableOpacity><Text>Tomboy - (G)I-DLE</Text></View>
          <View style={page.MusicBox}><TouchableOpacity onPress={onClick}><View style={page.MusicStyle}></View></TouchableOpacity><Text>LOVE DIVE - IVE(아이브)</Text></View>
          <View style={page.MusicBox}><TouchableOpacity onPress={onClick}><View style={page.MusicStyle}></View></TouchableOpacity><Text>신호등 - 이무진</Text></View>
        </View>
      </View>
      <View style={{ flex: 7, backgroundColor: 'rgba(0.1, 0.1, 0.1, 0.1)', alignItems: 'center', justifyContent: 'center' }}>
        <Text>추가 예정 ... 구현1 구현2</Text>
      </View>
    </>
  );
}


function DetailsScreen({ navigation }: DetailsScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: 'rgba(0.1,0.1,0.1,0.1)', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, color: 'rgba(0.1, 0.1, 0.1, 0.5)', marginTop: 20 }}>사랑인가 봐 - 멜로망스(MeloMance)</Text>
      </View>
      <View style={{ backgroundColor: 'rgba(0.1,0.1,0.1,0.1)', flex: 7, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row', marginBottom: 30 }}>
          <View style={{ flex: 1 }}></View>
          <Text style={{ borderBottomColor: 'rgba(0.1,0.1,0.1,0.25)', borderBottomWidth: 1, flex: 15 }}></Text>
          <View style={{ flex: 1 }}></View>
        </View>
        <Image source={require('./src/images/musicsample.jpg')} style={{ borderRadius: 5, width: 350, height: 350 }} />
      </View>
      <View style={{ backgroundColor: 'rgba(0.1,0.1,0.1,0.1)', flex: 5 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}></View>
          <Text style={{ borderBottomColor: 'rgba(0.1,0.1,0.1,0.25)', borderBottomWidth: 1, flex: 15 }}></Text>
          <View style={{ flex: 1 }}></View>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 18, color: 'rgba(0.1, 0.1, 0.1, 0.5)', marginTop: 17 }}>너와 함께 하고 싶은 일들을 상상하는 게</Text>
          <Text style={{ fontSize: 18, color: 'rgba(0.1, 0.1, 0.1, 0.5)', marginTop: 8 }}>요즘 내 일상이 되고</Text>
          <Text style={{ fontSize: 18, color: 'rgba(0.1, 0.1, 0.1, 0.5)', marginTop: 8 }}>너의 즐거워하는 모습을 보고 있으면</Text>
          <Text style={{ fontSize: 18, color: 'rgba(0.1, 0.1, 0.1, 0.5)', marginTop: 8 }}>자연스레 따라 웃고 있는 걸</Text>
        </View>
      </View>
    </View>
  );
}


function MypageScreen({ navigation }: MypageScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      <View style={page.mypagebox1}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('./src/images/playericon.jpg')} style={page.player} />
          <View>
            <Text style={{ fontSize: 20, color: 'rgba(0.1, 0.1, 0.1, 0.5)', fontWeight: 'bold', marginTop: 12, marginLeft: 7 }}>User1</Text>
            <TouchableOpacity><Text style={page.logoutbutton}>로그아웃</Text></TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ backgroundColor: 'rgba(0.1,0.1,0.1,0.1)', flex: 3 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}></View>
          <Text style={{ borderBottomColor: 'rgba(0.1,0.1,0.1,0.25)', borderBottomWidth: 1, flex: 15 }}></Text>
          <View style={{ flex: 1 }}></View>
        </View>
        <View>
          <Text style={{ fontSize: 25, color: 'rgba(0.1, 0.1, 0.1, 0.5)', fontWeight: 'bold', marginTop: 20, marginLeft: 30 }}>Music Tag</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingTop: 25, alignItems: 'center', justifyContent: 'center' }}>
          <View style={page.container2}><Text>벚꽃</Text><Text style={{ fontSize: 11 }}>  x</Text></View>
          <View style={page.container2}><Text>잔잔한</Text><Text style={{ fontSize: 11 }}>  x</Text></View>
          <View style={page.container2}><Text>휴식 </Text><Text style={{ fontSize: 11 }}>  x</Text></View>
          <View style={page.container2}><Text>여행 </Text><Text style={{ fontSize: 11 }}>  x</Text></View>
          <View style={page.container2}><Text>비오는 날 </Text><Text style={{ fontSize: 11 }}>  x</Text></View>
        </View>
        <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingTop: 12, alignItems: 'center', justifyContent: 'center' }}>
          <View style={page.container2}><Text>따뜻한</Text><Text style={{ fontSize: 11 }}>  x</Text></View>
          <View style={page.container2}><Text>사랑</Text><Text style={{ fontSize: 11 }}>  x</Text></View>
          <View style={page.container2}><Text>추억 </Text><Text style={{ fontSize: 11 }}>  x</Text></View>
          <View style={page.container2}><Text>휴식처 </Text><Text style={{ fontSize: 11 }}>  x</Text></View>
          <View style={page.container2}><Text>새벽 </Text><Text style={{ fontSize: 11 }}>  x</Text></View>
        </View>
      </View>
      <View style={{ backgroundColor: 'rgba(0.1,0.1,0.1,0.1)', flex: 3 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}></View>
          <Text style={{ borderBottomColor: 'rgba(0.1,0.1,0.1,0.25)', borderBottomWidth: 1, flex: 15 }}></Text>
          <View style={{ flex: 1 }}></View>
        </View>
        <View>
          <Text style={{ fontSize: 25, color: 'rgba(0.1, 0.1, 0.1, 0.5)', fontWeight: 'bold', marginTop: 20, marginLeft: 30 }}>PlayList</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Image source={require('./src/images/playlisticon.jpg')} style={{ marginTop: 25, marginLeft: 35, width: 100, height: 100, borderRadius: 20 }} />
          </View>
          <View style={{ marginTop: 25, marginLeft: 20 }}>
            <Text style={{ fontSize: 17, color: 'rgba(0.1, 0.1, 0.1, 0.5)', fontWeight: 'bold' }}>나만의 플레이리스트</Text>
            <TouchableOpacity><Text style={[page.logoutbutton, { width: 90, height: 33 }]}> 재생하기</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export type LoggedInParamList = {
  Orders: undefined;
  Settings: undefined;
  Delivery: undefined;
  Complete: { orderId: string };
};

const Tab = createBottomTabNavigator();

function Bottom() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen
          name="Orders"
          component={Orders}
          options={{ title: '오더 목록' }}
        />
        <Tab.Screen
          name="Delivery"
          component={Delivery}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{ title: '내 정보' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Details"

        screenOptions={({ navigation, route }) =>
        ({
          headerLeft: () =>
          (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image source={require('./src/images/magician.jpg')} style={page.Logo} />
            </TouchableOpacity>
          ),
          headerRight: () =>
          (
            <TouchableOpacity onPress={() => navigation.navigate('MyPage')}>
              <Image source={require('./src/images/userIcon.jpg')} style={[page.Logo, { marginRight: 40 }]} />
            </TouchableOpacity>
          )
        })
        }>
        <Stack.Screen
          name="Bottom"
          component={Bottom}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Music App',
            headerStyle: {
              backgroundColor: 'rgba(0.1, 0.1, 0.1,0.12)',
            },
            headerShadowVisible: false
          }
          }
        />
        <Stack.Screen name="Details" options={{
          headerStyle: {
            backgroundColor: 'rgba(0.1, 0.1, 0.1,0.12)',
          },
          headerShadowVisible: false
        }
        }>
          {props => <DetailsScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="MyPage" options={{
          headerStyle: {
            backgroundColor: 'rgba(0.1, 0.1, 0.1,0.12)',
          },
          headerShadowVisible: false
        }
        }>
          {props => <MypageScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer >

  );
}

export default App;