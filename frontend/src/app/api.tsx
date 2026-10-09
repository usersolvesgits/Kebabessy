import { Text, Button, ScrollView } from 'react-native';
import { get_api } from '@/api/api_call';

export default function Api() {
    return (
        <ScrollView style={{backgroundColor: 'gray'}}>
                <Text>
                    Hello, world! from api.tsx
                </Text>
                <Text> </Text>
                <Button title={"Press me to view the result of the api call!"} onPress={ get_api }></Button>
        </ScrollView>
    )
}