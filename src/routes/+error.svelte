<script>
import '../app.css'
import Header from '$lib/components/Header.svelte'
import Footer from '$lib/components/Footer.svelte'
import headerImg from '$lib/images/hero-banners/banner5.avif'
import { page } from '$app/state'
// add more later for different status codes
if(page.status == 404)
{
	var catchphrase = "Looks like the page you're looking for wandered into the core and got irradiated!"
} 
else
{
	var catchphrase = "An unexpected error has occurred."
}
</script>

<title>404 - Page not Found</title>

<Header
	heroImg={headerImg}
	title="{page.status} - {page.error?.message || 'Page not found'}"
	catchphrase="{catchphrase}"
	button="/"
    buttontext = "Home"
/>
<Footer />
