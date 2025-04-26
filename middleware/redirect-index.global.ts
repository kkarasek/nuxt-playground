export default defineNuxtRouteMiddleware((to, from) => {
	if (to.path === '/') {
		console.log('Redirect to /counter 🚏');
		return navigateTo('/counter', { redirectCode: 301 });
	}
});
