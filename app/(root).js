import { Stack } from "expo-router"

const RootLayout = () => {
	return (
		<Stack>
			<Stack.Screen
				name="(tabs)"
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="modals"
				options={{
					presentation: "modal",
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="modal"
				options={{
					presentation: "modal",
					headerShown: false,
				}}
			/>
		</Stack>
	)
}
export default RootLayout