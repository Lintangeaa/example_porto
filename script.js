document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar")

  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.remove("bg-transparent")
      navbar.classList.add("navbar-solid")
      console.log("a")
    } else {
      navbar.classList.remove("navbar-solid")
      navbar.classList.add("bg-transparent")
    }
  }
  window.addEventListener("scroll", handleScroll)

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  // Fungsi untuk menambahkan kelas aktif pada elemen navbar sesuai dengan elemen yang terlihat di viewport
  function setActiveNavbarLink() {
    const sections = document.querySelectorAll("section")
    sections.forEach((section) => {
      const navItem = document.querySelector(
        `.nav-item [href="#${section.id}"]`
      )
      if (navItem && isElementInViewport(section)) {
        navItem.parentElement.classList.add("active")
      } else if (navItem) {
        navItem.parentElement.classList.remove("active")
      }
    })
  }

  window.addEventListener("scroll", setActiveNavbarLink)
})
