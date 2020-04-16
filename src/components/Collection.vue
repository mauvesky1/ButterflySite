<template>
  <div>
    <button class="back-btn">
      <router-link
        v-if="$routerHistory.hasPrevious()"
        :to="{ path: $routerHistory.previous().path }"
        class="back-link"
      >Back to Profile</router-link>
    </button>
    <h1>{{$route.params.username}}'s Collection:</h1>
    <ul>
      <li>
        Flitzy
        <router-link :to="{name: 'IndividualButterfly'}">Find more information about Flitzy!</router-link>
      </li>
    </ul>
  </div>
</template>
