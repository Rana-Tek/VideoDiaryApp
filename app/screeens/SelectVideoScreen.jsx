import * as ImagePicker from "expo-image-picker";
import {useState} from 'react';
import { View, Text, Button } from 'react-native';

export default function SelectVideoScreen({navigation}) {
    const [video, setVideo] = useState(null);

    const pickVideo = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Videos,
            allowsEditing: false,
        });
        
        if(!result.canceled) {
            setVideo(result.url);
            navigation.push('cropVideo', {videoUrl: result.uri});
        }
    };

    return(
        <View className="flex-1 items-center justify-center bg-gray-100">
        <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" title="Select Video" onPress={pickVideo}/>
        {video && <Text className="text-xl font-bold mb-4"> Selected Video: {video}</Text>}
        </View>
    );
}
