  <template>
  <router-link :to="{ name: 'instructions' }">
    <button class="top-btn">How to Play</button>
  </router-link>
</template>

<script>
export default {
  name: "HowToPlayButton"
};
</script>

<style>
.top-btn {
  font-size: 18px;
  border-radius: 30px;

  text-decoration: none;
  color: white;
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