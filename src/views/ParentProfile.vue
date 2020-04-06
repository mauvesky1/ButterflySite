<template>
  <div>
    <div>
      <h1>WELCOME HOME MOM - Parent Page</h1>
    </div>
    <div id="nav">
      <router-link to="/childprofile">Individual Child Profile</router-link>

      <router-link to="/profile/newchild">Add Child</router-link>
    </div>
  </div>
</template>

export default {
  name: "ParentProfile",

};