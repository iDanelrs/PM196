import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";


const App = () => {
    const [activo, setActivo] = useState(false);

    const cambiarSwitch = () => {setActivo(previousState => !previousState)}
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Activar caracteristica:</Text>
                <Switch
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />

            <Text style={styles.statusText}>Estado Actual: {isEnabled ? 'Activado' : 'Descativado'}</Text>
        </View>
    );
}

//Estilos

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    label: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
        color: '#333',
    },
    statusText: {
        fontSize: 16,
        marginTop: 20,
        color: '#666',
    },
});