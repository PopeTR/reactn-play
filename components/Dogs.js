import React from 'react'
import { View, Text, Image, Pressable, FlatList, ScrollView, SafeAreaView, Platform } from 'react-native'
import { globalStyles } from '../styles/globalStyles'
import { dogsData } from '../data/dogsData'

const Dogs = () => {
    const renderItem = ({ item }) => {
        return (
            <View style={globalStyles.card}>
                <View>
                    <Image source={{ uri: item.image }} resizeMode="cover" style={globalStyles.image} />
                </View>
                <View style={{ padding: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                    <View style={globalStyles.line} />
                    <Text>Type: {item.type}</Text>
                    <Text>Address: {item.location}</Text>
                    <Pressable
                        style={globalStyles.mainButton}
                        onPress={() => navigation.navigate('Home')}>
                        <Text style={globalStyles.mainButtonLabel}>Book Now</Text>
                    </Pressable>
                </View>
            </View>
        )
    }
    console.log(dogsData);
    return (
        <SafeAreaView style={globalStyles.droidSafeArea}>
            <View style={globalStyles.container}>
                <Text style={globalStyles.heading}>Our Dogs</Text>
                <ScrollView style={{ width: "90%" }}>
                    <FlatList
                        data={dogsData}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}

                    />

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}



export default Dogs
