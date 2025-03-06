// Event data - in a real application, this would come from a database or API
const eventsData = [
  {
    id: 1,
    title: "Summer Music Festival",
    date: "2023-06-15",
    time: "18:00",
    location: "Central Park, New York",
    category: "music",
    price: "$45",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80",
    description: "Experience the ultimate summer music festival with top artists from around the world.",
    tags: ["music", "festival", "summer", "outdoor"],
    organizer: {
      name: "Event Productions Inc.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100&q=80",
      description: "Professional event management company with over 10 years of experience.",
    },
    venue: {
      name: "Central Park",
      address: "Central Park, New York, NY 10022",
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?auto=format&fit=crop&w=600&q=80",
    },
    fullDescription: `
      <p>Join us for the biggest music festival of the summer, featuring an incredible lineup of artists across multiple stages. From rock and pop to electronic and hip-hop, there's something for every music lover.</p>
      
      <p>This year's festival will feature enhanced sound systems, expanded food and beverage options, and interactive art installations throughout the venue.</p>
      
      <h3>What You'll Experience</h3>
      <ul>
        <li>Live performances from top artists</li>
        <li>Multiple stages with different music genres</li>
        <li>Food and beverage options from local vendors</li>
        <li>Interactive art installations</li>
        <li>VIP areas with premium amenities</li>
      </ul>
      
      <h3>Schedule</h3>
      <div class="event-schedule">
        <div class="schedule-item">
          <div class="schedule-time">2:00 PM</div>
          <div class="schedule-content">
            <h4>Gates Open</h4>
            <p>Early access and welcome activities</p>
          </div>
        </div>
        <div class="schedule-item">
          <div class="schedule-time">3:00 PM</div>
          <div class="schedule-content">
            <h4>Opening Acts</h4>
            <p>Performances by emerging artists</p>
          </div>
        </div>
        <div class="schedule-item">
          <div class="schedule-time">6:00 PM</div>
          <div class="schedule-content">
            <h4>Main Stage Headliners</h4>
            <p>Performances by headline artists</p>
          </div>
        </div>
        <div class="schedule-item">
          <div class="schedule-time">10:00 PM</div>
          <div class="schedule-content">
            <h4>Closing Act</h4>
            <p>Special performance by featured artist</p>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 2,
    title: "Tech Innovation Conference",
    date: "2023-07-10",
    time: "09:00",
    location: "Convention Center, San Francisco",
    category: "tech",
    price: "$120",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    description: "Discover the latest trends and innovations in technology at this premier conference.",
    tags: ["tech", "innovation", "conference", "networking"],
    organizer: {
      name: "TechEvents Co.",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&h=100&q=80",
      description: "Leading organizer of technology conferences and workshops.",
    },
    venue: {
      name: "Convention Center",
      address: "747 Howard St, San Francisco, CA 94103",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=600&q=80",
    },
    fullDescription: `
      <p>Join industry leaders and innovators at the Tech Innovation Conference, where cutting-edge technologies and groundbreaking ideas take center stage. This two-day event features keynote speeches, panel discussions, workshops, and networking opportunities.</p>
      
      <p>Whether you're a tech professional, entrepreneur, or enthusiast, this conference offers valuable insights into the future of technology and how it's shaping our world.</p>
      
      <h3>What You'll Experience</h3>
      <ul>
        <li>Keynote speeches from industry leaders</li>
        <li>Panel discussions on emerging technologies</li>
        <li>Hands-on workshops and demonstrations</li>
        <li>Networking opportunities with professionals</li>
        <li>Exhibition area showcasing new products</li>
      </ul>
      
      <h3>Schedule</h3>
      <div class="event-schedule">
        <div class="schedule-item">
          <div class="schedule-time">8:00 AM</div>
          <div class="schedule-content">
            <h4>Registration & Breakfast</h4>
            <p>Check-in and networking breakfast</p>
          </div>
        </div>
        <div class="schedule-item">
          <div class="schedule-time">9:00 AM</div>
          <div class="schedule-content">
            <h4>Opening Keynote</h4>
            <p>Welcome address and keynote speech</p>
          </div>
        </div>
        <div class="schedule-item">
          <div class="schedule-time">11:00 AM</div>
          <div class="schedule-content">
            <h4>Breakout Sessions</h4>
            <p>Specialized tracks on AI, blockchain, and more</p>
          </div>
        </div>
        <div class="schedule-item">
          <div class="schedule-time">4:00 PM</div>
          <div class="schedule-content">
            <h4>Networking Reception</h4>
            <p>Connect with speakers and attendees</p>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 3,
    title: "Food & Wine Festival",
    date: "2023-08-05",
    time: "12:00",
    location: "Waterfront Park, Chicago",
    category: "food",
    price: "$35",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    description: "Indulge in culinary delights and fine wines from top chefs and wineries.",
    tags: ["food", "wine", "festival", "culinary"],
    organizer: {
      name: "Culinary Events Group",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=100&h=100&q=80",
      description: "Specialists in food and beverage events across the country.",
    },
    venue: {
      name: "Waterfront Park",
      address: "337 E Randolph St, Chicago, IL 60601",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=600&q=80",
    },
    fullDescription: `
      <p>Celebrate the art of food and wine at Chicago's premier culinary event. The Food & Wine Festival brings together renowned chefs, sommeliers, and food artisans for a day of tastings, demonstrations, and culinary education.</p>
      
      <p>Stroll through the beautiful Waterfront Park while sampling dishes from the city's best restaurants and sipping wines from around the world.</p>
      
      <h3>What You'll Experience</h3>
      <ul>
        <li>Food tastings from top restaurants</li>
        <li>Wine tastings from premium wineries</li>
        <li>Cooking demonstrations by celebrity chefs</li>
        <li>Artisanal food marketplace</li>
        <li>Live music and entertainment</li>
      </ul>
      
      <h3>Schedule</h3>
      <div class="event-schedule">
        <div class="schedule-item">
          <div class="schedule-time">12:00 PM</div>
          <div class="schedule-content">
            <h4>Festival Opens</h4>
            <p>Begin your culinary journey</p>
          </div>
        </div>
        <div class="schedule-item">
          <div class="schedule-time">1:30 PM</div>
          <div class="schedule-content">
            <h4>Chef Demonstration</h4>
            <p>Learn techniques from master chefs</p>
          </div>
        </div>
        <div class="schedule-item">
          <div class="schedule-time">3:00 PM</div>
          <div class="schedule-content">
            <h4>Wine Tasting Seminar</h4>
            <p>Guided tasting of premium wines</p>
          </div>
        </div>
        <div class="schedule-item">
          <div class="schedule-time">5:00 PM</div>
          <div class="schedule-content">
            <h4>Sunset Reception</h4>
            <p>Special tastings with lakefront views</p>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 4,
    title: "Art Exhibition Opening",
    date: "2023-09-20",
    time: "19:00",
    location: "Modern Art Gallery, Los Angeles",
    category: "arts",
    price: "$15",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80",
    description: "Experience the opening night of this groundbreaking contemporary art exhibition.",
    tags: ["art", "exhibition", "gallery", "contemporary"],
    organizer: {
      name: "LA Arts Foundation",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80",
      description: "Non-profit organization promoting arts and culture in Los Angeles.",
    },
    venue: {
      name: "Modern Art Gallery",
      address: "152 N Central Ave, Los Angeles, CA 90012",
      image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=600&q=80",
    },
    fullDescription: `
      <p>Be among the first to experience "Perspectives," a groundbreaking exhibition featuring works by emerging and established contemporary artists. This opening night event includes guided tours, artist talks, and a reception with refreshments.</p>
      
      <p>The exhibition explores themes of identity, technology, and environmental change through various mediums including painting, sculpture, digital art, and installations.</p>
      
      <h3>What You'll Experience</h3>
      <ul>
        <li>Exclusive first look at the exhibition</li>
        <li>Meet and greet with featured artists</li>
        <li>Curator-led tours of the gallery</li>
        <li>Wine and hors d'oeuvres reception</li>
        <li>Live music performance</li>
      </ul>
      
      <h3>Schedule</h3>
      <div class="event-schedule">
        <div class="schedule-item">
          <div class="schedule-time">7:00 PM</div>
          <div class="schedule-content">
            <h4>Doors Open</h4>
            <p>Welcome reception begins</p>
          </div>
        </div>
        <div class="schedule-item">
          <div class="schedule-time">7:30 PM</div>
          <div class="schedule-content">
            <h4>Curator's Introduction</h4>
            <p>Overview of the exhibition themes</p>
          </div>
        </div>
        <div class="schedule-item">
          <div class="schedule-time">8:00 PM</div>
          <div class="schedule-content">
            <h4>Artist Talks</h4>
            <p>Featured artists discuss their work</p>
          </div>
        </div>
        <div class="schedule-item">
          <div class="schedule-time">9:00 PM</div>
          <div class="schedule-content">
            <h4>Reception Continues</h4>
            <p>Networking and viewing time</p>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 5,
    title: "Marathon & Fitness Expo",
    date: "2023-10-08",
    time: "07:00",
    location: "City Center, Boston",
    category: "sports",
    price: "$50",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80",
    description: "Join thousands of runners for this annual marathon and fitness exhibition.",
    tags: ["sports", "marathon", "fitness", "running"],
    organizer: {
      name: "Boston Athletics Association",
      image: "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?auto=format&fit=crop&w=100&h=100&q=80",
      description: "Organizers of premier running events in the Northeast.",
    },
    venue: {
      name: "City Center",
      address: "100 Legends Way, Boston, MA 02114",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=600&q=80",
    },
    fullDescription: `
      <p>Challenge yourself at Boston's premier running event. The annual Marathon & Fitness Expo includes a full marathon, half marathon, and 5K races, along with a two-day fitness exhibition featuring the latest in sports equipment, nutrition, and training techniques.</p>
      
      <p>Whether you're a competitive runner or a fitness enthusiast, this event offers something for everyone, including training workshops, health screenings, and demonstrations from fitness experts.</p>
      
      <h3>What You'll Experience</h3>
      <ul>
        <li>Professionally timed race courses</li>
        <li>Fitness exhibition with vendor booths</li>
        <li>Training workshops and demonstrations</li>
        <li>Health and nutrition consultations</li>
        <li>Post-race celebration and awards</li>
      </ul>
      
      <h3>Schedule</h3>
      <div class="event-schedule">
        <div class="schedule-item">
          <div class="schedule-time">7:00 AM</div>
          <div class="schedule-content">
            <h4>Marathon Start</h4>
            <p>Full marathon begins</p>
          </div>
        </div>
        <div class="schedule-item">
          <div class="schedule-time">8:00 AM</div>
          <div class="schedule-content">
            <h4>Half Marathon Start</h4>
            <p>Half marathon begins</p>
          </div>
        </div>
        <div class="schedule-item">
          <div class="schedule-time">9:00 AM</div>
          <div class="schedule-content">
            <h4>5K Race</h4>
            <p>5K race begins</p>
          </div>
        </div>
        <div class="schedule-item">
          <div class="schedule-time">10:00 AM</div>
          <div class="schedule-content">
            <h4>Fitness Expo Opens</h4>
            <p>Exhibits and demonstrations begin</p>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 6,
    title: "Business Leadership Workshop",
    date: "2023-11-15",
    time: "10:00",
    location: "Grand Hotel, Miami",
    category: "workshop",
    price: "$85",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    description: "Develop essential leadership skills in this intensive one-day workshop.",
    tags: ["workshop", "business", "leadership", "professional"],
    organizer: {
      name: "Business Growth Institute",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&h=100&q=80",
      description: "Professional development and business training organization.",
    },
    venue: {
      name: "Grand Hotel",
      address: "400 SE 2nd Ave, Miami, FL 33131",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
    },
    fullDescription: `
      <p>Elevate your leadership skills at this intensive workshop designed for business professionals and entrepreneurs. Led by experienced business coaches and industry leaders, this workshop focuses on developing essential leadership competencies for today's challenging business environment.</p>
      
      <p>Through interactive sessions, case studies, and practical exercises, participants will gain valuable insights and actionable strategies to enhance their leadership effectiveness.</p>
      
      <h3>What You'll Learn</h3>
      <ul>
        <li>Strategic thinking and decision-making</li>
        <li>Effective communication and influence</li>
        <li>Team building and motivation techniques</li>
        <li>Change management strategies</li>
        <li>Personal leadership development</li>
      </ul>
      
      <h3>Schedule</h3>
      <div class="event-schedule">
        <div class="schedule-item">
          <div class="schedule-time">9:30 AM</div>
          <div class="schedule-content">
            <h4>Registration & Networking</h4>
            <p>Check-in and morning refreshments</p>
          </div>
        </div>
        <div class="schedule-item">
          <div class="schedule-time">10:00 AM</div>
          <div class="schedule-content">
            <h4>Leadership Fundamentals</h4>
            <p>Core principles and self-assessment</p>
          </div>
        </div>
        <div class="schedule-item">
          <div class="schedule-time">1:00 PM</div>
          <div class="schedule-content">
            <h4>Strategic Leadership</h4>
            <p>Vision, planning, and execution</p>
          </div>
        </div>
        <div class="schedule-item">
          <div class="schedule-time">3:30 PM</div>
          <div class="schedule-content">
            <h4>Action Planning</h4>
            <p>Developing your leadership roadmap</p>
          </div>
        </div>
      </div>
    `,
  },
]

// Reviews data
const reviewsData = [
  {
    id: 1,
    eventId: 1,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5,
    date: "May 20, 2023",
    content:
      "Absolutely amazing event! The music lineup was incredible and the atmosphere was electric. Can't wait for next year's festival!",
  },
  {
    id: 2,
    eventId: 1,
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
    rating: 4,
    date: "May 18, 2023",
    content:
      "Great performances and good organization. The food options were a bit limited, but the music more than made up for it.",
  },
  {
    id: 3,
    eventId: 1,
    name: "Jessica Williams",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5,
    date: "May 16, 2023",
    content:
      "One of the best music festivals I've ever attended! The sound quality was excellent and the crowd was so energetic.",
  },
  {
    id: 4,
    eventId: 2,
    name: "David Rodriguez",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5,
    date: "July 12, 2022",
    content:
      "Incredibly informative conference with top-notch speakers. I learned so much about emerging technologies and made valuable connections.",
  },
  {
    id: 5,
    eventId: 2,
    name: "Emily Parker",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
    rating: 4,
    date: "July 11, 2022",
    content:
      "Well-organized event with great content. The networking opportunities were excellent, though some sessions were a bit crowded.",
  },
]

// DOM Content Loaded Event
document.addEventListener("DOMContentLoaded", () => {
  // Check which page we're on
  const currentPage = window.location.pathname

  if (currentPage.includes("index.html") || currentPage === "/") {
    // Home page functionality
    loadFeaturedEvents()
    setupHomePageEventListeners()
  } else if (currentPage.includes("events.html")) {
    // Events page functionality
    loadAllEvents()
    setupEventsPageEventListeners()
  } else if (currentPage.includes("event-details.html")) {
    // Event details page functionality
    loadEventDetails()
    loadSimilarEvents()
    loadEventReviews()
  }
})

// Implement a loading indicator:
function showLoadingIndicator() {
  const loadingIndicator = document.createElement("div")
  loadingIndicator.className = "loading-indicator"
  loadingIndicator.innerHTML =
    '<div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>'
  document.body.appendChild(loadingIndicator)
}

function hideLoadingIndicator() {
  const loadingIndicator = document.querySelector(".loading-indicator")
  if (loadingIndicator) {
    loadingIndicator.remove()
  }
}

// Implement error handling:
function handleError(error) {
  console.error("An error occurred:", error)
  const errorMessage = document.createElement("div")
  errorMessage.className = "alert alert-danger"
  errorMessage.textContent = "An error occurred while loading events. Please try again later."
  document.querySelector(".events-section").prepend(errorMessage)
}

// Home Page Functions
function loadFeaturedEvents() {
  const featuredEventsContainer = document.getElementById("featuredEvents")
  if (!featuredEventsContainer) return

  // Get 3 random events for featured section
  const shuffled = [...eventsData].sort(() => 0.5 - Math.random())
  const featured = shuffled.slice(0, 3)

  let html = ""
  featured.forEach((event) => {
    html += createEventCard(event)
  })

  featuredEventsContainer.innerHTML = html
}

function createEventCard(event) {
  const date = new Date(event.date)
  const day = date.getDate()
  const month = date.toLocaleString("default", { month: "short" })

  return `
    <div class="col-md-6 col-lg-4 mb-4">
      <div class="event-card">
        <div class="event-image">
          <img src="${event.image}" alt="${event.title}">
          <div class="event-date">
            <span class="day">${day}</span>
            <span class="month">${month}</span>
          </div>
          <div class="event-category">
            <span>${event.category.charAt(0).toUpperCase() + event.category.slice(1)}</span>
          </div>
        </div>
        <div class="event-content">
          <h3 class="event-title">${event.title}</h3>
          <div class="event-location">
            <i class="bi bi-geo-alt"></i> ${event.location}
          </div>
          <div class="event-description">
            ${event.description}
          </div>
          <div class="event-footer">
            <div class="event-price">
              ${event.price}
            </div>
            <a href="event-details.html?id=${event.id}" class="btn btn-sm btn-outline-primary">View Details</a>
          </div>
        </div>
      </div>
    </div>
  `
}

function setupHomePageEventListeners() {
  // Search button click
  const searchBtn = document.getElementById("searchBtn")
  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      const citySearch = document.getElementById("citySearch").value
      if (citySearch.trim() !== "") {
        window.location.href = `events.html?city=${encodeURIComponent(citySearch)}`
      }
    })
  }

  // City search on Enter key
  const citySearch = document.getElementById("citySearch")
  if (citySearch) {
    citySearch.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const citySearch = document.getElementById("citySearch").value
        if (citySearch.trim() !== "") {
          window.location.href = `events.html?city=${encodeURIComponent(citySearch)}`
        }
      }
    })
  }

  // Apply filters button
  const applyFilters = document.getElementById("applyFilters")
  if (applyFilters) {
    applyFilters.addEventListener("click", () => {
      const category = document.getElementById("categoryFilter").value
      const date = document.getElementById("dateFilter").value
      window.location.href = `events.html?category=${category}&date=${date}`
    })
  }

  // Category cards
  const categoryCards = document.querySelectorAll(".category-card")
  categoryCards.forEach((card) => {
    card.addEventListener("click", function () {
      const category = this.getAttribute("data-category")
      window.location.href = `events.html?category=${category}`
    })
  })

  // City cards
  const cityCards = document.querySelectorAll(".city-card")
  cityCards.forEach((card) => {
    card.addEventListener("click", function () {
      const city = this.getAttribute("data-city")
      window.location.href = `events.html?city=${city}`
    })
  })
}

// Events Page Functions
function loadAllEvents() {
  showLoadingIndicator()
  const eventsListContainer = document.getElementById("eventsList")
  if (!eventsListContainer) return

  // Get URL parameters for filtering
  const urlParams = new URLSearchParams(window.location.search)
  const categoryParam = urlParams.get("category")
  const dateParam = urlParams.get("date")
  const cityParam = urlParams.get("city")
  const searchTerm = urlParams.get("search")

  // Filter events based on URL parameters
  let filteredEvents = [...eventsData]

  if (categoryParam && categoryParam !== "all") {
    filteredEvents = filteredEvents.filter((event) => event.category === categoryParam)
  }

  if (dateParam && dateParam !== "all") {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    const nextWeek = new Date(today)
    nextWeek.setDate(nextWeek.getDate() + 7)

    const nextMonth = new Date(today)
    nextMonth.setMonth(nextMonth.getMonth() + 1)

    switch (dateParam) {
      case "today":
        filteredEvents = filteredEvents.filter((event) => {
          const eventDate = new Date(event.date)
          return eventDate.toDateString() === today.toDateString()
        })
        break
      case "tomorrow":
        filteredEvents = filteredEvents.filter((event) => {
          const eventDate = new Date(event.date)
          return eventDate.toDateString() === tomorrow.toDateString()
        })
        break
      case "week":
        filteredEvents = filteredEvents.filter((event) => {
          const eventDate = new Date(event.date)
          return eventDate >= today && eventDate <= nextWeek
        })
        break
      case "month":
        filteredEvents = filteredEvents.filter((event) => {
          const eventDate = new Date(event.date)
          return eventDate >= today && eventDate <= nextMonth
        })
        break
    }
  }

  if (cityParam && cityParam !== "all") {
    filteredEvents = filteredEvents.filter((event) => event.location.toLowerCase().includes(cityParam.toLowerCase()))
  }

  if (searchTerm) {
    filteredEvents = filteredEvents.filter(
      (event) =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }

  // Update events count
  const eventsCount = document.getElementById("eventsCount")
  if (eventsCount) {
    eventsCount.textContent = `Events (${filteredEvents.length})`
  }

  // Generate HTML for events
  let html = ""
  if (filteredEvents.length > 0) {
    filteredEvents.forEach((event) => {
      html += createEventListItem(event)
    })
  } else {
    html = `
      <div class="col-12">
        <div class="alert alert-info">
          No events found matching your criteria. Try adjusting your filters.
        </div>
      </div>
    `
  }

  eventsListContainer.innerHTML = html
  hideLoadingIndicator()
}

function createEventListItem(event) {
  const date = new Date(event.date)
  const day = date.getDate()
  const month = date.toLocaleString("default", { month: "short" })
  const year = date.getFullYear()

  return `
    <div class="col-md-6 col-lg-4 mb-4">
      <div class="event-card">
        <div class="event-image">
          <img src="${event.image}" alt="${event.title}">
          <div class="event-date">
            <span class="day">${day}</span>
            <span class="month">${month}</span>
          </div>
          <div class="event-category">
            <span>${event.category.charAt(0).toUpperCase() + event.category.slice(1)}</span>
          </div>
        </div>
        <div class="event-content">
          <h3 class="event-title">${event.title}</h3>
          <div class="event-location">
            <i class="bi bi-geo-alt"></i> ${event.location}
          </div>
          <div class="event-description">
            ${event.description}
          </div>
          <div class="event-footer">
            <div class="event-price">
              ${event.price}
            </div>
            <a href="event-details.html?id=${event.id}" class="btn btn-sm btn-outline-primary">View Details</a>
          </div>
        </div>
      </div>
    </div>
  `
}

function setupEventsPageEventListeners() {
  // Apply filters button
  const applyFiltersPage = document.getElementById("applyFiltersPage")
  if (applyFiltersPage) {
    applyFiltersPage.addEventListener("click", () => {
      const location = document.getElementById("locationFilter").value
      const category = document.getElementById("categoryFilterPage").value
      const startDate = document.getElementById("startDate").value
      const endDate = document.getElementById("endDate").value

      let url = "events.html?"
      if (location !== "all") url += `city=${location}&`
      if (category !== "all") url += `category=${category}&`
      if (startDate) url += `startDate=${startDate}&`
      if (endDate) url += `endDate=${endDate}&`

      // Remove trailing & if exists
      if (url.endsWith("&")) {
        url = url.slice(0, -1)
      }

      window.location.href = url
    })
  }

  // Reset filters button
  const resetFilters = document.getElementById("resetFilters")
  if (resetFilters) {
    resetFilters.addEventListener("click", () => {
      window.location.href = "events.html"
    })
  }

  // View toggle buttons
  const gridView = document.getElementById("gridView")
  const listView = document.getElementById("listView")
  const eventsList = document.getElementById("eventsList")

  if (gridView && listView && eventsList) {
    gridView.addEventListener("click", () => {
      gridView.classList.add("active")
      listView.classList.remove("active")
      eventsList.classList.remove("list-view")
    })

    listView.addEventListener("click", () => {
      listView.classList.add("active")
      gridView.classList.remove("active")
      eventsList.classList.add("list-view")
    })
  }

  // Sort events dropdown
  const sortEvents = document.getElementById("sortEvents")
  if (sortEvents) {
    sortEvents.addEventListener("change", function () {
      const sortValue = this.value
      const eventsContainer = document.getElementById("eventsList")
      const eventCards = Array.from(eventsContainer.querySelectorAll(".col-md-6"))

      eventCards.sort((a, b) => {
        const aTitle = a.querySelector(".event-title").textContent
        const bTitle = b.querySelector(".event-title").textContent

        if (sortValue === "name-asc") {
          return aTitle.localeCompare(bTitle)
        } else if (sortValue === "name-desc") {
          return bTitle.localeCompare(aTitle)
        }

        // Date sorting would require extracting dates from the DOM or data
        // This is a simplified example
        return 0
      })

      eventsContainer.innerHTML = ""
      eventCards.forEach((card) => {
        eventsContainer.appendChild(card)
      })
    })
  }

  // Optimize event filtering:
  function debounce(func, delay) {
    let timeoutId
    return function (...args) {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => func.apply(this, args), delay)
    }
  }

  const debouncedSearch = debounce(() => {
    loadAllEvents()
  }, 300)

  const searchEventsInput = document.getElementById("searchEvents")
  if (searchEventsInput) {
    searchEventsInput.addEventListener("input", debouncedSearch)
  }
}

// Event Details Page Functions
function loadEventDetails() {
  // Get event ID from URL
  const urlParams = new URLSearchParams(window.location.search)
  const eventId = Number.parseInt(urlParams.get("id"))

  if (!eventId) {
    window.location.href = "events.html"
    return
  }

  // Find the event
  const event = eventsData.find((e) => e.id === eventId)

  if (!event) {
    window.location.href = "events.html"
    return
  }

  // Update page title
  document.title = `${event.title} - Event Locator`

  // Update event details
  document.getElementById("eventTitle").textContent = event.title
  document.getElementById("eventBreadcrumb").textContent = event.title
  document.getElementById("eventImage").src = event.image
  document.getElementById("eventImage").alt = event.title
  document.getElementById("eventCategory").innerHTML =
    `<span>${event.category.charAt(0).toUpperCase() + event.category.slice(1)}</span>`

  // Format date
  const eventDate = new Date(event.date)
  const formattedDate = eventDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  document.getElementById("eventDate").textContent = formattedDate
  document.getElementById("eventTime").textContent = event.time
  document.getElementById("eventLocation").textContent = event.location
  document.getElementById("eventPrice").textContent = event.price
  document.getElementById("eventDescription").innerHTML = event.fullDescription
  document.getElementById("sidebarPrice").textContent = event.price

  // Update tags
  let tagsHtml = ""
  event.tags.forEach((tag) => {
    tagsHtml += `<span class="tag">${tag}</span>`
  })
  document.getElementById("eventTags").innerHTML = tagsHtml

  // Update organizer details
  document.getElementById("organizerDetails").innerHTML = `
    <img src="${event.organizer.image}" alt="${event.organizer.name}" class="organizer-image">
    <div class="organizer-content">
      <h4>${event.organizer.name}</h4>
      <p>${event.organizer.description}</p>
      <a href="#" class="organizer-link">View Profile</a>
    </div>
  `

  // Update venue details
  document.getElementById("venueDetails").innerHTML = `
    <h4>${event.venue.name}</h4>
    <p><i class="bi bi-geo-alt"></i> ${event.venue.address}</p>
    <div class="venue-map">
      <img src="${event.venue.image}" alt="Map" class="img-fluid rounded">
    </div>
    <a href="#" class="btn btn-sm btn-outline-primary mt-2">
      <i class="bi bi-map"></i> Get Directions
    </a>
  `
}

// Add a map initialization function for the event details page:
function initMap() {
  // Replace EVENT_LATITUDE and EVENT_LONGITUDE with actual values from event data
  // For demonstration purposes, using hardcoded values
  const eventLocation = { lat: 34.0522, lng: -118.2437 } // Example: Los Angeles coordinates
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: eventLocation,
  })
  const marker = new google.maps.Marker({
    position: eventLocation,
    map: map,
    title: "Event Location",
  })
}

function loadSimilarEvents() {
  const similarEventsContainer = document.getElementById("similarEvents")
  if (!similarEventsContainer) return

  // Get current event ID
  const urlParams = new URLSearchParams(window.location.search)
  const eventId = Number.parseInt(urlParams.get("id"))

  if (!eventId) return

  // Find the current event
  const currentEvent = eventsData.find((e) => e.id === eventId)

  if (!currentEvent) return

  // Find similar events (same category, excluding current)
  const similarEvents = eventsData
    .filter((e) => e.category === currentEvent.category && e.id !== currentEvent.id)
    .slice(0, 3)

  let html = ""
  similarEvents.forEach((event) => {
    html += `
      <div class="similar-event-item">
        <img src="${event.image}" alt="${event.title}" class="similar-event-image">
        <div class="similar-event-content">
          <h4>${event.title}</h4>
          <p>${new Date(event.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })} | ${event.time}</p>
          <a href="event-details.html?id=${event.id}" class="btn btn-sm btn-link p-0">View Details</a>
        </div>
      </div>
    `
  })

  similarEventsContainer.innerHTML = html
}

function loadEventReviews() {
  const reviewsListContainer = document.getElementById("reviewsList")
  if (!reviewsListContainer) return

  // Get current event ID
  const urlParams = new URLSearchParams(window.location.search)
  const eventId = Number.parseInt(urlParams.get("id"))

  if (!eventId) return

  // Find reviews for this event
  const eventReviews = reviewsData.filter((review) => review.eventId === eventId)

  let html = ""
  if (eventReviews.length > 0) {
    eventReviews.forEach((review) => {
      // Generate stars HTML
      let starsHtml = ""
      for (let i = 1; i <= 5; i++) {
        if (i <= review.rating) {
          starsHtml += '<i class="bi bi-star-fill"></i>'
        } else {
          starsHtml += '<i class="bi bi-star"></i>'
        }
      }

      html += `
        <div class="review-item">
          <div class="review-header">
            <div class="reviewer-info">
              <img src="${review.avatar}" alt="${review.name}" class="reviewer-avatar">
              <div>
                <div class="reviewer-name">${review.name}</div>
                <div class="review-date">${review.date}</div>
              </div>
            </div>
            <div class="review-rating">
              ${starsHtml}
            </div>
          </div>
          <div class="review-content">
            <p>${review.content}</p>
          </div>
        </div>
      `
    })
  } else {
    html = `
      <div class="text-center py-4">
        <p>No reviews yet. Be the first to review this event!</p>
      </div>
    `
  }

  reviewsListContainer.innerHTML = html
}

// Initialize Google Maps API (replace with your API key)
let google

