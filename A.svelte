<script lang="ts">
  import B from "./B.svelte";
</script>

<b onblur={(event) => event.preventDefault()}></b>
<B onblur={(event) => event.preventDefault()} />
