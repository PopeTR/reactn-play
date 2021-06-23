import { StyleSheet, Platform } from 'react-native';

export const globalStyles = StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 50,
        fontWeight: 'bold',
    },
    card: {
        marginTop: 20,
        backgroundColor: '#f3f3f3'

    },
    image: {
        width: '100%',
        height: 150,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,

    },
    mainButton: {
        backgroundColor: 'red',
        borderRadius: 10,
        width: 150,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        margin: 20,
        marginLeft: 0,
        marginBottom: 0
    },
    mainButtonLabel: {
        color: 'white',
        fontWeight: 'bold',

    },
    line: {
        width: 20,
        borderBottomColor: "red",
        borderBottomWidth: 2,
        marginTop: 10,
        marginBottom: 10,
    }
})
