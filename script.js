
const bookmarks = [
  "India's Space Mission Success",
  "New Tech in AI Changing the World"
];

const bookmarkSection = document.getElementById("bookmarks");
bookmarkSection.innerHTML = "<ul>" + bookmarks.map(item => `<li>${item}</li>`).join('') + "</ul>";
