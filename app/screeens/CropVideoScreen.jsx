import {useMutation} from "@tanstack/react-query";
import {View, Button, Text} from "react-native";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import VideoPlayer from "../components/VideoPlayer";

const CropVideoScreen = ({route, navigation}) => {

    const {videoUri} = route.params;

    const cropVideo = async () => {
        const 
    }
    return(

        <View className="flex-1 bg-gray-100">
        <VideoPlayer className="w-full h-full"/>
        </View>
    )
}

export default CropVideoScreen;