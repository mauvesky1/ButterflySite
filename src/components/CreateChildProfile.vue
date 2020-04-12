<template>
  <div>
    <h1>Create your child's new account:</h1>
    <div>
      <CreateChildForm />
      <router-link to="/:username">Submit!</router-link>
    </div>
  </div>
</template>

<script>
import CreateChildForm from "./CreateChildForm";

export default {
  components: { CreateChildForm }
};
</script>
