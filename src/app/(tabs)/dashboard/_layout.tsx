import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Layout(){
    return(
        <Tabs>
            <Tabs.Screen 
                name="index" 
                options={{
                    headerShown: false, 
                    title: "Painel",
                    tabBarIcon: ({focused, color, size}) => {
                        if(focused){
                            return <MaterialCommunityIcons name="calculator-variant" color={"#84B026"} size={32} />
                        }
                        return <AntDesign name="calculator" color={"#173540"} size={size}/>
                    }
                }}
            />
            <Tabs.Screen 
                name="graphics" 
                options={{
                    headerShown: false, 
                    title: "Gráficos",
                    tabBarIcon: ({focused, color, size}) => {
                        if(focused){
                            return <MaterialIcons name="auto-graph" color={"#84B026"} size={32}/>
                        }
                        return <Octicons name="graph" color={"#217373"} size={size} />
                    }
                }}
            />
        </Tabs>
    )
}