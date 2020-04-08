<template>
  <div>
    <h1>Create your new child!</h1>
    <div>
      <CreateChildForm />
      <router-link to="/profile">Submit!</router-link>
    </div>
  </div>
</template>

<script>
import CreateChildForm from "../components/CreateChildForm";

export default {
  components: { CreateChildForm }
};
</script>