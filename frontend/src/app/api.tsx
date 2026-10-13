import { Text, Button, ScrollView } from 'react-native';
import { getApi } from '@/api/api_call';
import getStili from "@/app/_styles";

const stili = getStili();

export default function Api() {
    return (
        <ScrollView style={{backgroundColor: 'gray'}}>
            <Text style={stili.center}>
                Hello, world! from api.tsx
            </Text>
            <Text> </Text>
            <Button title={"Press me to view the result of the api call!"} onPress={ getApi }></Button>
        </ScrollView>
    )
}