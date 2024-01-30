import { Image, View ,Text, SafeAreaView } from 'react-native';
import Profile from './Component/Profile';
import Button from './Component/Button';
import ChangeProfile from './Component/ChangeProfile';

export default function App() {
  return (
    <SafeAreaView className="flex-1  justify-start p-4 items-center bg-slate-800 text-white px-4 py-4 rounded-xl border border-slate-900" >
      <View>
            <Profile />
            <Text className="text-white flex-1 justify-start font-medium text-2xl mt-2">
              Priyansh Yadav
            </Text>
          <View className= " bg-white rounded-xl p-2 flex justify-start my-2 items-center">
            <ChangeProfile label="Welcome Buttom " />
          </View>
          <View className= " bg-white rounded-xl p-2 flex justify-start items-center">
            <Button label="Software Developer" />
          </View>
      </View>
    </SafeAreaView>
  );
}


