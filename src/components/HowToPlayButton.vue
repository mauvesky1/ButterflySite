  <template>
  <button class="top-btn">
    <router-link :to="{ name: 'instructions' }" class="top-link">How to Play</router-link>
  </button>
</template>

<script>
export default {
  name: "HowToPlayButton"
};
</script>

<style>
.top-link {
  text-decoration: none;
  color: white;
}

.top-btn {
  font-size: 18px;
  border-radius: 30px;

  border: 2px solid #cccccc;
  background: rgba(204, 204, 204, 0.2);
  padding: 14px 20px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  margin-top: 30px;
  margin-bottom: 10px;
}
</style>