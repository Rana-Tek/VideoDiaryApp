import React, {useState, useEffect} from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {VideoList} from "../components/VideoList";
import {useVideoStore} from "../store/useVideoStore";

const HomeScreen = () => {
    const navigation = useNavigation();
    const {videos, loadVideos} = useVideoStore();

    useEffect(() => {
        loadVideos(); //Fetch videos from storage (or API)
    }, []);

    return(
        <View className="flex-1 bg-gary-100">
        <Text className="text-2xl font-bold text-center mt-10"> Your Video Diary </Text>
        <Button className="bg-bluee-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 " 
        title="New Entry" 
        onPress={() => navigation.navigate('SelectVideoScreen')}/>
        <VideoList className="mt-8"
        videos={videos}
        onVideoPress={(video) => navigation.navigate('DetailsScreen', { video })}
      />
        </View>
    )
}

export default HomeScreen;