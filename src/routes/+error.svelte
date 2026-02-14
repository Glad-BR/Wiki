<script>
import '../app.css'
import Header from '$lib/components/Header.svelte'
import Footer from '$lib/components/Footer.svelte'
import headerImg from '$lib/images/hero-banners/banner5.avif'
</script>

<title>404 - Page not Found</title>

<Header
	heroImg={headerImg}
	title="404 Page Not Found"
	catchphrase="Looks like this page wandered into the reactor core and got lost!"
	button="/"
    buttontext = "Home"
/>
<Footer />
