var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar")
var tabicons = document.querySelector(".topic-tabs-container")



menuIcon.onclick = function(){
  sidebar.classList.toggle("small-sidebar");
  tabicons.classList.toggle("tab-links");
}
