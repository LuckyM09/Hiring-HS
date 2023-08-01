const toggleBtn= document.querySelector('.toggle-btn')
const toggleBtnIcon= document.querySelector('.toggle-btn i')
const dropdownbtn= document.querySelector('.dropdown-btn')

toggleBtn.onclick= function () {
  dropdownbtn.classList.toggle('open')
  
  const isopen= dropdownbtn.classList.contains('open')
  
  toggleBtnIcon.classList=isopen
  ? 'fa-solid fa-xmark'
  : 'fa-solid fa-bars'
}