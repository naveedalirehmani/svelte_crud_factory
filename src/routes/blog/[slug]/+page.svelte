<script>
  /** @type {import('./$types').PageData} */
  export let data;
  let formData = "";
  async function fetchRouteData() {
    const response = await fetch("/api/random-number?min=10&max=20");
    formData = await response.json();
  }
</script>

<h1>About this site</h1>
<p>TODO...</p>
<a href="/">Home</a>

<p>{JSON.stringify(formData)}</p>

<button on:click={fetchRouteData}>fetch data</button>

<h1>{data.title}</h1>
<div>{@html data.content}</div>
