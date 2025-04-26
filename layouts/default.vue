<template>
	<div class="flex flex-col h-screen w-screen overflow-hidden">
		<AppNavbar />
		<main class="flex-grow flex items-center justify-center">
			<slot />
		</main>
	</div>
</template>
