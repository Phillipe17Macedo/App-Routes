import { Tabs } from "expo-router";

export default function Layout(){
    return(
        <Tabs
            screenOptions={{
                headerStyle:{
                    backgroundColor: '#173540'
                },
                headerTintColor: '#84B026'
            }}
        >
            <Tabs.Screen name="index" options={{title: "Home"}}/>
            <Tabs.Screen name="profile" options={{title: "Perfil"}}/>
            <Tabs.Screen name="user/[id]" options={{title: "Usuário"}}/>
            <Tabs.Screen name="(tabs)"options={{headerShown: false}}/>
        </Tabs>
    )
}