const searchFriends = async (text) => {
  isLoading.value = true;
  try {
    const { data } = await axios.get(`/friends/search?query=${text}`);
    filteredFriends.value = data; // each should have an `.id`
  } catch (err) {
    console.error(err);
  } finally {
    isLoading.value = false;
  }
};