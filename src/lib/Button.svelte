<script lang="ts">
  export let label = "Button";
</script>

<button {...$$restProps}>{label}</button>

<style>
  button {
    cursor: pointer;
    padding: 1rem 1.8rem;
    border-radius: 12px;
    border: none;
    background: rgb(31, 70, 149);
    color: white;
    font-weight: bold;
  }

  button:hover {
    opacity: 0.85;
  }

  button:active {
    opacity: 1;
  }
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>
